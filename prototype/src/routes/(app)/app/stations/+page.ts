import type { PageLoad } from "./$types"
import Game from "$stores/game"
import type { GameState, PuzzleState } from "$stores/game"
import Config from "$config"
import type { _Station } from "./Station"
import { get } from "svelte/store"

function getPuzzle(identifier: string): PuzzleState | null {
    const game: GameState = get(Game)
    const puzzles = game.puzzles.filter((element: PuzzleState): boolean => element.identifier === identifier)

    return (puzzles.length > 0) ? puzzles[0] : null
}

function getPuzzleScores(puzzles: any[]): number {
    return puzzles
        .map((element: any): PuzzleState | null => getPuzzle(element.identifier))
        .map((element: PuzzleState | null): number => (element !== null) ? element.score : 0 )
        .reduce((pre: number, cur: number): number => pre += cur)
}

function getPuzzleStates(puzzles: any[]): string[] {
    return puzzles
        .map((element: any): PuzzleState | null => getPuzzle(element.identifier))
        .map((element: PuzzleState | null): string => (element !== null) ? element.state : "OPEN" )
}

export const load: PageLoad = async (): Promise<{ completion: number, stations: _Station[] }> => {
    return {
        completion: 10,
        stations: Config.stations
            .map((element: any): _Station => {
                const score: number = getPuzzleScores(element.puzzles)
                const states: string[] = getPuzzleStates(element.puzzles)
                    .filter((element: string): boolean => element !== "DONE")

                return {
                    identifier: element.identifier,
                    name: element.stitle,
                    score: {
                        current: score,
                        max: element.score
                    },
                    state: (states.length > 0) ? "OPEN" : "DONE"
                }
            })
    }
}
