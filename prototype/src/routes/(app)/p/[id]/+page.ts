import type { PageLoad } from "./$types"
import Stations from "$config/stations"
import type { Station } from "$config/stations"
import Puzzles from "$config/puzzles"
import type { Puzzle } from "$config/puzzles"
import { toScore } from "$utils/score"
import type { Score } from "$utils/score"

type _Station = {
    id: number,
    title: string
}

type _Puzzle = {
    id: number,
    type: string,
    title: string,
    score: Score
}

export const load: PageLoad = async ({ params }): Promise<{ station: _Station, puzzle: _Puzzle, introduction: any, game: any }> => {
    const station: Station = Stations
        .filter((element): boolean => element.puzzles.includes(Number(params.id)))[0]
    const puzzle: Puzzle = Puzzles
        .filter((element): boolean => element.id === Number(params.id))[0]

    return {
        station: {
            id: station.id,
            title: station.stitle
        },
        puzzle: {
            id: puzzle.id,
            type: puzzle.type,
            title: puzzle.title,
            score: toScore(0, puzzle.score)
        },
        introduction: puzzle.data.introduction,
        game: puzzle.data.game
    }
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
