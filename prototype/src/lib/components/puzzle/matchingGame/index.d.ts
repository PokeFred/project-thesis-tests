export type Introduction = {
    text: string[]
}

export type GameInput = {
    header: {
        left: string,
        right: string
    },
    data: {
        left: string[],
        right: string[],
        pairs: { left: string, right: string }[]
    }
}

export type GameOutput = {}

export type Result = {}

export type Saving = {}
