export type Introduction = {
    text: string[]
}

export type GameInput = {
    options: Answer[]
}

export type GameOutput = {
    answers: {
            selected: boolean,
            answer: Answer
    }[]
}

export type Result = {
    answers: {
            selected: boolean,
            answer: Answer
    }[]
}
