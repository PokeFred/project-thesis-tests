import type { PageLoad } from "./$types"
import Station from "$utils/station"
import Puzzle from "$utils/puzzle"
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
    const station: Station = Station.getByPuzzle(Number(params.id))
    const puzzle: Puzzle = Puzzle.get(Number(params.id))

    return {
        station: {
            id: station.getId(),
            title: station.getSTitle()
        },
        puzzle: {
            id: puzzle.getId(),
            type: puzzle.getType(),
            title: puzzle.getTitle(),
            score: puzzle.getScore()
        },
        introduction: puzzle.getIntroduction(),
        game: puzzle.getGame()
    }
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
