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

const DEFAULT: GameState = {
    isRunning: false,
    score: 0,
    puzzles: []
}

function load(): GameState {
    const a = localStorage.getItem("game")

    if (a === null) return DEFAULT
    return JSON.parse(a) as GameState
}

const state: Writable<GameState> = writable<GameState>(load())

state.subscribe((value: GameState): void => {
    localStorage.setItem("game", JSON.stringify(value))
})

function startGame() {
    state.update((value: GameState): GameState => ({
        isRunning: true,
        score: 0,
        puzzles: []
    }))
}

function resetGame() {
    state.update((value: GameState): GameState => ({
        isRunning: false,
        score: 0,
        puzzles: []
    }))
}

export default state
export { startGame, resetGame }
export type { GameState, PuzzleState }
