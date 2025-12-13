import type { PageLoad } from "./$types"
import Stations from "$config/stations"
import type { Station } from "$config/stations"
import Puzzles from "$config/puzzles"
import type { Puzzle } from "$config/puzzles"
import type { _Puzzle } from "."

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

function getPuzzles(station: Station): _Puzzle[] {
    return Puzzles
        .filter((element: Puzzle): boolean => station.puzzles.includes(element.id))
        .map((element: Puzzle): _Puzzle => {
            // TODO fetch current score (puzzle)
            const current: number = 0

            return {
                id: element.id,
                title: element.title,
                score: toScore(current, element.score),
                locked: false
            }
        })
}

type _Station = {
    title: string,
    puzzles: _Puzzle[]
}

function getStations(): _Station[] {
    return Stations
        .map((element: Station): _Station => {
            return { title: element.stitle, puzzles: getPuzzles(element) }
        })
}

export const load: PageLoad = async (): Promise<{ stations: _Station[] }> => {
    return {
        stations: getStations()
    }
}
