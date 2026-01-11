export type Introduction = {
    text: string[]
}

export type GameInput = {
    leftHeader: string,
    rightHeader: string,
    options: string[],
    pairs: Pair[]
}

export type GameOutput = {
    answers: string[]
}

export type Result = {
    leftHeader: string,
    rightHeader: string,
    pairs: Pair[],
    informations: {
        title: string,
        data: any[]
    }
}
