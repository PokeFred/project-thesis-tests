import type { PageLoad } from "./$types"
import Station_ from "$utils/station"
import Puzzle_ from "$utils/puzzle"
import type { Score } from "$utils/score"

type _Station = {
    title: string,
    puzzles: _Puzzle[]
}

type _Puzzle = {
    id: number,
    type: string,
    title: string,
    score: Score,
    done: boolean,
    locked: boolean
}

export const load: PageLoad = async (): Promise<{ stations: _Station[] }> => {
    return {
        stations: Station_.getAll()
            .map((element: Station_): _Station => {
                return {
                    title: `${element.getTag()}: ${element.getSTitle()}`,
                    puzzles: element.getPuzzles()
                        .map((element: Puzzle_): _Puzzle => {
                            return {
                                id: element.getId(),
                                type: element.getType(),
                                title: element.getTitle(),
                                score: element.getScore(),
                                done: element.isDone(),
                                locked: element.isLocked()
                            }
                        })
                }
            })
    }
}
