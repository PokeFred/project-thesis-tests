import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

type State = {}

// TODO load from localstorage
const state: Writable<State> = writable<State>({})

state.subscribe((value: State) => {
    // TODO write in localstorage
})

function startGame() {}

function resetGame() {}

export default state
export { startGame, resetGame }
