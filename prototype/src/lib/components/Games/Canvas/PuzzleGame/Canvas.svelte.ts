import Konva from "konva";
import type { Vector2d } from "konva/lib/types";
import type { SlotGroup } from "./PuzzleController.svelte";
import type PuzzleController from "./PuzzleController.svelte";
import PanAndZoom from "../PanAndZoom";


export default class Canvas {
    private puzzleController: PuzzleController;
    private container: HTMLDivElement;
    private stage: Konva.Stage;

    private backgroundLayer: Konva.Layer;
    private hudLayer: Konva.Layer;
    private gameLayer: Konva.Layer;

    
    private pieces: Konva.Image[][];
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
        this.stage.add(this.hudLayer);
        this.stage.add(this.gameLayer);
        

        this.pieces = new Array<Konva.Image[]>();
        slotGroups.forEach((slotGroup: SlotGroup) => {
            const PIECE: Konva.Image = this.createPiece(slotGroup.piece);
            const RECT = PIECE.getClientRect();
            const GROUP: Konva.Image[] = [];
            GROUP.push(this.createPiece(slotGroup.piece));
            slotGroup.noise?.forEach((piece: HTMLImageElement) => {
                GROUP.push(this.createPiece(piece, RECT));
            });
            this.pieces.push(GROUP);
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
            // fill: "black",
            // hitFunc(con, shape) {
            //     const RECT = shape.getSelfRect()
            //     con.beginPath();
            //     con.rect(0, 0, RECT.width, RECT.height);
            //     con.closePath();
            //     con.fillStrokeShape(shape);
            // },
            customZIndex: Number.MAX_SAFE_INTEGER - (dim ? (dim.width + dim.height) : (img.width + img.height))
        });
        piece.on("dragstart", this.puzzleController.dragStartPiece.bind(this.puzzleController));
        piece.on("dragend", this.puzzleController.dragStopPiece.bind(this.puzzleController));
        return piece;
    }
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
        const MARGIN_BOTTOM: number = 20;
        const HEIGHT: number = this.stage.height() - this.canvas.PuzzlePieceContainer.Height - MARGIN_BOTTOM;
        const BOUNDARY: Konva.Rect = new Konva.Rect({
            width: WIDTH,
            height: HEIGHT,
        });
        
        const GROUP: Konva.Group = new Konva.Group({
            width: WIDTH,
            height: HEIGHT,
            clip: {
                x: 0,
                y: 0,
                width: WIDTH,
                height: HEIGHT
            }
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
    private readonly border: Konva.Group;
    private readonly viewport: Konva.Group;
    private readonly container: Konva.Group;
    private readonly arrows: Arrow[];
    

    private readonly slotMapping: Map<Konva.Image, Konva.Group>;

    private dragLastX: number = 0;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.stage = canvas.Stage,
        this.layer = canvas.HudLayer;
        this.border = this.createBorder();
        this.viewport = this.createViewport();
        this.container = this.createContainer();
        this.container.moveToTop();
        this.arrows = this.createArrows();
        this.slotMapping = new Map<Konva.Image, Konva.Group>();

        this.createPieces();
    }

    public get Container() { return this.container; }
    public get Height() { return this.border.getClientRect().height }

    public placePieceIntoContainer(piece: Konva.Image): void {
        const CONTAINER = this.slotMapping.get(piece)!;
        
        CONTAINER?.add(piece);

        const PIECE_SCALE = Math.min(CONTAINER.width() / piece.width(), CONTAINER.height() / piece.height());
        piece.scale({x: PIECE_SCALE, y: PIECE_SCALE});
        const RECT_PIECE = piece.getClientRect();
        piece.x((CONTAINER.width() - RECT_PIECE.width) / 2);
        piece.y((CONTAINER.height() - RECT_PIECE.height) / 2);
    }

    private createBorder(): Konva.Group {
        const MARGIN = 40; 
        const WIDTH = this.stage.width() - MARGIN * 2;
        const HEIGHT = 80;

        const BORDER = new Konva.Rect({
            width: WIDTH,
            height: HEIGHT,
        });
        const BORDER_RECT = BORDER.getClientRect();

        const GROUP: Konva.Group = new Konva.Group({
            x: (this.stage.width() - BORDER_RECT.width) / 2,
            y: (this.stage.height() - BORDER_RECT.height),
            width: WIDTH,
            height: HEIGHT
        });
        GROUP.add(BORDER);

        this.layer.add(GROUP);
        return GROUP;
    }

    private createViewport(): Konva.Group {
        const BORDER = this.border;
        const GROUP: Konva.Group = new Konva.Group({
            clip: {
                x: 0,
                y: 0,
                width: this.border.width(),
                height: this.border.height(),
            },
        });

        GROUP.add(new Konva.Rect({
            width: this.border.width(),
            height: this.border.height(),
            draggable: true,
            dragBoundFunc(pos: Vector2d) {
                return { x: BORDER.x(), y: BORDER.y() }
            },
        }));
        this.border.add(GROUP);

        GROUP.on("dragstart", (e) => this.dragLastX = this.stage.pointerPos ? this.stage.pointerPos.x : 0);
        GROUP.on("dragmove", (e) => {
            const CLIENT_X =  this.stage.pointerPos ? this.stage.pointerPos.x : 0;
            const DX = CLIENT_X - this.dragLastX;

            this.scrollContainer(DX)
            this.dragLastX = CLIENT_X;
        });
        return GROUP;
    }

    private createContainer(): Konva.Group {
        const BORDER_RECT = this.border.getClientRect();
        const CONTAINER = new Konva.Group({
            height: BORDER_RECT.height,
        });
        this.viewport.add(CONTAINER);
        return CONTAINER;
    }

    private createPuzzlePieceContainerSlot(): Konva.Group {
        const MARGIN: number = 10;
        const slot = new Konva.Group({
            x: MARGIN / 2,
            y: MARGIN / 2,
            height: this.container.height() - MARGIN,
            width: this.container.height() - MARGIN,
        });
        // slot.add(new Konva.Rect({height: slot.height(), width: slot.width(), stroke: "green"}))
        return slot;
    }

    private createPieces(): void {
        const GAP: Konva.Rect = new Konva.Rect({width: 10, height: this.border.getClientRect().height, listening: false});
        let currentX: number = 0;
        let clone: Konva.Rect;

        this.canvas.Pieces.forEach((group: Konva.Image[], i: number) => {
            const GROUP_MIXED: Konva.Image[] = group.toSorted(() => Math.random() - 0.5);
            GROUP_MIXED.forEach((piece: Konva.Image, i: number) => {
                const PIECE_CONTAINER = this.createPuzzlePieceContainerSlot();
                this.slotMapping.set(piece, PIECE_CONTAINER);
                this.container.add(PIECE_CONTAINER);

                this.placePieceIntoContainer(piece);
                
                clone = GAP.clone();
                clone.x(currentX)
                this.container.add(clone);
                currentX += clone.width();

                PIECE_CONTAINER.x(currentX);
                currentX += + PIECE_CONTAINER.width();
            })
        });
        clone = GAP.clone();
        clone.x(currentX)
        this.container.add(clone);
    }

    private createArrows(): Arrow[] {
        const DIMENSION: Vector2d = {x: 10, y: 20}; 
        const POSITION_1: Vector2d = {x: this.border.x() - 20 - (DIMENSION.x / 2), y: this.border.y() + (this.border.height() / 2) - (DIMENSION.y / 2)};
        const POSITION_2: Vector2d = {x: this.border.x() + this.border.width() + 20 - (DIMENSION.x / 2), y: this.border.y() + (this.border.height() / 2) - (DIMENSION.y / 2)};
        const STEP: number = 100;
        return [
            new Arrow(this.canvas, POSITION_1, DIMENSION,"left", () => {
                this.scrollContainer(STEP)
            }),
            new Arrow(this.canvas, POSITION_2, DIMENSION, "right", () => {
                this.scrollContainer(-STEP);
            })
        ];
    }

    private scrollContainer(dx: number): void {
        const CONTAINER_RECT = this.container.getClientRect();
        const LEFT_BOUND = 0;
        const RIGHT_BOUND = this.border.width();
        this.container.x(Math.max(Math.min(LEFT_BOUND, this.container.x() + dx) + CONTAINER_RECT.width, RIGHT_BOUND) - CONTAINER_RECT.width)
    }
}

