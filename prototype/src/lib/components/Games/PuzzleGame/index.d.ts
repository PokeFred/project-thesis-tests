import type { Background, SlotGroup } from "./PuzzleController.svelte"

export type Introduction = {
    text: string[]
}

export type GameInput = {
    background: Background
    pieces: SlotGroup[]
}

export type GameOutput = {
    placed: Piece[]
}

export type Result = {
    placed: Piece[]
}
