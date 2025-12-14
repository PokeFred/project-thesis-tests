import type { PageLoad } from "./$types"
import Stations from "$config/stations"
import type { Station } from "$config/stations"
import Puzzles from "$config/puzzles"
import type { Puzzle } from "$config/puzzles"
import type { AccordionData, AccordionQuestion } from "$components/accordions/Accordion"
import { getGame, getPuzzleScore } from "$stores"

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

function getStationScore(station: Station): Score {
    const current: number = station.puzzles
        .map((element: number): number => getPuzzleScore(element))
        .reduce((pre: number, cur: number): number => pre += cur, 0)
    const max: number = station.puzzles
        .map((element: number): number => Puzzles.filter((e): boolean => e.id === element)[0].score)
        .reduce((pre: number, cur: number): number => pre += cur, 0)

    return toScore(current, max)
}

type _Chapters = {}

function getStationChapters(station: Station): _Chapters[] {
    const chapters = station.chapters
        .map((element: any): AccordionQuestion => { return { type: "question", question: element.title, answer: element.content } })
        .map((element: AccordionQuestion): AccordionData => [{ type: "seperator" }, element])
        .flat(1)
    chapters.push({ type: "seperator" })

    return chapters
}

type _Puzzle = {
    id: number,
    title: string,
    score: Score,
    locked: boolean
}

function getStationPuzzles(station: Station): _Puzzle[] {
    return Puzzles
        .filter((element: Puzzle): boolean => station.puzzles.includes(element.id))
        .map((element: Puzzle): _Puzzle => {
            const current: number = getPuzzleScore(element.id)

            return {
                id: element.id,
                title: element.title,
                score: toScore(current, element.score),
                locked: false
            }
        })
}

export const load: PageLoad = async ({ params }): Promise<{ stitle: string, title: string, score: Score, chapters: _Chapters[], puzzles:  _Puzzle[] }> => {
    const station: Station = Stations.filter((element: Station): boolean => element.id === Number(params.id))[0]

    return {
        stitle: station.stitle,
        title: station.title,
        score: getStationScore(station),
        chapters: getStationChapters(station),
        puzzles: getStationPuzzles(station)
    }
}
