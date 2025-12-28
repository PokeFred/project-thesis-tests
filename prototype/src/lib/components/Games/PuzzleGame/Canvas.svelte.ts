import Konva from "konva";
import type { KonvaEventObject } from "konva/lib/Node";
import type { Vector2d } from "konva/lib/types";
import type { SlotGroup } from "./PuzzleController.svelte";
import type PuzzleController from "./PuzzleController.svelte";

// TODO: scrollbar puzzle container
// TODO: puzzle piece container seperat
// TODO: bounds für bild machen, über dem puzzle piece container
// TODO: pan and zoom an übergebene parameter bounds festmachen, nicht nur an stage
export default class Canvas {
    private puzzleController: PuzzleController;
    private container: HTMLDivElement;
    private stage: Konva.Stage;

    private backgroundLayer: Konva.Layer;
    private gameLayer: Konva.Layer;
    private hudLayer: Konva.Layer;

    
    private pieces: Konva.Image[];
    private puzzle: Puzzle;
    private puzzlePieceContainer: PuzzlePieceContainer;
    
    constructor(puzzleController: PuzzleController, container: HTMLDivElement, background: HTMLImageElement, slotGroups: SlotGroup[]) {
        this.puzzleController = puzzleController;
        this.container = container;
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
        
        this.puzzle = new Puzzle(this, background, slotGroups);
        this.pieces = new Array<Konva.Image>();
        slotGroups.forEach((slotGroup: SlotGroup) => {
            this.pieces.push(this.createPiece(slotGroup.piece));
            slotGroup.noise?.forEach((piece: HTMLImageElement) => {
                this.pieces.push(this.createPiece(piece));
            });
        });
        this.puzzlePieceContainer = new PuzzlePieceContainer(this);

        this.createBackground();
    }

    public get Container() { return this.container; }
    public get Stage() { return this.stage; }
    public get GameLayer() { return this.gameLayer; }
    public get HudLayer() { return this.hudLayer; }
    public get PuzzlePieceContainer() { return this.puzzlePieceContainer; }
    public get Scale() { return this.puzzle.Scale; }
    public get Slots() { return this.puzzle.Slots; }
    public get Puzzle() { return this.puzzle; }
    public get Pieces() { return this.pieces; }

    private createBackground(): void {
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

    // public fitStageIntoContainer(): void {
    //     const scale = Math.max(this.container.offsetWidth / this.stage.width(), this.container.offsetHeight / this.stage.height());
    //     this.stage.width(this.stage.width() * scale);
    //     this.stage.height(this.stage.height() * scale);
    //     this.stage.scale({ x: scale, y: scale });
    // }
}

class Puzzle {
    private readonly canvas: Canvas;
    private readonly stage: Konva.Stage;
    private readonly layer: Konva.Layer;

    private readonly boundary: Konva.Group;
    private readonly field: Konva.Group;

    private panAndZoom: PanAndZoom;

    private scale!: number;

    private slots: Konva.Path[];

    constructor(canvas: Canvas, image: HTMLImageElement, slotGroups: SlotGroup[]) {
        this.canvas = canvas;
        this.stage = this.canvas.Stage;
        this.layer = this.canvas.GameLayer;

        this.boundary = new Konva.Group;
        this.field = this.createField(image);

        this.boundary.add(this.field);
        this.layer.add(this.boundary);

        const rec = new Konva.Rect({width: this.boundary.width() + 100, height: this.boundary.height() + 1000, stroke: "black"});
        this.boundary.add(rec) ////////////////////////


        this.panAndZoom = new PanAndZoom(this.field);
        this.field.on("touchend", this.panAndZoom.touchend.bind(this.panAndZoom));
        this.field.on("touchmove", this.panAndZoom.touchmove.bind(this.panAndZoom));

        this.slots = slotGroups.map((slotGroup: SlotGroup) => this.createSlot(slotGroup.path));
    }


    public get Field() { return this.field; }
    public get Scale() { return this.scale; }
    public get Slots() { return this.slots; }

