export type CutoutData = {
    src: number,
    x: number,
    y: number,
    width: number,
    height: number
}

export type Position = {
    x: number,
    y: number
}

export default class Piece {
    public readonly src: string
    public readonly position: Position
    public readonly width: number
    public readonly height: number

    public puzzleSlot: HTMLDivElement | null
    public puzzlePiece: HTMLImageElement | null
    private currentPosition: Position
    private placed: boolean

    constructor(path: string, cutoutData: CutoutData) {
        this.src = `${path}/${cutoutData.src}`;
        this.position = {x: cutoutData.x, y: cutoutData.y}
        this.width = cutoutData.width;
        this.height = cutoutData.height;
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
