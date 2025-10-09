type GameConfig = {
    score: {
        max: number
    },
    stations: {
        identifier: string,
        name: string,
        score: number,
        puzzles: {
            identifier: string,
            type: string,
            name: string,
            score: number
        }[]
    }[]
}

type GameState = {
    isRunning: boolean,
    score: number,
    stations: {
        identifier: string,
        state: string,
        score: number
    }[],
    puzzles: {
        identifier: string,
        state: string,
        score: number
    }[]
}

export const config: GameConfig = {
    score: {
        max: 0
    },
    stations: [
        {
            identifier: "station_01",
            name: "Station 01",
            score: 0,
            puzzles: [
                {
                    identifier: "station_01_puzzle_00",
                    type: "gps",
                    name: "Rätsel 00",
                    score: 1
                }
            ]
        },
        {
            identifier: "station_02",
            name: "Station 02",
            score: 0,
            puzzles: [
                {
                    identifier: "station_02_puzzle_00",
                    type: "gps",
                    name: "Rätsel 00",
                    score: 1
                }
            ]
        },
        {
            identifier: "station_03",
            name: "Station 03",
            score: 0,
            puzzles: [
                {
                    identifier: "station_03_puzzle_00",
                    type: "gps",
                    name: "Rätsel 00",
                    score: 1
                }
            ]
        }
    ]
}

export const game: GameState = {
    isRunning: false,
    score: -1,
    stations: [
        {
            identifier: "station_01",
            state: "OPEN",
            score: 0
        },
        {
            identifier: "station_02",
            state: "OPEN",
            score: 0
        },
        {
            identifier: "station_03",
            state: "OPEN",
            score: 0
        }
    ],
    puzzles: []
}

export function getPuzzleState(identifier: string): string {
    return game.stations
        .filter((element: any): boolean => element.identifier === identifier)
        .map((element: any): string => element.state)
        [0]
}

export function getPuzzleScore(identifier: string): number {
    return game.stations
        .filter((element: any): boolean => element.identifier === identifier)
        .map((element: any): number => element.score)
        [0]
}
