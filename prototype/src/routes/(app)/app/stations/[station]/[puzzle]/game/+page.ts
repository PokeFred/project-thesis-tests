import type { PageLoad } from "./$types"
import Config from "$config"

export const load: PageLoad = async ({ params }): Promise<{ puzzle: { identifier: string, type: string, title: string, score: number }, station: { identifier: string, title: string }, introduction: any, game: any }> => {
    const puzzle = Config.stations
        .filter((element): boolean => element.identifier === params.station)
        .map((e) => e.puzzles)
        .flat(1)
        .filter((element): boolean => element.identifier === params.puzzle)[0]

    const station = Config.stations
        .filter((element): boolean => element.identifier === params.station)[0]

    console.log(station)
    console.log({
            identifier: puzzle.identifier,
            type: puzzle.type,
            title: puzzle.name,
            score: puzzle.score
        })
    return {
        puzzle: {
            identifier: puzzle.identifier,
            type: puzzle.type,
            title: puzzle.name,
            score: puzzle.score
        },
        station: {
            identifier: station.identifier,
            title: station.stitle
        },
        introduction: puzzle.data.introduction,
        game: puzzle.data.game
    }
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
