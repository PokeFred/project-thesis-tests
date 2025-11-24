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
    state: string,
    data: any
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
    console.log(value)
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

const newState: GameState = {
    isRunning: false,
    score: 0,
    puzzles: []
}

function getGame(): GameState {
    return newState
}

// function startGame(): void {}

// function resetGame(): void {}

function isRunning(): boolean {
    return newState.isRunning
}

function getScore(): number {
    return newState.score
}

//function getCompletion(): number {}

export default state
export { startGame, resetGame }
export type { GameState, PuzzleState }
