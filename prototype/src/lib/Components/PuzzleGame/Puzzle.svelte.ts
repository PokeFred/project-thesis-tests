import { type QuizState, POINTS } from "$lib/State.svelte"
import { Quiz } from "../Quiz"

export type PuzzleData = {
    viewBox: string
    cutouts: CutoutData[]
}

export type CutoutData = {
    src: string,
    d: string
}

export type Position = {
    x: number,
    y: number
}

export class Piece {
    public readonly src: string
    public readonly d: string

    public puzzleSlot: SVGPathElement | null
    public puzzlePiece: HTMLImageElement | null
    private currentPosition: Position
    private placed: boolean

    constructor(path: string, cutoutData: CutoutData) {
        this.src = `${path}/${cutoutData.src}`;
        this.d = cutoutData.d;
        this.puzzleSlot = null;
        this.puzzlePiece = null;
        this.currentPosition = $state({x: 0, y: 0});
        this.placed = $state(false)
    }

    public getCurrentPosition(): Position {
        return this.currentPosition
    }

    public setCurrentPosition(x: number, y: number): void {
        this.currentPosition = { x: x, y: y }
    }

    public isPlaced(): boolean {
        return this.placed
    }

    public setPlaced(placed: boolean): void {
        this.placed = placed
    }
}

export default class Puzzle extends Quiz {
    public readonly pieces: Piece[];

    constructor(quizState: QuizState, pieces: Piece[]) {
        super(quizState);
        this.pieces = pieces;
    }

    public winCondition(): boolean {
        return this.pieces.every((e) => e.isPlaced() === true);
    }

    public complete(): void {
        let sum: number = 0;
        this.pieces.forEach((p: Piece)=> {
            sum += p.isPlaced() ? POINTS.ANSWER_CORRECT : POINTS.NOT_ANSWERED;
        });
        super.complete(sum);
    }
}