    private createField(background: HTMLImageElement): Konva.Group {
        this.scale =  Math.min(this.stage.width() / background.naturalWidth, this.stage.height() / background.naturalHeight);

        console.log(this.scale)
        const IMAGE: Konva.Image = new Konva.Image({
            image: background,
            scale: {x: this.scale, y: this.scale},
        });
        const GROUP: Konva.Group = new Konva.Group;
        GROUP.add(IMAGE);
        return GROUP;
    }

    private createSlot(path: string): Konva.Path {
        const COLOR = getComputedStyle(this.canvas.Container).getPropertyValue("--color-primary").trim();
        const SLOT = new Konva.Path({
            data: path,
            fill: COLOR,
            strokeEnabled: false,
            hitStrokeWidth: 0,
            scale: {x: this.scale, y: this.scale}
        })
        this.field.add(SLOT);
        return SLOT;
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
                if(pos.x > LEFT_BOUND) {
                    return { x: LEFT_BOUND, y: this.y() }
                }
                else if(pos.x + this.width() < RIGHT_BOUND) {
                    return { x: RIGHT_BOUND - this.width(), y: this.y() }
                }
                else {
                    return { x: pos.x, y: this.y() }
                }
            },
        });
        this.slotMapping = new Map<Konva.Image, Konva.Group>();

        this.width = 0;
        this.height = 60;
        this.gap = 40;
        this.margin = 10;

        this.layer.add(this.container);
        this.draw();
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

    private draw(): void {
        this.drawPuzzlePieceContainer();
        this.drawPieces();
    }
}

// class ExitButton {
//     private layer: Konva.Layer;
//     private button: Konva.Group;

//     private readonly width: number;
//     private readonly height: number;
//     private readonly margin: number;

//     constructor(layer: Konva.Layer, pointerclick: () => void) {
//         this.layer = layer;
//         this.button = new Konva.Group();
//         this.button.on("pointerclick", pointerclick);

//         this.width = 40;
//         this.height = 40;
//         this.margin = 20;

//         this.button.x(this.layer.getStage().width() - this.width / 2 - this.margin)
//         this.button.y(this.height / 2 + this.margin)
//         this.button.width(this.width);
//         this.button.height(this.height);
        
//         this.create();
//     }

//     private create(): void {
//         const COLOR_PRIMARY = getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim();
//         const COLOR_SECONDARY = getComputedStyle(document.documentElement).getPropertyValue("--color-secondary").trim();
//         this.button.add(
//             new Konva.Circle({
//                 width: this.width,
//                 height: this.height,
//                 fill: COLOR_SECONDARY,
//             })
//         );
//         this.button.add(
//             new Konva.Line({
//                 points: [-10,-10, 10,10],
//                 stroke: COLOR_PRIMARY,
//                 strokeWidth: 3,
//             })
//         );  

//         this.button.add(
//             new Konva.Line({
//                 points: [10,-10, -10,10],
//                 stroke: COLOR_PRIMARY,
//                 strokeWidth: 3,
//             })
//         );
//     }

//     public draw(): void {
//         this.layer.add(this.button);
//     }
// }

// class Fullscreen {
//     private readonly canvas;

//     constructor(canvas: Canvas) {
//         this.canvas = canvas;
//         this.canvas.HudLayer.hide();

//         this.canvas.Container.addEventListener("fullscreenchange", () => this.Enabled ?  undefined : this.canvas.HudLayer.hide());
//     }

//     public get Enabled() { return document.fullscreenElement ? true : false; }

//     public async enable(): Promise<void> {
//         if(!this.Enabled) {
//             await this.canvas.Container.requestFullscreen({navigationUI: "hide"})
//             if(this.Enabled) {
//                 this.canvas.HudLayer.show();
//                 this.canvas.fitStageIntoContainer();
//             }
//         }
//     }

//     public async disable(): Promise<void> {
//         if(this.Enabled) {
//             await document.exitFullscreen();
//             this.canvas.fitStageIntoContainer();
//             this.canvas.HudLayer.hide();
//         }
//     }
// }

