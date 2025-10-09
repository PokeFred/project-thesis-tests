import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

type GameState = {
    isRunning: boolean,
    score: number
}

// TODO load from localstorage
const state: Writable<GameState> = writable<GameState>({
    isRunning: false,
    score: 0
})

state.subscribe((value: GameState) => {
    // TODO write in localstorage
})

function startGame() {}

function resetGame() {}

export default state
export { startGame, resetGame }
export type { GameState }
