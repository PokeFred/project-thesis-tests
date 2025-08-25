type Position = {
    x: number,
    y: number
}

export default class Piece {
    private cutoutData: any
    public blackBox: HTMLDivElement | null
    public puzzlePiece: HTMLImageElement | null
    private currentPosition: Position
    private placed: boolean

    constructor(cutoutData: any, blackBox: HTMLDivElement | null, puzzlePiece: HTMLImageElement | null, currentPosition: Position) {
        this.cutoutData = cutoutData;
        this.blackBox = blackBox;
        this.puzzlePiece = puzzlePiece;
        this.currentPosition = currentPosition;
        this.placed = false;
    }

    public getCutoutData(): any {
        return this.cutoutData
    }

    public getBlackBox(): HTMLDivElement | null {
        return this.blackBox
    }

    public getPuzzlePiece(): HTMLImageElement | null {
        return this.puzzlePiece
    }

    public getCurrentPosition(): Position {
        return this.currentPosition
    }

    public setCurrentPosition(x: number, y: number): void {
        this.currentPosition = { x: x, y: y }
    }

    public getPlaced(): boolean {
        return this.placed
    }

    public setPlaced(placed: boolean): void {
        this.placed = placed
    }
}
