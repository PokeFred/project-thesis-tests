import type { PageLoad } from "./$types"
import Config from "$config"

export const load: PageLoad = async ({ params }): Promise<{ identifier: string, station: string, type: string, title: string, score: number, data: any }> => {
    const puzzle = Config.stations
        .filter((element): boolean => element.identifier === params.station)
        .map((e) => e.puzzles)
        .flat(1)
        .filter((element): boolean => element.identifier === params.puzzle)[0]

    return {
        identifier: puzzle.identifier,
        station: params.station,
        type: puzzle.type,
        title: puzzle.name,
        score: puzzle.score,
        data: puzzle
    }
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
