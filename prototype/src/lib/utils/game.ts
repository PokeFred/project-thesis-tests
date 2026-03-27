import { getScore } from "$stores"
import Station from "$utils/station"
import Puzzle from "$utils/puzzle"

export default class Game {
    public static getScore(): number {
        return getScore()
    }

    public static isFinished(): boolean {
        const stations: Station[] = Station.getAll()
        const puzzles: Puzzle[] = []
        for (const station of stations) {
            puzzles.push(...station.getPuzzles())
        }

        for (const puzzle of puzzles) {
            if (!puzzle.isDone()) {
                return false
            }
        }

        return true
    }
}
