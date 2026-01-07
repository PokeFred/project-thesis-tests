import type { PageLoad } from "./$types"
import Stations from "$config/stations"
import type { Station } from "$config/stations"
import Puzzles from "$config/puzzles"
import type { Puzzle } from "$config/puzzles"
import type { _Puzzle } from "."
import { getPuzzleScore } from "$stores"

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
            const current: number = getPuzzleScore(element.id)
            const isLocked: boolean = element.requirements
                .map((element: number): number => {
                    const puzzle: Puzzle = Puzzles.filter((e: Puzzle): boolean => e.id === element)[0]
                    console.log(element)
                    console.log(puzzle)

                    return element
                })
                .map((element: number): number => getPuzzleScore(element))
                .map((element: number): boolean => element > 0)
                .filter((element: boolean): boolean => !element)
                .length > 0

            return {
                id: element.id,
                type: element.type,
                title: element.title,
                score: toScore(current, element.score),
                locked: isLocked
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
            return { title: `${element.tag}: ${element.stitle}`, puzzles: getPuzzles(element) }
        })
}

export const load: PageLoad = async (): Promise<{ stations: _Station[] }> => {
    return {
        stations: getStations()
    }
}
