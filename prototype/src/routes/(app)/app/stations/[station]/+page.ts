import type { PageLoad } from "./$types"
import Config from "$config"
import { getGame } from "$stores"
import { get } from "svelte/store"
import type { GameState, PuzzleState } from "$stores"
import type { AccordionData, AccordionQuestion } from "$components/accordions/Accordion"
import type AccordionSeperator from "$components/accordions/AccordionSeperator.svelte"

type Station = {
    identifier: string,
    tag: string,
    stitle: string,
    title: string,
    score: number,
    chapters: Chapter[],
    puzzles: Puzzle[]
}

// literature
// StationLiterature
type Chapter = { title: string, content: ChapterItem[] }
type ChapterItem = ChapterTitleItem | ChapterParagraphItem | ChapterImageItem
type ChapterTitleItem = { type: "title", content: string }
type ChapterParagraphItem = { type: "paragraph", content: string }
type ChapterImageItem = { type: "image", src: string, alt: string, caption: string }

type Puzzle = any

type _Puzzle = {
    identifier: string,
    name: string,
    completion: number,
    unlocked: boolean
}

export const load: PageLoad = async ({ params }): Promise<{ identifier: string, stitle: string, title: string, completion: number, chapters: AccordionData, puzzles: _Puzzle[] }> => {
    // @ts-ignore
    const station: Station = Config.stations.filter((e): boolean => e.identifier === params.station)[0]

    const current: number = station.puzzles
        .map((element: any): any => getGame().puzzles.filter((e: PuzzleState): boolean => element.identifier === e.identifier))
        .map((element: any) => element[0]?.score ?? 0)
        .reduce((pre: number, cur: number): number => pre += cur, 0)
    const max: number = station.puzzles
        .map((element: any): number => element.score)
        .reduce((pre: number, cur: number): number => pre += cur, 0)
    const completion: number = current * 100 / max

    const chapters = station.chapters
        .map((element: any): AccordionQuestion => { return { type: "question", question: element.title, answer: element.content } })
        .map((element: AccordionQuestion): AccordionData => [{ type: "seperator" }, element])
        .flat(1)
    chapters.push({ type: "seperator" })

    return {
        identifier: params.station,
        stitle: station.stitle.toUpperCase(),
        title: station.title,
        completion: Number((completion).toFixed(1)), // completion,
        chapters: chapters,
        puzzles: station.puzzles
            .map((element: any): _Puzzle => {
                const a: number = getGame().puzzles
                    .filter((e) => e.identifier === element.identifier)
                    .map((e) => { return e.score })
                    [0] ?? 0

                const requirementsDone: any[] = element.requirements
                    .map((e) => {
                        return getGame().puzzles
                            .filter((ee) => ee.identifier === e)
                            .map((ee) => ee.state)
                            [0]
                    })
                    .filter((e) => e !== "DONE")

                const isUnlocked: boolean = !(requirementsDone.length > 0)
                return {
                    identifier: element.identifier,
                    name: element.name,
                    completion: Number((a * 100 / element.score).toFixed(1)),
                    unlocked: isUnlocked
                }
            })
    }
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
