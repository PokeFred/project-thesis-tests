export type GameInput = {
    options: Answer[]
}

export type GameOutput = {
    answers: { id: number, selected: boolean }[]
}

export type Result = {
    answers: { selected: boolean, answer: Answer }[]
}