// https://konvajs.org/docs/sandbox/Multi-touch_Scale_Stage.html
class PanAndZoom {
    private stage: Konva.Stage;
    private container: Konva.Container;
    
    private lastCenter: Vector2d | null;
    private lastDist;
    private dragStopped;

    private readonly MAX_ZOOM = 5;
    private readonly MIN_ZOOM = 1;

    constructor(container: Konva.Container) {
        this.stage = container.getStage()!;
        this.container = container;
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
        if (touch1 && !touch2 && !this.container.isDragging() && this.dragStopped) {
            this.container.startDrag();
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
                    const rect = this.container.getClientRect();
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
                            this.container.x(left + dx);
                        }
                    }
                    // bildbreite > viewportBreite
                    else {
                        if(!(dx < 0 && right < rightBound) && !(dx > 0 && left > leftBound)) {
                            this.container.x(left + dx);
                        }
                    }

                    // bildhöhe < viewporthöhe
                    if(rect.height < this.stage.height()) {
                        if(!(dy < 0 && top < topBound) && !(dy > 0 && bottom > bottomBound)) {
                            this.container.y(top + dy);
                        }
                    }
                    // bild > viewport
                    else {
                        if(!(dy < 0 && bottom < bottomBound) && !(dy > 0 && top > topBound)) {
                            this.container.y(top + dy);
                        }
                    }
                }
            this.lastCenter = p1;
        }

        else if (touch1 && touch2) {
            // if the stage was under Konva's drag&drop
            // we need to stop it, and implement our own pan logic with two pointers
            if (this.container.isDragging()) {
                this.dragStopped = true;
                this.container.stopDrag();
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
                x: (newCenter.x - this.container.x()) / this.container.scaleX(),
                y: (newCenter.y - this.container.y()) / this.container.scaleX(),
            };

            const scale = this.container.scaleX() * (dist / this.lastDist);

            if(scale > this.MAX_ZOOM || scale < this.MIN_ZOOM) {
                return;
            }

            this.container.scaleY(scale);
            this.container.scaleX(scale);

            // calculate new position of the stage
            const dx = newCenter.x - this.lastCenter.x;
            const dy = newCenter.y - this.lastCenter.y;

            const newPos = {
                x: newCenter.x - pointTo.x * scale + dx,
                y: newCenter.y - pointTo.y * scale + dy,
            };

            // Bounds berechnen
            const rectPlayfield = this.container.getClientRect();
            const leftBound = 0;
            const rightBound = this.stage.width();
            const topBound = 0;
            const bottomBound = this.stage.height();

            // bildbreite < viewportBreite
            if(rectPlayfield.width < this.stage.width()) {
                if(newPos.x < leftBound) {
                    this.container.x(leftBound);
                }
                else if(newPos.x + rectPlayfield.width > rightBound) {
                    this.container.x(rightBound - rectPlayfield.width);
                }
                else {
                    this.container.x(newPos.x);
                }
            }
            // bildbreite > viewportBreite
            else {
                if(newPos.x > leftBound) {
                    this.container.x(leftBound);
                }
                else if(newPos.x + rectPlayfield.width < rightBound) {
                    this.container.x(rightBound - rectPlayfield.width);
                }
                else {
                    this.container.x(newPos.x);
                }
            }

            // bildhöhe < viewporthöhe
            if(rectPlayfield.height < this.stage.height()) {
                if(newPos.y < topBound) {
                    this.container.y(topBound);
                }
                else if(newPos.y + rectPlayfield.height > bottomBound) {
                    this.container.y(bottomBound - rectPlayfield.height);
                }
                else {
                    this.container.y(newPos.y);
                }
            }
            // bild > viewport
            else {
                if(newPos.y > topBound) {
                    this.container.y(topBound);
                }
                else if(newPos.y + rectPlayfield.height < bottomBound) {
                    this.container.y(bottomBound - rectPlayfield.height);
                }
                else {
                    this.container.y(newPos.y);
                }
            }

            this.lastDist = dist;
            this.lastCenter = newCenter;
        }
    }
}