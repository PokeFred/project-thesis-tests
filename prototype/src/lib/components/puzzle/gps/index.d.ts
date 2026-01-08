export type Introduction = {
    text: string
    informations: {
        adress: string
        //transit: string[]
        transit: {
            bus: {
                station: string,
                lines: string[]
            },
            subway: {
                station: string,
                lines: string[]
            }
        },
        coordinates: string
    }
}

export type GameInput = {}

export type GameOutput = {}

export type Result = {}
