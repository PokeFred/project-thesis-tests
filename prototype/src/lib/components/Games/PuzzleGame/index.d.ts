import type { Background, CutoutData, PuzzleData, SlotGroup } from "./PuzzleController.svelte"
import type { Piece } from "./Puzzle.svelte"

export type Introduction = {
    text: string[]
}

export type GameInput = {
    path: string,
}

export type GameOutput = {
    placed: string
}

export type Result = {
    path: string,
    alt: string,
    placed: Piece[]
}
