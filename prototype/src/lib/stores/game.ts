import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

type GameState = {
    isRunning: boolean,
    score: {
        current: number,
        max: number
    },
    stations: Station[]
}

type State = "LOCKED" | "OPEN" | "FINISHED"
type Station = { state: State, tag: string, text: string, points: { current: number, max: number } }

// TODO load from localstorage
const state: Writable<GameState> = writable<GameState>({
    isRunning: true,
    score: {
        current: 1,
        max: 3
    },
    stations: [
        { state: "FINISHED", tag: "station_01", text: "Station 01", points: { current: 1, max: 1 } },
        { state: "OPEN", tag: "station_02", text: "Station 02", points: { current: 0, max: 1 } },
        { state: "LOCKED", tag: "station_03", text: "Station 03", points: { current: 0, max: 1 } }
    ]
})

state.subscribe((value: GameState) => {
    // TODO write in localstorage
})

function startGame() {}

function resetGame() {}

export default state
export { startGame, resetGame }
export type { GameState }
