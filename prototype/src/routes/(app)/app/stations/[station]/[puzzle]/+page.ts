import type { PageLoad } from "./$types"
import Game from "$stores/game"
import type { GameState, PuzzleState } from "$stores/game"
import Config from "$config"
import { get } from "svelte/store"

export const load: PageLoad = async ({ params }): Promise<{ identifier: string, station: string, title: string, score: number }> => {
    return {
        identifier: params.puzzle,
        station: params.station,
        title: Config.stations
            .filter((element: any): boolean => element.identifier === params.station)
            .map((element: any): any => element.puzzles)
            .flat(1)
            .filter((element: any): boolean => element.identifier === params.puzzle)
            .map((element: any): string => element.name)
            [0],
        score: Config.stations
            .filter((element: any): boolean => element.identifier === params.station)
            .map((element: any): any => element.puzzles)
            .flat(1)
            .filter((element: any): boolean => element.identifier === params.puzzle)
            .map((element: any): number => element.score)
            [0]
    }
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
