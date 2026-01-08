import type Konva from "konva";
import Canvas from "./Canvas.svelte";
import Puzzle from "./Puzzle.svelte";
import type { Piece, Slot } from "./Puzzle.svelte";
import type { KonvaEventObject } from "konva/lib/Node";

const SNAP_RANGE = 20;

export type PuzzleData = {
    readonly viewBox: string;
    readonly cutouts: CutoutData[];
}

export type CutoutData = {
    readonly src: string;
    readonly d: string;
    readonly noise?: string[];
}

export type Background = {
    readonly src: string,
    readonly viewbox: string
}

export type SlotGroup = {
    readonly path: string,
    readonly piece: HTMLImageElement,
    readonly noise?: HTMLImageElement[]
}   

export default class PuzzleController {
    private readonly canvas: Canvas;
    private readonly puzzle: Puzzle;

    private slotMap: Map<Slot, Konva.Path>;
    private pieceMap: Map<Konva.Image, Piece>;

    constructor(container: HTMLDivElement, background: HTMLImageElement, slotGroups: SlotGroup[]) {
        this.canvas = new Canvas(this, container, background, slotGroups);
        this.puzzle = new Puzzle(slotGroups);
        this.slotMap = new Map<Slot, Konva.Path>();
        this.pieceMap = new Map<Konva.Image, Piece>();

        this.puzzle.Slots.forEach((slot: Slot, i: number) => {
            this.slotMap.set(slot, this.canvas.Slots[i]);
        });

        this.canvas.Pieces.forEach((piece: Konva.Image, i: number) => {
            this.pieceMap.set(piece, this.puzzle.Pieces[i]);
        });
    }

    public get Puzzle() { return this.puzzle; }

    // public exitFullscreen(): void {
    //     this.canvas.Fullscreen.disable();
    // }

    public dragStartPiece(event: KonvaEventObject<DragEvent>): void {
        const KONVA_PIECE: Konva.Image | undefined = (event.target as Konva.Image);
        this.pickupPiece(KONVA_PIECE);
    }

    public dragStopPiece(event: KonvaEventObject<DragEvent>): void {
        const KONVA_PIECE: Konva.Image | undefined = (event.target as Konva.Image);
        const PIECE: Piece = this.pieceMap.get(KONVA_PIECE)!; 
        this.dropPiece(KONVA_PIECE);
    }

    private pickupPiece(piece: Konva.Image): void {
        const PIECE: Piece | undefined = this.pieceMap.get(piece);
        const SLOT: Slot | undefined = PIECE?.Slot;

        const KONVA_SLOT = this.slotMap.get(SLOT!)!;

        const RECT_PIECE = piece.getSelfRect();
        const RECT_SLOT = KONVA_SLOT?.getSelfRect();

        const SCALE_X_PIECE: number = RECT_SLOT.width / RECT_PIECE.width;
        const SCALE_Y_PIECE: number = RECT_SLOT.height / RECT_PIECE.height;

        this.switchContainer(piece, this.canvas.GameLayer);
        piece.scale({ x: SCALE_X_PIECE * this.canvas.Puzzle.Field.scaleX(), y: SCALE_Y_PIECE * this.canvas.Puzzle.Field.scaleY()});  
        if(!PIECE?.Placed) {
            piece.offset({x: RECT_PIECE.width / 2, y: RECT_PIECE.height / 2});
        }
        PIECE?.removeFromSlot();
        
        KONVA_SLOT?.show();
    }

    private dropPiece(piece: Konva.Image): void {
        const KONVA_SLOT = this.getConvaSlot(piece)!;
        const PIECE_BOX_CLIENT = piece.getClientRect()
        const SLOT_BOX_CLIENT = KONVA_SLOT.getClientRect()
        const PIECE_CENTER = {x: (PIECE_BOX_CLIENT.x + PIECE_BOX_CLIENT.width) / 2, y: (PIECE_BOX_CLIENT.y + PIECE_BOX_CLIENT.height) / 2}
        const SLOT_CENTER = {x: (SLOT_BOX_CLIENT.x + SLOT_BOX_CLIENT.width) / 2, y: (SLOT_BOX_CLIENT.y + SLOT_BOX_CLIENT.height) / 2}

        const PIECE: Piece | undefined = this.pieceMap.get(piece);
        const SLOT: Slot | undefined = PIECE?.Slot;

        piece.offset({x: 0, y: 0});
        if(!SLOT?.Selected && (Math.abs(PIECE_CENTER.x - SLOT_CENTER.x) < SNAP_RANGE &&  Math.abs(PIECE_CENTER.y - SLOT_CENTER.y) < SNAP_RANGE)) {            
            this.placePieceInSlot(piece);
            this.switchContainer(piece, this.canvas.Puzzle.Field);   

            const RECT_PIECE_SELF = piece.getSelfRect();
            const RECT_SLOT_SELF = KONVA_SLOT?.getSelfRect();

            const SCALE_X_PIECE: number = RECT_SLOT_SELF.width / RECT_PIECE_SELF.width;
            const SCALE_Y_PIECE: number = RECT_SLOT_SELF.height / RECT_PIECE_SELF.height;
            piece.scale({ x: SCALE_X_PIECE, y: SCALE_Y_PIECE });  
        }
        else {
            this.canvas.PuzzlePieceContainer.placePieceIntoContainer(piece);
        }
    }

    private placePieceInSlot(piece: Konva.Image): void {
        const SLOT = this.getConvaSlot(piece)!;
        const SLOT_BOX = SLOT.getClientRect()

        const PIECE: Piece | undefined = this.pieceMap.get(piece);

        PIECE?.placeInSlot();

        piece.setAbsolutePosition({x: SLOT_BOX.x, y: SLOT_BOX.y});
        SLOT?.hide();
    }

    private switchContainer(piece: Konva.Image, container: Konva.Layer | Konva.Group): void {        
        const POS = piece.getAbsolutePosition(piece.getStage()!)
        piece.moveTo(container);
        piece.setAbsolutePosition(POS);
    }

    private getConvaSlot(piece: Konva.Image): Konva.Path | undefined {
        return this.slotMap.get((this.pieceMap.get((piece as Konva.Image))?.Slot as Slot));
    }
}