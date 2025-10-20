import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

type State = {
    isRunning: boolean,
    score: number,
    puzzles: {}[]
}

const state: Writable<State> = writable<State>({
    isRunning: false,
    score: 0,
    puzzles: []
})

state.subscribe((value: State): void => {})

function startGame() {}

function resetGame() {}

export default state
export { startGame, resetGame }
