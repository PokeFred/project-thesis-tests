import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

type GameState = {
    isRunning: boolean,
    score: number,
    puzzles: PuzzleState[]
}

type PuzzleState = {
    identifier: string,
    score: number,
    state: string
}

const state: Writable<GameState> = writable<GameState>({
    isRunning: false,
    score: 0,
    puzzles: []
})

state.subscribe((value: GameState): void => {})

function startGame() {}

function resetGame() {}

export default state
export { startGame, resetGame }
export type { GameState, PuzzleState }