class Arrow {
    private readonly canvas: Canvas;
    private readonly stage: Konva.Stage;
    private readonly layer: Konva.Layer;
    private readonly hitbox: Konva.Group;
    private readonly arrow: Konva.Line;

    constructor(canvas: Canvas, position: Vector2d, dimension: Vector2d, direction: string, onClick: () => void) {
        this.canvas = canvas;
        this.stage = canvas.Stage;
        this.layer = canvas.HudLayer;
        this.hitbox = this.createHitbox(position, dimension, onClick);
        this.arrow = this.createArrow(direction);
    }

    private createHitbox(position: Vector2d, dimension: Vector2d, onClick: () => void): Konva.Group {
        const GROUP: Konva.Group = new Konva.Group({
            x: position.x,
            y: position.y,
            width: dimension.x,
            height: dimension.y
        });
        const RECT: Konva.Rect = new Konva.Rect({
            x: -dimension.x,
            y: -dimension.y,
            width: dimension.x * 3,
            height: dimension.y * 3,
        });
        GROUP.add(RECT);
        GROUP.on("pointerdown", onClick);
        
        this.layer.add(GROUP);
        return GROUP;
    }

    private createArrow(direction: string): Konva.Line {
        const COLOR = getComputedStyle(document.documentElement).getPropertyValue("--color-secondary").trim();
        const ARROW: Konva.Line = new Konva.Line({
            points: [0, 0, this.hitbox.width(), this.hitbox.height() / 2, 0, this.hitbox.height()],
            stroke: COLOR,
            strokeWidth: 3,
            lineCap: 'round',
            lineJoin: 'round',
        });

        if (direction === "left") {
            ARROW.rotate(180)
            ARROW.x(this.hitbox.width())
            ARROW.y(this.hitbox.height())
        }

        this.hitbox.add(ARROW);
        return ARROW;
    }
}