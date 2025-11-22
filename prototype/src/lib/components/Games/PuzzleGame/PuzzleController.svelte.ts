import type Konva from "konva";
import Canvas from "./Canvas.svelte";
import Puzzle from "./Puzzle.svelte";
import type { Piece, Slot } from "./Puzzle.svelte";
import type { KonvaEventObject } from "konva/lib/Node";
// TODO: cutout python script anpassen an neue json struktur
// TODO: rätsel 00 anpassen

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

    private slotMap: Map<Konva.Path, Slot>;
    private pieceMap: Map<Konva.Image, Piece>;

    constructor(container: HTMLDivElement, background: HTMLImageElement, slotGroups: SlotGroup[]) {
        this.canvas = new Canvas(this, container, background, slotGroups);
        this.puzzle = new Puzzle(slotGroups);
        this.slotMap = new Map<Konva.Path, Slot>();
        this.pieceMap = new Map<Konva.Image, Piece>();

        this.canvas.Slots.forEach((slot: Konva.Path, i: number) => {
            this.slotMap.set(slot, this.puzzle.Slots[i]);
        });

        this.canvas.Pieces.forEach((piece: Konva.Image, i: number) => {
            this.pieceMap.set(piece, this.puzzle.Pieces[i]);
        });
    }

    public get Puzzle() { return this.puzzle; }

    public dragStartPiece(event: KonvaEventObject<DragEvent>): void {
        console.log(event.currentTarget)
        console.log(this.pieceMap.get((event.target as Konva.Image)))
    }

    public dragStopPiece(event: KonvaEventObject<DragEvent>): void {

    }
}