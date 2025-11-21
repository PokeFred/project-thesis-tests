import type Canvas from "./Canvas.svelte";
import type Puzzle from "./Puzzle.svelte";

export default class PuzzleController {
    private readonly canvas: Canvas;
    private readonly puzzle: Puzzle;

    constructor(canvas: Canvas, puzzle: Puzzle) {
        this.canvas = canvas;
        this.puzzle = puzzle;
    }

    public init(background: HTMLImageElement, paths: string[], pieces: HTMLImageElement[]): void {
        this.canvas.drawAll(background, paths, pieces);
        // this.puzzle.init
    }
}