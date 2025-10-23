import { type QuizState, POINTS } from "$lib/State.svelte"
import { Quiz } from "../../Quiz"

export type PuzzleData = {
    readonly viewBox: string
    readonly cutouts: CutoutData[]
    readonly noise?: string[]
}

export type CutoutData = {
    readonly src: string,
    readonly d: string
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
    private readonly src: string
    private puzzlePiece?: HTMLImageElement
    private currentPosition: Position

    constructor(path: string, src: string) {
        this.src = `${path}/${src}`;
        this.puzzlePiece = $state(undefined);
        this.currentPosition = $state({x: 0, y: 0});
    }

    public get Src() { return this.src; }
    public get PuzzlePiece() { return this.puzzlePiece; }
    public get CurrentPosition() { return this.currentPosition; }
    
    public set PuzzlePiece(piece: HTMLImageElement | undefined) { this.puzzlePiece = piece; }
    public set CurrentPosition(position: Position) { this.currentPosition = position }
}

export class PuzzlePiece extends Piece {
    private readonly d: string
    private puzzleSlot?: SVGPathElement
    private placed: boolean

    constructor(path: string, cutoutData: CutoutData) {
        super(path, cutoutData.src);
        this.d = cutoutData.d;
        this.puzzleSlot = undefined;
        this.placed = $state(false);
    }

    public get D() { return this.d; }
    public get PuzzleSlot() { return this.puzzleSlot; }
    public get Placed() { return this.placed; }

    public set PuzzleSlot(slot: SVGPathElement | undefined) { this.puzzleSlot = slot; }
    public set Placed(placed: boolean) { this.placed = placed; }
}

export default class Puzzle extends Quiz {
    private readonly background: Background;
    private readonly pieces: PuzzlePiece[];
    private readonly noise?: Piece[];
    private readonly piecesMixed: Piece[];

    constructor(quizState: QuizState, background: Background, pieces: PuzzlePiece[], noise?: Piece[]) {
        super(quizState);
        this.background = background;
        this.pieces = pieces;
        this.noise = noise;
        this.piecesMixed = (noise ? noise.concat(pieces) : pieces).sort(() => Math.random() - 0.5);
    }

    public get Background() { return this.background; }
    public get Pieces() { return this.pieces; }
    public get Noise() { return this.noise; }
    public get PiecesMixed() { return this.piecesMixed; }

    public reset(): void {
        throw new Error("Method not implemented.")
    }

    public winCondition(): boolean {
        return this.pieces.every((e) => e.Placed === true);
    }

    public complete(): void {
        let sum: number = 0;
        this.pieces.forEach((p: PuzzlePiece)=> {
            sum += p.Placed ? POINTS.ANSWER_CORRECT : POINTS.NOT_ANSWERED;
        });
        super.complete(sum);
    }
}