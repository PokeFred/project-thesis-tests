import type { PageLoad } from "./$types"
import Config from "$config"
import { getGame } from "$stores"
import type { GameState, PuzzleState } from "$stores"

export const load: PageLoad = async ({ params }): Promise<{ identifier: string, station: string, title: string, type: string, introduction: any, result: any }> => {
    const puzzle = Config.stations
        .filter((element): boolean => element.identifier === params.station)
        .map((e) => e.puzzles)
        .flat(1)
        .filter((element): boolean => element.identifier === params.puzzle)[0]

    return {
        identifier: puzzle.identifier,
        station: params.station,
        title: puzzle.name,
        type: puzzle.type,
        introduction: puzzle.data.introduction,
        result: getGame().puzzles
            .filter((element: PuzzleState): boolean => element.identifier === puzzle.identifier)
            .map((e) => e.data)[0]
    }
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
