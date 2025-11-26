import Konva from "konva";
import type { KonvaEventObject } from "konva/lib/Node";
import type { Vector2d } from "konva/lib/types";
import type { SlotGroup } from "./PuzzleController.svelte";
import type PuzzleController from "./PuzzleController.svelte";

// TODO: fix window resize / browser zoom
// TODO: fix landscape / portrait swap
// TODO: fix website scale. always 100% when playing.
// TODO: scrollbar puzzle container
// TODO: fullscreen
export default class Canvas {
    private puzzleController: PuzzleController;
    private container: HTMLDivElement;
    private background: HTMLImageElement;
    private stage: Konva.Stage;

    private backgroundLayer: Konva.Layer;
    private gameLayer: Konva.Layer;
    private hudLayer: Konva.Layer;

    // private fullscreen: Fullscreen;
    private panAndZoomGameLayer: PanAndZoom;

    private scale: number;
    private offsetX: number;
    private offsetY: number;

    private playfield!: Konva.Image;
    private slots: Konva.Path[];
    private pieces: Konva.Image[];
    private puzzlePieceContainer: PuzzlePieceContainer;
    private exitButton: ExitButton;
    
    constructor(puzzleController: PuzzleController, container: HTMLDivElement, background: HTMLImageElement, slotGroups: SlotGroup[]) {
        this.puzzleController = puzzleController;
        this.container = container;
        this.background = background;
        this.stage = new Konva.Stage({
            container: container,
            width: container.clientWidth,
            height: container.clientHeight
        });

        this.backgroundLayer = new Konva.Layer();
        this.gameLayer = new Konva.Layer();
        this.hudLayer = new Konva.Layer();

        this.stage.add(this.backgroundLayer);
        this.stage.add(this.gameLayer);
        this.stage.add(this.hudLayer);

        // this.fullscreen = new Fullscreen(this);
        // this.stage.on("pointerclick", this.fullscreen.enable.bind(this.fullscreen));
        this.panAndZoomGameLayer = new PanAndZoom(this.gameLayer);
        this.gameLayer.on("touchend", this.panAndZoomGameLayer.touchend.bind(this.panAndZoomGameLayer));
        this.gameLayer.on("touchmove", this.panAndZoomGameLayer.touchmove.bind(this.panAndZoomGameLayer));

        this.scale = 1;
        this.offsetX = 0;
        this.offsetY = 0;

        this.slots = new Array<Konva.Path>();
        this.pieces = new Array<Konva.Image>();
        this.puzzlePieceContainer = new PuzzlePieceContainer(this);
        this.exitButton = new ExitButton(this.HudLayer, this.puzzleController.exitFullscreen.bind(this.puzzleController));

        this.fitStageIntoContainer();
        this.init(background, slotGroups);        
        this.drawAll();
    }

    public get Container() { return this.container; }
    public get Stage() { return this.stage; }
    // public get Fullscreen() { return this.fullscreen; }
    public get GameLayer() { return this.gameLayer; }
    public get HudLayer() { return this.hudLayer; }
    public get PuzzlePieceContainer() { return this.puzzlePieceContainer; }
    public get Scale() { return this.scale; }
    public get Slots() { return this.slots; }
    public get Pieces() { return this.pieces; }

    private init(background: HTMLImageElement, slotGroups: SlotGroup[]): void {
        this.playfield = this.createPlayfield(background);
        slotGroups.forEach((slotGroup: SlotGroup) => {
            this.slots.push(this.createSlot(slotGroup.path));
            this.pieces.push(this.createPiece(slotGroup.piece));
            slotGroup.noise?.forEach((piece: HTMLImageElement) => {
                this.pieces.push(this.createPiece(piece));
            });
        });
    }

    private createSlot(path: string): Konva.Path {
        const COLOR = getComputedStyle(this.container).getPropertyValue("--color-primary").trim();
        return new Konva.Path({
            data: path,
            fill: COLOR,
            strokeEnabled: false,
            hitStrokeWidth: 0,
            scale: {x: this.scale, y: this.scale}
        })
    }

    private drawSlots(): void {
        this.slots.forEach((slot: Konva.Path) => this.gameLayer.add(slot));
    }

    private createPlayfield(background: HTMLImageElement): Konva.Image {
        this.scale =  Math.min(this.stage.width() / background.naturalWidth, this.stage.height() / background.naturalHeight);
        this.offsetX = (this.stage.width() - (background.naturalWidth * this.scale)) / 2;
        this.offsetY = (this.stage.height() - (background.naturalHeight * this.scale)) / 2;

        return new Konva.Image({
            id: "playfield",
            image: background,
            scale: {x: this.scale, y: this.scale},
        });
    }

