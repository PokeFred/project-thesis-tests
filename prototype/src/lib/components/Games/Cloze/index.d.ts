import type { Content } from "../Content";
import type { Background, CutoutData, PuzzleData, SlotGroup } from "./PuzzleController.svelte"

export type Introduction = {
    text: string[]
}

export type GameInput = {
    options: Answer[][];
    content: Content[];
}

export type GameOutput = {
    // placed: Piece[]
}

export type Result = {
    // placed: Piece[];
}
