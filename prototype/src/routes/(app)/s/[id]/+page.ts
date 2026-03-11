import type { PageLoad } from "./$types"
import type { AccordionData, AccordionQuestion } from "$components/accordions/Accordion"
import type { Score } from "$utils/score"
import Station_ from "$utils/station"
import Puzzle_ from "$utils/puzzle"

// TODO chapter typing ?
type _Chapters = {}

function getStationChapters(station: Station_): _Chapters[] {
    const chapters = station.getChapters()
        .map((element: any): AccordionQuestion => { return { type: "question", question: element.title, answer: element.data } })
        .map((element: AccordionQuestion): AccordionData => [{ type: "seperator" }, element])
        .flat(1)
    chapters.push({ type: "seperator" })

    return chapters
}

type _Puzzle = {
    id: number,
    type: string,
    title: string,
    score: Score,
    done: boolean,
    locked: boolean
}

export const load: PageLoad = async ({ params }): Promise<{ stitle: string, title: string, score: Score, chapters: _Chapters[], puzzles:  _Puzzle[] }> => {
    const id: number = Number(params.id)
    const station: Station_ = Station_.getStation(id)

    return {
        stitle: station.getSTitle(),
        title: station.getTitle(),
        score: station.getScore(),
        chapters: getStationChapters(station),
        puzzles: station.getPuzzles()
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
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
