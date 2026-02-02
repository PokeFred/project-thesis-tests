import type { PageLoad } from "./$types"
import Stations from "$config/stations"
import type { Station } from "$config/stations"
import { getGame, getPuzzleScore } from "$stores"
import { toScore } from "$utils/score"
import type { Score } from "$utils/score"

type _Station = {
    id: number,
    title: string,
    score: Score
}

function getGameScore(): Score {
    const current: number = getGame().puzzles
        .map((e: any): number => e.score)
        .reduce((pre: number, cur: number): number => pre += cur, 0)
    const max: number = Stations
        .map((element: Station): number => element.score)
        .reduce((pre: number, cur: number): number => pre += cur, 0)

    return toScore(current, max)
}

function getStations(): _Station[] {
    return Stations.map((element: Station): _Station => {
        const score: number = element.puzzles
            .map((e: number): number => getPuzzleScore(e))
            .reduce((pre: number, cur: number): number => pre += cur, 0)

        return {
            id: element.id,
            title: element.stitle,
            score: toScore(score, element.score)
        }
    })
}

export const load: PageLoad = async (): Promise<{ score: Score, stations: _Station[] }> => {
    return {
        score: getGameScore(),
        stations: getStations()
    }
}
