import { type QuizState, POINTS } from "$lib/State.svelte"
import { Quiz } from "../Quiz"
// TODO: cutout python script anpassen an neue json struktur
// TODO: rätsel 00 anpassen
// TODO-DONE: nicht mehrere gleichzeitig auf ein spot snappen lassen dürfen
// TODO-DONE: wenn man dragged, es über alle bilder packen (z-index)
// TODO: erst wenn über container/bild gehovered wird mit icon, dann szene wechseln
// TODO-DONE: puzzle items haben bestimmte slots in den containern. kommen immer an die selbe stelle zurück

// TODO-DONE: container runterskalieren + bilder runterskalieren
// TODO-DONE: icons beim rausdraggen vom container auf normale größe skalieren lassen
// TODO-DONE: container über dem bild plazieren
// TODO-DONE: button, um container anzuzeigen/zu verstecken
export type PuzzleData = {
    readonly viewBox: string;
    readonly cutouts: CutoutData[];
}

export type CutoutData = {
    readonly src: string;
    readonly d: string;
    readonly noise?: string[];
}

export type Position = {
    x: number;
    y: number;
}

export type Background = {
    readonly src: string,
    readonly viewbox: string
}

export class ImageWindow {
    private window?: HTMLDivElement; // TODO: window weg, image behalten
    private image?: HTMLImageElement;
    private naturalWidth: number;
    private naturalHeight: number;
    private clientWidth: number;
    private clientHeight: number;
    private scaleWidth: number;
    private scaleHeight: number; 

    constructor() {
        this.window = $state(undefined);
        this.image = $state(undefined);
        this.naturalWidth = $derived(0);
        this.naturalHeight = $derived(0);
        this.clientWidth = $derived(0);
        this.clientHeight = $derived(0);

        this.scaleWidth = $derived(this.clientWidth / this.naturalWidth);
        this.scaleHeight = $derived(this.clientHeight / this.naturalHeight);
    }

    public get Window() { return this.window; }
    public get Image() { return this.image; }
    public get NaturalWidth() { return this.naturalWidth; }
    public get NaturalHeight() { return this.naturalHeight; }
    public get ClientWidth() { return this.clientWidth; }
    public get ClientHeight() { return this.clientHeight; }
    public get ScaleWidth() { return this.scaleWidth; }
    public get ScaleHeight() { return this.scaleHeight; }

    public set Window(window: HTMLDivElement | undefined) { this.window = window; }
    public set Image(image: HTMLImageElement | undefined) { this.image = image; }     
    public set NaturalWidth(naturalWidth: number) { this.naturalWidth = naturalWidth }
    public set NaturalHeight(naturalHeight: number) { this.naturalHeight = naturalHeight }
    public set ClientWidth(clientWidth: number) { this.clientWidth = clientWidth; }
    public set ClientHeight(clientHeight: number) { this.clientHeight = clientHeight; }
}

// TODO: div, welches immer die größe des visualViewports hat
// Für: Puzzle Piece Container, evtl. exit button für fullscreen und oder beenden button
// export class HUD {
//     private hudDiv: HTMLDivElement;
// }

export class Slot {
    private readonly d: string;
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
    private dragging: boolean

    private readonly slot: Slot;

    constructor(src: string, slot: Slot, correct: boolean) {
        this.src = src;
        this.correct = correct;
        this.puzzlePiece = $state(undefined);
        this.currentPosition = $state({x: 0, y: 0});
        this.dragging = $state(false);

        this.slot = slot;
    }

    public get Src() { return this.src; }
    public get Correct() { return this.correct; }
    public get PuzzlePiece() { return this.puzzlePiece; }
    public get CurrentPosition() { return this.currentPosition; }
    public get Slot() { return this.slot; }
    public get Dragging() { return this.dragging; }

    public get Placed() { return this.slot.Selected === this }
    
    public set PuzzlePiece(piece: HTMLImageElement | undefined) { this.puzzlePiece = piece; }
    public set CurrentPosition(position: Position) { this.currentPosition = position }
    public set Dragging(dragging: boolean) { this.dragging = dragging; }

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
    private readonly background: Background; //TODO: zusammenführen
    private imageWindow: ImageWindow; //TODO: zusammenführen
    private slots: Slot[];
    private pieces: Piece[];
    private noise?: Piece[];
    private piecesMixed: Piece[];

    constructor(quizState: QuizState, background: Background, slots: Slot[], pieces: Piece[], noise?: Piece[]) {
        super(quizState);
        this.background = background;
        this.imageWindow = new ImageWindow();
        this.slots = slots;
        this.pieces = pieces;
        this.noise = noise;
        this.piecesMixed = (noise ? noise.concat(pieces) : pieces).sort(() => Math.random() - 0.5);
    }

    public get Background() { return this.background; }
    public get ImageWindow() { return this.imageWindow; }
    public get Pieces() { return this.pieces; }
    public get Noise() { return this.noise; }
    public get PiecesMixed() { return this.piecesMixed; }

    public set ImageWindow(imageWindow: ImageWindow) { this.imageWindow = imageWindow; }
    
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