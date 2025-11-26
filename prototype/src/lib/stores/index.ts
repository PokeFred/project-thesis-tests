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

/*
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
*/

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

let newState: GameState = load()

export function getGame(): GameState {
    return newState
}

export function startGame(): void {
    newState = { isRunning: true, score: 0, puzzles: [] }
    localStorage.setItem("game", JSON.stringify(newState))
}

export function resetGame(): void {
    newState = { isRunning: false, score: 0, puzzles: [] }
    localStorage.setItem("game", JSON.stringify(newState))
}

export function isRunning(): boolean {
    return newState.isRunning
}

export function getScore(): number {
    return newState.score
}

//function getCompletion(): number {}

export function add(puzzle: PuzzleState): void {
    newState.puzzles.push(puzzle)
    localStorage.setItem("game", JSON.stringify(newState))
}

export type { GameState, PuzzleState }