    private drawPlayfield(): void {
        this.gameLayer.add(this.playfield);
    }

    private createAndDrawBackground(): void {
        const COLOR = getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim();
        this.backgroundLayer.add(
            new Konva.Rect({
                x: 0,
                y: 0,
                width: this.stage.width(),
                height: this.stage.height(),
                fill: COLOR
            })
        );
    }

    private createPiece(img: HTMLImageElement): Konva.Image {
        const piece: Konva.Image = new Konva.Image({
            image: img,
            shadowEnabled: false,
            strokeEnabled: false,
            shadowBlur: 0,
            draggable: true,
        });
        piece.on("dragstart", this.puzzleController.dragStartPiece.bind(this.puzzleController));
        piece.on("dragend", this.puzzleController.dragStopPiece.bind(this.puzzleController));
        return piece;
    }

    private drawGame(): void {
        this.drawPlayfield();
        this.drawSlots();

        this.gameLayer.x(this.offsetX);
        this.gameLayer.y(this.offsetY);
    }

    private drawHUD(): void {
        this.puzzlePieceContainer.draw();
        this.exitButton.draw();
    }

    public drawAll(): void {
        this.createAndDrawBackground();
        this.drawGame();
        this.drawHUD();
    }

    private calculatePlayfieldScale(): void {
        this.scale =  Math.min(this.stage.width() / this.background.naturalWidth, this.stage.height() / this.background.naturalHeight);
        this.offsetX = (this.stage.width() - (this.background.naturalWidth * this.scale)) / 2;
        this.offsetY = (this.stage.height() - (this.background.naturalHeight * this.scale)) / 2;
    }

    public fitStageIntoContainer(): void {
        const scale = Math.max(this.container.offsetWidth / this.stage.width(), this.container.offsetHeight / this.stage.height());
        this.stage.width(this.stage.width() * scale);
        this.stage.height(this.stage.height() * scale);
        this.stage.scale({ x: scale, y: scale });
    }
}

class PuzzlePieceContainer {
    private readonly canvas: Canvas;
    private readonly stage: Konva.Stage;
    private readonly layer: Konva.Layer;
    private readonly container: Konva.Group;
    private readonly slotMapping: Map<Konva.Image, Konva.Group>;

    private width: number;
    private readonly height: number;
    private readonly gap: number;
    private readonly margin: number;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.stage = canvas.Stage,
        this.layer = canvas.HudLayer;
        this.container = new Konva.Group({
            draggable: true,
            dragBoundFunc(pos: Vector2d) {
                const LEFT_BOUND = 0
                const RIGHT_BOUND = this.getStage()!.width();
                if(pos.x <= LEFT_BOUND && pos.x + this.width() >= RIGHT_BOUND) {
                    return {x: pos.x, y: this.y()}
                }
                return {x: this.x(), y: this.y()}
            },
        });
        this.slotMapping = new Map<Konva.Image, Konva.Group>();

        this.width = 0;
        this.height = 60;
        this.gap = 40;
        this.margin = 10;

        this.layer.add(this.container);
    }

    private createPuzzlePieceContainerSlot(): Konva.Group {
        const slot = new Konva.Group({
            x: this.margin / 2,
            y: this.margin / 2,
            height: this.container.height() - this.margin,
            width: this.container.height() - this.margin,
        });
        // slot.add(new Konva.Rect({height: slot.height(), width: slot.width(), stroke: "green"}))
        return slot;
    }

    private drawPuzzlePieceContainer(): void {
        const COLOR = getComputedStyle(document.documentElement).getPropertyValue("--color-secondary").trim();
        const w: number = this.canvas.Pieces.length * (this.height - this.margin + this.gap) + this.gap;
        this.width = w < this.stage.width() ? this.stage.width() : w;

        this.container.width(this.width);
        this.container.height(this.height);
        this.container.x(0);
        this.container.y(this.stage.height() - this.container.height());
        this.container.add(
            new Konva.Rect({
                x: 0,
                y: 0,
                width: this.container.width(),
                height: this.container.height(),
                stroke: COLOR,
            })
        );
    }

    private drawPieces(): void {
        let currentX = this.gap;

        const CONTAINERS: Konva.Group[] = new Array<Konva.Group>();
        this.canvas.Pieces.forEach((piece: Konva.Image, i: number) => {
            const CONTAINER = this.createPuzzlePieceContainerSlot();
            CONTAINERS.push(CONTAINER);
            this.slotMapping.set(piece, CONTAINER);

            this.placePieceIntoContainer(piece);
        });

        const CONTAINERS_MIXED: Konva.Group[] = CONTAINERS.sort(() => Math.random() - 0.5);
        CONTAINERS_MIXED.forEach((container: Konva.Group) => {
            this.container.add(container);
            container.x(currentX);
            currentX += this.gap + container.width();
        })
    }

    public draw(): void {
        this.drawPuzzlePieceContainer();
        this.drawPieces();
    }

    public placePieceIntoContainer(piece: Konva.Image): void {
        const CONTAINER = this.slotMapping.get(piece)!;
        
        CONTAINER?.add(piece);

        const PIECE_SCALE = Math.min(CONTAINER.width() / piece.width(), CONTAINER.height() / piece.height());
        piece.scale({x: PIECE_SCALE, y: PIECE_SCALE});
        const RECT_PIECE = piece.getClientRect();
        piece.x((CONTAINER.width() - RECT_PIECE.width) / 2);
        piece.y((CONTAINER.height() - RECT_PIECE.height) / 2);
    }
}

