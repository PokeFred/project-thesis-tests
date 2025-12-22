export type IntroductionData = {
    text: string[]
}

export type GameData = {
    answers: { id: number, text: string, isCorrect: boolean }[]
}

export type ResultData = {
    // answers: { id: number, text: string, isCorrect: boolean }[]
}

export type SavingData = {
    // answers: { id: number, answer: Answer }[]
    answers: { selected: boolean, answer: Answer }[]
}
