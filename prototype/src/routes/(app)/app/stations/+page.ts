import type { PageLoad } from "./$types"
import Game from "$stores/game"
import type { GameState, PuzzleState } from "$stores/game"
import Config from "$config"
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
        .reduce((pre: number, cur: number): number => pre += cur, 0)
}

function getPuzzleStates(puzzles: any[]): string[] {
    return puzzles
        .map((element: any): PuzzleState | null => getPuzzle(element.identifier))
        .map((element: PuzzleState | null): string => (element !== null) ? element.state : "OPEN" )
}

function _getPuzzleScore(): number {
    return 0
}

function _getPuzzlesScore() {}

function _getStationScore() {}

function _getStationsScore() {}

type _Station = {
    identifier: string,
    name: string,
    completion: number
}

function getGameCompletion(): number {
    return 0
}

function getStationCompletionData(): _Station[] {
    return []
}

export const load: PageLoad = async (): Promise<{ completion: number, stations: _Station[] }> => {
    const current: number = get(Game).puzzles
        .map((element: any): number => element.score)
        .reduce((pre: number, cur: number): number => pre += cur, 0)
    const max: number = Config.stations
        .map((element: any): number => element.score)
        .reduce((pre: number, cur: number): number => pre += cur, 0)
    return {
        completion: 0, // current * 100 / max,
        stations: Config.stations
            .map((element: any): _Station => {
                return {
                    identifier: element.identifier,
                    name: element.stitle,
                    completion: getPuzzleScores(element.puzzles) * 100 / element.score
                }
            })
    }
}
