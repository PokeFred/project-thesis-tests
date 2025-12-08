import type { PageLoad } from "./$types"
import Stations from "$config/stations"
import type { Station } from "$config/stations"
import type { Station as _Station } from "."

type Score = {
    current: number,
    max: number,
    completion: number
}

function toScore(current: number, max: number): Score {
    const completion: number = Number((current * 100 / max).toFixed(1))

    return {
        current: current,
        max: max,
        completion: Number.isNaN(completion) ? 0 : completion
    }
}

function getGameScore(): Score {
    // TODO fetch current score (game)
    const current: number = 0
    const max: number = Stations
        .map((element: Station): number => element.score)
        .reduce((pre: number, cur: number): number => pre += cur, 0)

    return toScore(current, max)
}

function getStations(): _Station[] {
    return Stations.map((element: Station): _Station => {
        // TODO fetch current score (station)
        const score: number = 0

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
