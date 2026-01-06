import Konva from "konva";
import type { KonvaEventObject } from "konva/lib/Node";
import type { Vector2d } from "konva/lib/types";
import type { SlotGroup } from "./PuzzleController.svelte";
import type PuzzleController from "./PuzzleController.svelte";
import { width } from "@fortawesome/free-solid-svg-icons/faMinus";
import PanAndZoom from "../PanAndZoom";

// TODO: scrollbar puzzle container
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
        

        this.pieces = new Array<Konva.Image>();
        slotGroups.forEach((slotGroup: SlotGroup) => {
            const PIECE: Konva.Image = this.createPiece(slotGroup.piece);
            const RECT = PIECE.getClientRect();
            this.pieces.push(this.createPiece(slotGroup.piece));
            slotGroup.noise?.forEach((piece: HTMLImageElement) => {
                this.pieces.push(this.createPiece(piece, RECT));
            });
        });
        this.puzzlePieceContainer = new PuzzlePieceContainer(this);
        this.puzzle = new Puzzle(this, background, slotGroups);

        this.createBackground();
    }

    public get Container() { return this.container; }
    public get Stage() { return this.stage; }
    public get GameLayer() { return this.gameLayer; }
    public get HudLayer() { return this.hudLayer; }
    public get PuzzlePieceContainer() { return this.puzzlePieceContainer; }
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

    private createPiece(img: HTMLImageElement, dim?: {width: number, height: number, x: number, y: number}): Konva.Image {
        const piece: Konva.Image = new Konva.Image({
            image: img,
            width: dim?.width,
            height: dim?.height,
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

    private slots: Konva.Path[];

    constructor(canvas: Canvas, image: HTMLImageElement, slotGroups: SlotGroup[]) {
        this.canvas = canvas;
        this.stage = this.canvas.Stage;
        this.layer = this.canvas.GameLayer;

        this.boundary = this.createBoundary();
        this.field = this.createField(image);

        this.boundary.add(this.field);
        this.layer.add(this.boundary);

        this.panAndZoom = new PanAndZoom(this.field, this.boundary);
        this.field.on("touchend", this.panAndZoom.touchend.bind(this.panAndZoom));
        this.field.on("touchmove", this.panAndZoom.touchmove.bind(this.panAndZoom));

        this.slots = slotGroups.map((slotGroup: SlotGroup) => this.createSlot(slotGroup.path));
    }


    public get Field() { return this.field; }
    public get Slots() { return this.slots; }

    private createBoundary(): Konva.Group {
        const WIDTH: number = this.stage.width();
        const HEIGHT: number = this.stage.height() - this.canvas.PuzzlePieceContainer.Height;
        const BOUNDARY: Konva.Rect = new Konva.Rect({
            width: WIDTH,
            height: HEIGHT
        });
        
        const GROUP: Konva.Group = new Konva.Group({
            width: WIDTH,
            height: HEIGHT
        });
        GROUP.add(BOUNDARY);
        return GROUP;
    }

    private createField(background: HTMLImageElement): Konva.Group {
        const RECT = this.boundary.getClientRect();

        const SCALE =  Math.min(RECT.width / background.naturalWidth, RECT.height / background.naturalHeight);
        const OFFSET_X = (this.boundary.width() - (background.naturalWidth * SCALE)) / 2;
        const OFFSET_Y = (this.boundary.height() - (background.naturalHeight * SCALE)) / 2;

        const IMAGE: Konva.Image = new Konva.Image({image: background});
        const GROUP: Konva.Group = new Konva.Group({
            x: OFFSET_X,
            y: OFFSET_Y,
            scale: {x: SCALE, y: SCALE}
        });
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

    public get Container() { return this.container; }
    public get Height() { return this.height; }

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
                fill: COLOR
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