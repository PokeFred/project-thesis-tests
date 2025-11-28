export type Introduction = {
    text: string[]
}

export type GameInput = {
    answers: { text: string, isCorrect: boolean, description: {}[] }[]
}

export type GameOutput = {
    answers: { text: string, isCorrect: boolean, description: {}[] }[]
}

export type Result = {
    answers: { text: string, isCorrect: boolean, description: {}[] }[]
}