class ExitButton {
    private layer: Konva.Layer;
    private button: Konva.Group;

    private readonly width: number;
    private readonly height: number;
    private readonly margin: number;

    constructor(layer: Konva.Layer, pointerclick: () => void) {
        this.layer = layer;
        this.button = new Konva.Group();
        this.button.on("pointerclick", pointerclick);

        this.width = 40;
        this.height = 40;
        this.margin = 20;

        this.button.x(this.layer.getStage().width() - this.width / 2 - this.margin)
        this.button.y(this.height / 2 + this.margin)
        this.button.width(this.width);
        this.button.height(this.height);
        
        this.create();
    }

    private create(): void {
        const COLOR_PRIMARY = getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim();
        const COLOR_SECONDARY = getComputedStyle(document.documentElement).getPropertyValue("--color-secondary").trim();
        this.button.add(
            new Konva.Circle({
                width: this.width,
                height: this.height,
                fill: COLOR_SECONDARY,
            })
        );
        this.button.add(
            new Konva.Line({
                points: [-10,-10, 10,10],
                stroke: COLOR_PRIMARY,
                strokeWidth: 3,
            })
        );  

        this.button.add(
            new Konva.Line({
                points: [10,-10, -10,10],
                stroke: COLOR_PRIMARY,
                strokeWidth: 3,
            })
        );
    }

    public draw(): void {
        this.layer.add(this.button);
    }
}

class Fullscreen {
    private readonly canvas;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.canvas.HudLayer.hide();

        this.canvas.Container.addEventListener("fullscreenchange", () => this.Enabled ?  undefined : this.canvas.HudLayer.hide());
    }

    public get Enabled() { return document.fullscreenElement ? true : false; }

    public async enable(): Promise<void> {
        if(!this.Enabled) {
            await this.canvas.Container.requestFullscreen({navigationUI: "hide"})
            if(this.Enabled) {
                this.canvas.HudLayer.show();
                this.canvas.fitStageIntoContainer();
            }
        }
    }

    public async disable(): Promise<void> {
        if(this.Enabled) {
            await document.exitFullscreen();
            this.canvas.fitStageIntoContainer();
            this.canvas.HudLayer.hide();
        }
    }
}

// https://konvajs.org/docs/sandbox/Multi-touch_Scale_Stage.html
class PanAndZoom {
    private layer: Konva.Layer;
    private stage: Konva.Stage;
    private lastCenter: Vector2d | null;
    private lastDist;
    private dragStopped;

    private readonly MAX_ZOOM = 5;
    private readonly MIN_ZOOM = 1;

    constructor(layer: Konva.Layer) {
        this.layer = layer;
        this.stage = layer.getStage();
        this.lastCenter = null;
        this.lastDist = 0;
        this.dragStopped = false;
    }

    private getDistance(p1: Vector2d, p2: Vector2d) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    private getCenter(p1: Vector2d, p2: Vector2d) {
        return {
            x: (p1.x + p2.x) / 2,
            y: (p1.y + p2.y) / 2,
        };
    }

    public touchend() {
        this.lastDist = 0;
        this.lastCenter = null;
    }

