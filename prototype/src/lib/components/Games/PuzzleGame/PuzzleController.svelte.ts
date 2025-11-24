import type Konva from "konva";
import Canvas from "./Canvas.svelte";
import Puzzle from "./Puzzle.svelte";
import type { Piece, Slot } from "./Puzzle.svelte";
import type { ImageConfig, KonvaEventObject } from "konva/lib/Node";
import type { Shape } from "konva/lib/Shape";
// TODO: cutout python script anpassen an neue json struktur
// TODO: rätsel 00 anpassen

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

    public exitFullscreen(): void {
        this.canvas.Container.hidden = true;
    }

    public dragStartPiece(event: KonvaEventObject<DragEvent>): void {
        const KONVA_PIECE: Konva.Image | undefined = (event.target as Konva.Image);
        this.switchContainer(KONVA_PIECE, this.canvas.GameLayer);
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

        const KONVA_SLOT = this.slotMap.get(SLOT!);

        PIECE?.removeFromSlot();

        piece.scale(KONVA_SLOT?.scale());
        KONVA_SLOT?.show();
    }

    private dropPiece(piece: Konva.Image): void {
        const KONVA_SLOT = this.getConvaSlot(piece)!;
        const PIECE_BOX = piece.getClientRect()
        const SLOT_BOX = KONVA_SLOT.getClientRect()
        const PIECE_CENTER = {x: (PIECE_BOX.x + PIECE_BOX.width) / 2, y: (PIECE_BOX.y + PIECE_BOX.height) / 2}
        const SLOT_CENTER = {x: (SLOT_BOX.x + SLOT_BOX.width) / 2, y: (SLOT_BOX.y + SLOT_BOX.height) / 2}

        const PIECE: Piece | undefined = this.pieceMap.get(piece);
        const SLOT: Slot | undefined = PIECE?.Slot;

        if(!SLOT?.Selected && (Math.abs(PIECE_CENTER.x - SLOT_CENTER.x) < SNAP_RANGE &&  Math.abs(PIECE_CENTER.y - SLOT_CENTER.y) < SNAP_RANGE)) {
            this.placePieceInSlot(piece);
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
        piece.scale(SLOT.scale());
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