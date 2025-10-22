import { type QuizState, POINTS } from "$lib/State.svelte"
import { Quiz } from "../../Quiz"

export type PuzzleData = {
    viewBox: string
    cutouts: CutoutData[]
    noise?: string[]
}

export type CutoutData = {
    src: string,
    d: string
}

export type Position = {
    x: number,
    y: number
}

export type Background = {
    readonly src: string,
    readonly viewbox: string
}

export class Piece {
    public readonly src: string
    public puzzlePiece?: HTMLImageElement
    private currentPosition: Position

    constructor(path: string, src: string) {
        this.src = `${path}/${src}`;
        this.puzzlePiece = $state(undefined);
        this.currentPosition = $state({x: 0, y: 0});
    }

    public getCurrentPosition(): Position {
        return this.currentPosition
    }

    public setCurrentPosition(x: number, y: number): void {
        this.currentPosition = { x: x, y: y }
    }
}

export class PuzzlePiece extends Piece {
    public readonly d: string
    public puzzleSlot?: SVGPathElement
    private placed: boolean

    constructor(path: string, cutoutData: CutoutData) {
        super(path, cutoutData.src);
        this.d = cutoutData.d;
        this.puzzleSlot = undefined;
        this.placed = $state(false);
    }

    public isPlaced(): boolean {
        return this.placed
    }

    public setPlaced(placed: boolean): void {
        this.placed = placed
    }
}

export default class Puzzle extends Quiz {
    public readonly background: Background;
    public readonly pieces: PuzzlePiece[];
    public readonly noise?: Piece[];
    public readonly piecesMixed: Piece[];

    constructor(quizState: QuizState, background: Background, pieces: PuzzlePiece[], noise?: Piece[]) {
        super(quizState);
        this.background = background;
        this.pieces = pieces;
        this.noise = noise;
        this.piecesMixed = (noise ? noise.concat(pieces) : pieces).sort(() => Math.random() - 0.5);
    }

    public winCondition(): boolean {
        return this.pieces.every((e) => e.isPlaced() === true);
    }

    public complete(): void {
        let sum: number = 0;
        this.pieces.forEach((p: PuzzlePiece)=> {
            sum += p.isPlaced() ? POINTS.ANSWER_CORRECT : POINTS.NOT_ANSWERED;
        });
        super.complete(sum);
    }
}