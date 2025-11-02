import type { PageLoad } from "./$types"
import Config from "$config"
import A from "$stores"
import { get } from "svelte/store"

type Chapter = { title: string, content: SectionNode[] | ParagraphNode[] }
type SectionNode = { type: "section" }
type ParagraphNode = { type: "paragraph", text: string }

type _Puzzle = {
    identifier: string,
    name: string,
    score: {
        current: number,
        max: number
    },
    state: "DONE" | "OPEN" | "LOCKED"
}

export const load: PageLoad = async ({ params }): Promise<{ identifier: string, title: string, completion: number, chapters: any[], puzzles: _Puzzle[] }> => {
    const station = Config.stations.filter((e): boolean => e.identifier === params.station)[0]

    return {
        identifier: params.station,
        title: station.stitle,
        completion: 50,
        chapters: station.chapters,
        puzzles: station.puzzles
            .map((element: any): _Puzzle => {
                const a = get(A).puzzles
                    .filter((e) => e.identifier === element.identifier)
                    .map((e) => { return { score: e.score, state: e.state } })[0]

                return {
                    identifier: element.identifier,
                    name: element.name,
                    score: {
                        current: 0, // a.score,
                        max: element.score
                    },
                    // @ts-ignore
                    state: "OPEN" //a.state
                }
            })
    }
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
