import type { PageLoad } from "./$types"
import Config from "$config"
import Game from "$stores/game"
import { get } from "svelte/store"
import type { GameState, PuzzleState } from "$stores/game"

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

export const load: PageLoad = async ({ params }): Promise<{ identifier: string, title: string, score: { current: number, max: number }, chapters: any[], puzzles: _Puzzle[] }> => {
    const station = Config.stations.filter((e): boolean => e.identifier === params.station)[0]

    return {
        identifier: params.station,
        title: station.stitle,
        score: {
            current: station.puzzles
                .map((element: any): any => get(Game).puzzles.filter((e: PuzzleState): boolean => element.identifier === e.identifier))
                .map((element: any) => element[0]?.score ?? 0)
                .reduce((pre: number, cur: number): number => pre += cur, 0),
            max: station.puzzles
                .map((element: any): number => element.score)
                .reduce((pre: number, cur: number): number => pre += cur, 0)
        },
        chapters: station.chapters,
        puzzles: station.puzzles
            .map((element: any): _Puzzle => {
                const a = get(Game).puzzles
                    .filter((e) => e.identifier === element.identifier)
                    .map((e) => { return { score: e.score, state: e.state } })
                    [0]

                return {
                    identifier: element.identifier,
                    name: element.name,
                    score: {
                        current: a?.score ?? 0,
                        max: element.score
                    },
                    // @ts-ignore
                    state: a?.state ?? "OPEN"
                }
            })
    }
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