    public touchmove(e: KonvaEventObject<TouchEvent>) {
        e.evt.preventDefault();
        const touch1 = e.evt.touches[0];
        const touch2 = e.evt.touches[1];

        // we need to restore dragging, if it was cancelled by multi-touch
        if (touch1 && !touch2 && !this.layer.isDragging() && this.dragStopped) {
            this.layer.startDrag();
            this.dragStopped = false;
        }

        if(touch1 && !touch2) {
            const rect = this.stage.container().getBoundingClientRect();
            const p1 = {
                x: touch1.clientX - rect.left,
                y: touch1.clientY - rect.top,
            };

                if(this.lastCenter) {
                    const dx = p1.x - this.lastCenter.x;
                    const dy = p1.y - this.lastCenter.y;

                    // Bounds berechnen
                    const rect = this.layer.findOne("#playfield")!.getClientRect();
                    const left = rect.x;
                    const top = rect.y;
                    const right = left + rect.width;
                    const bottom = top + rect.height;

                    const leftBound = 0;
                    const rightBound = this.stage.width();
                    const topBound = 0;
                    const bottomBound = this.stage.height();

                    // bildbreite < viewportBreite
                    if(rect.width < this.stage.width()) {
                        if(!(dx < 0 && left < leftBound) && !(dx > 1 && right > rightBound)) {
                            this.layer.x(left + dx);
                        }
                    }
                    // bildbreite > viewportBreite
                    else {
                        if(!(dx < 0 && right < rightBound) && !(dx > 0 && left > leftBound)) {
                            this.layer.x(left + dx);
                        }
                    }

                    // bildhöhe < viewporthöhe
                    if(rect.height < this.stage.height()) {
                        if(!(dy < 0 && top < topBound) && !(dy > 0 && bottom > bottomBound)) {
                            this.layer.y(top + dy);
                        }
                    }
                    // bild > viewport
                    else {
                        if(!(dy < 0 && bottom < bottomBound) && !(dy > 0 && top > topBound)) {
                            this.layer.y(top + dy);
                        }
                    }
                }
            this.lastCenter = p1;
        }

        else if (touch1 && touch2) {
            // if the stage was under Konva's drag&drop
            // we need to stop it, and implement our own pan logic with two pointers
            if (this.layer.isDragging()) {
                this.dragStopped = true;
                this.layer.stopDrag();
            }

            const rect = this.stage.container().getBoundingClientRect();

            const p1 = {
                x: touch1.clientX - rect.left,
                y: touch1.clientY - rect.top,
            };
            const p2 = {
                x: touch2.clientX - rect.left,
                y: touch2.clientY - rect.top,
            };

            if (!this.lastCenter) {
                this.lastCenter = this.getCenter(p1, p2);
                return;
            }
            const newCenter = this.getCenter(p1, p2);

            const dist = this.getDistance(p1, p2);

            if (!this.lastDist) {
                this.lastDist = dist;
                this.lastCenter = newCenter;
            }

            // local coordinates of center point
            const pointTo = {
                x: (newCenter.x - this.layer.x()) / this.layer.scaleX(),
                y: (newCenter.y - this.layer.y()) / this.layer.scaleX(),
            };

            const scale = this.layer.scaleX() * (dist / this.lastDist);

            if(scale > this.MAX_ZOOM || scale < this.MIN_ZOOM) {
                return;
            }

            this.layer.scaleY(scale);
            this.layer.scaleX(scale);

            // calculate new position of the stage
            const dx = newCenter.x - this.lastCenter.x;
            const dy = newCenter.y - this.lastCenter.y;

            const newPos = {
                x: newCenter.x - pointTo.x * scale + dx,
                y: newCenter.y - pointTo.y * scale + dy,
            };

            // Bounds berechnen
            const rectPlayfield = this.layer.findOne("#playfield")!.getClientRect();
            const leftBound = 0;
            const rightBound = this.stage.width();
            const topBound = 0;
            const bottomBound = this.stage.height();

            // bildbreite < viewportBreite
            if(rectPlayfield.width < this.stage.width()) {
                if(newPos.x < leftBound) {
                    this.layer.x(leftBound);
                }
                else if(newPos.x + rectPlayfield.width > rightBound) {
                    this.layer.x(rightBound - rectPlayfield.width);
                }
                else {
                    this.layer.x(newPos.x);
                }
            }
            // bildbreite > viewportBreite
            else {
                if(newPos.x > leftBound) {
                    this.layer.x(leftBound);
                }
                else if(newPos.x + rectPlayfield.width < rightBound) {
                    this.layer.x(rightBound - rectPlayfield.width);
                }
                else {
                    this.layer.x(newPos.x);
                }
            }

            // bildhöhe < viewporthöhe
            if(rectPlayfield.height < this.stage.height()) {
                if(newPos.y < topBound) {
                    this.layer.y(topBound);
                }
                else if(newPos.y + rectPlayfield.height > bottomBound) {
                    this.layer.y(bottomBound - rectPlayfield.height);
                }
                else {
                    this.layer.y(newPos.y);
                }
            }
            // bild > viewport
            else {
                if(newPos.y > topBound) {
                    this.layer.y(topBound);
                }
                else if(newPos.y + rectPlayfield.height < bottomBound) {
                    this.layer.y(bottomBound - rectPlayfield.height);
                }
                else {
                    this.layer.y(newPos.y);
                }
            }

            this.lastDist = dist;
            this.lastCenter = newCenter;
        }
    }
}