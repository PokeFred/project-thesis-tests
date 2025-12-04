import type { Background, CutoutData, PuzzleData, SlotGroup } from "./PuzzleController.svelte"

export type Introduction = {
    text: string[]
}

export type GameInput = {
    path: string,
}

export type GameOutput = {
    placed: Piece[]
}

export type Result = {
    placed: Piece[]
}
