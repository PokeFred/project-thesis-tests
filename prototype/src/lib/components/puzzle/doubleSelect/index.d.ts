export type Introduction = {
    text: string
}

export type GameInput = {
    informations: string[],
    data: {
        left: string[],
        right: string[],
        pairs: { left: string, right: string }[]
    }
}

export type GameOutput = {}

export type Result = {}
