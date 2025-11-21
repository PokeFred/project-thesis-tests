export type Introduction = {
    text: string
}

export type Game = {
    informations: string[],
    data: {
        left: string[],
        right: string[],
        pairs: { left: string, right: string }[]
    }
}

export type Result = {}
