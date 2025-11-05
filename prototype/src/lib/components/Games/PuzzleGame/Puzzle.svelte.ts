import { type QuizState, POINTS } from "$lib/State.svelte"
import { Quiz } from "../../Quiz"
// TODO: cutout python script anpassen an neue json struktur
// TODO-DONE: nicht mehrere gleichzeitig auf ein spot snappen lassen dürfen
// TODO: wenn man dragged, es über alle bilder packen (z-index)
// TODO: wenn in dem bild drin, dann immer über dem bild, aber 1 unter allen anderen icons die rumschwirren oder gedragged werden
// TODO: erst wenn über container/bild gehovered wird mit icon, dann szene wechseln

// TODO: container runterskalieren + bilder runterskalieren
// TODO: icons beim rausdraggen vom container auf normale größe skalieren lassen
// TODO: container über dem bild plazieren
// TODO: button, um container anzuzeigen/zu verstecken
export type PuzzleData = {
    readonly viewBox: string;
    readonly cutouts: CutoutData[];
    readonly noise?: string[];
}

export type CutoutData = {
    readonly src: string;
    readonly d: string;
    readonly noise: string[];
}

export type Position = {
    x: number;
    y: number;
}

export type Background = {
    readonly src: string,
    readonly viewbox: string
}

export class Slot {
    private readonly d: string
    private slot?: SVGPathElement;
    private selected?: Piece;

    constructor(d: string) {
        this.d = d;
        this.slot = undefined;
        this.selected = $state(undefined);
    }

    public get D() { return this.d; }
    public get Slot() { return this.slot; }
    public get Selected() { return this.selected; }

    public set Slot(slot: SVGPathElement | undefined) { this.slot = slot; }
    public set Selected(piece: Piece | undefined) { this.selected = piece; }
}

export class Piece {
    private readonly src: string
    private readonly correct: boolean
    private puzzlePiece?: HTMLImageElement
    private currentPosition: Position

    private readonly slot: Slot;

    constructor(src: string, slot: Slot, correct: boolean) {
        this.src = src;
        this.correct = correct;
        this.puzzlePiece = $state(undefined);
        this.currentPosition = $state({x: 0, y: 0});

        this.slot = slot;
    }

    public get Src() { return this.src; }
    public get Correct() { return this.correct; }
    public get PuzzlePiece() { return this.puzzlePiece; }
    public get CurrentPosition() { return this.currentPosition; }
    public get Slot() { return this.slot; }

    public get Placed() { return this.slot.Selected === this }
    
    public set PuzzlePiece(piece: HTMLImageElement | undefined) { this.puzzlePiece = piece; }
    public set CurrentPosition(position: Position) { this.currentPosition = position }

    public placeInSlot(): void {
        if(!this.slot.Selected) {
            this.slot.Selected = this;
        }
    }

    public removeFromSlot(): void {
        if(this.slot.Selected === this) {
            this.slot.Selected = undefined;
        }
    }
}

export default class Puzzle extends Quiz {
    private readonly background: Background;
    private slots: Slot[];
    private pieces: Piece[];
    private noise?: Piece[];
    private piecesMixed: Piece[];

    constructor(quizState: QuizState, background: Background, slots: Slot[], pieces: Piece[], noise?: Piece[]) {
        super(quizState);
        this.background = background;
        this.slots = slots;
        this.pieces = pieces;
        this.noise = noise;
        this.piecesMixed = (noise ? noise.concat(pieces) : pieces).sort(() => Math.random() - 0.5);
    }

    public get Background() { return this.background; }
    public get Pieces() { return this.pieces; }
    public get Noise() { return this.noise; }
    public get PiecesMixed() { return this.piecesMixed; }
    
    public get AnswersCorrect() { 
        if(this.slots.length <= 0) {
            return 0;
        }
        return this.slots.reduce((sum, slot: Slot) => {
            if(slot.Selected && slot.Selected.Correct) {
                return ++sum;
            }
            return sum;
        }, 0)
    }

    public reset(): void {
        this.slots.forEach((slot: Slot) => {
            slot.Selected = undefined;
            slot.Slot = undefined;
        });

        this.pieces = this.pieces.map((piece: Piece) => new Piece(piece.Src, piece.Slot, piece.Correct));
        if(this.noise) {
            this.noise.map((piece: Piece) => new Piece(piece.Src, piece.Slot, piece.Correct));
        }

        this.piecesMixed = (this.noise ? this.noise.concat(this.pieces) : this.pieces).sort(() => Math.random() - 0.5);
    }

    public complete(): void {
        let sum: number = 0;
        this.slots.forEach((slot: Slot)=>{
            if(slot.Selected) {
                sum += slot.Selected.Correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE;
            }
        });
        super.complete(sum);
    }
}