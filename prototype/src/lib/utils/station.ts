import Stations from "$config/stations"
import type { Station as _Station } from "$config/stations"
import Puzzles from "$config/puzzles"
import type { Puzzle as _Puzzle } from "$config/puzzles"
import { getPuzzleScore } from "$stores"
import { toScore } from "$utils/score"
import type { Score } from "$utils/score"
import Puzzle from "./puzzle"

type StationChapter = any

export default class Station {
    private id: number;
    private tag: string;
    private stitle: string;
    private title: string;
    // TODO ???
    private score: number;
    private chapters: StationChapter[];
    private puzzles: number[];

    private constructor(id: number, tag: string, stitle: string, title: string, score: number, chapters: StationChapter[], puzzles: number[]) {
        this.id = id
        this.tag = tag
        this.stitle = stitle
        this.title = title
        this.score = score
        this.chapters = chapters
        this.puzzles = puzzles
    }

    public getId(): number {
        return this.id
    }

    public getTag(): string {
        return this.tag
    }

    public getSTitle(): string {
        return this.stitle
    }

    public getTitle(): string {
        return this.title
    }

    public getChapters(): StationChapter {
        return this.chapters
    }

    public getPuzzles(): Puzzle[] {
        return Puzzles
            .filter((element: _Puzzle): boolean => this.puzzles.includes(element.id))
            // TODO noch zeitgemäß ???
            .filter((element: _Puzzle): boolean => element.type !== "placeholder-puzzle")
            .map((element: _Puzzle): Puzzle => Puzzle.get(element.id))
    }

    public getScore(): Score {
        const current: number = this.puzzles
            .map((element: number): number => getPuzzleScore(element))
            .reduce((pre: number, cur: number): number => pre += cur, 0)
        const max: number = this.puzzles
            .map((element: number): number => Puzzles.filter((e): boolean => e.id === element)[0].score)
            .reduce((pre: number, cur: number): number => pre += cur, 0)

        return toScore(current, max)
    }

    public static get(id: number): Station {
        const station: _Station = Stations
            .filter((element: _Station): boolean => element.id === id)[0]

        return new Station(station.id, station.tag, station.stitle, station.title, station.score, station.chapters, station.puzzles)
    }

    public static getAll(): Station[] {
        return Stations.map((element: _Station): Station => {
            return new Station(element.id, element.tag, element.stitle, element.title, element.score, element.chapters, element.puzzles)
        })
    }

    public static getByPuzzle(puzzle: number) {
        const id: number = Stations
            .filter((element: _Station): boolean => element.puzzles.includes(puzzle))
            .map((element: _Station): number => element.id)
            [0]

        return this.get(id)
    }
}
