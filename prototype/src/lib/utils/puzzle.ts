import { dev } from "$app/environment"
import { getPuzzleScore } from "$stores"
import { getPuzzle as getPuzzleSaving } from "$stores"
import { toScore } from "$utils/score"
import type { Score } from "$utils/score"
import Puzzles from "$config/puzzles"
import type { Puzzle as _Puzzle } from "$config/puzzles"

export default class Puzzle {
    private id: number
    private type: string
    private title: string
    private requirements: number[]
    private score: number
    private data: any

    private constructor(id: number, type: string, title: string, requirements: number[], score: number, data: any) {
        this.id = id
        this.type = type
        this.title = title
        this.requirements = requirements
        this.score = score
        this.data = data
    }

    public getId(): number {
        return this.id
    }

    public getType(): string {
        return this.type
    }

    public getTitle(): string {
        return this.title
    }

    public getScore(): Score {
        const current: number = getPuzzleScore(this.id)

        return toScore(current, this.score)
    }

    public getIntroduction(): any {
        return this.data.introduction
    }

    public getGame(): any {
        return this.data.game
    }

    public getResult(): any {
        return this.data.result
    }

    public getSaving(): any {
        return getPuzzleSaving(this.id).data
    }

    public getContent(): any {
        // TODO
        return {}
    }

    public isDone(): boolean {
        return getPuzzleScore(this.id) > 0
    }

    public isLocked(): boolean {
        if (dev) return false

        return this.requirements
            .map((element: number): Puzzle => Puzzle.get(element))
            .map((element: Puzzle): number => element.getScore().current)
            .map((element: number): boolean => element > 0)
            .filter((element: boolean): boolean => !element)
            .length > 0
    }

    public static get(id: number): Puzzle {
        const puzzle: _Puzzle = Puzzles
            .filter((element: _Puzzle): boolean => element.id === id)[0]

        return new Puzzle(puzzle.id, puzzle.type, puzzle.title, puzzle.requirements, puzzle.score, puzzle.data)
    }
}
