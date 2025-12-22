export type IntroductionData = {
    text: string[]
}

export type GameData = {
    answers: { id: number, text: string, isCorrect: boolean }[]
}

export type ResultData = {
    answers: { id: number, text: string, description: [], isCorrect: boolean }[]
}

export type SavingData = {
    answers: { id: number, selected: boolean }[]
}
