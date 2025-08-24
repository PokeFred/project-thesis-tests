export class Piece {
    cutoutData: any;
    blackBox: HTMLDivElement | null;
    puzzlePiece: HTMLImageElement | null;
    currentPosition: { x: number; y: number };
    isPlaced: boolean;

    constructor(
        cutoutData: any,
        blackBox: HTMLDivElement | null,
        puzzlePiece: HTMLImageElement | null,
        currentPosition: { x: number; y: number },
    ) {
        this.cutoutData = cutoutData;
        this.blackBox = blackBox;
        this.puzzlePiece = puzzlePiece;
        this.currentPosition = currentPosition;
        this.isPlaced = false;
    }
}