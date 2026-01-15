export type IntroductionData = {
    text: string[]
}

export type GameData = {
    answers: { id: number, text: string, isCorrect: boolean }[]
}

export type ResultData = {
    answers: { id: number, text: string, isCorrect: boolean }[],
    text: string[]
}

export type SavingData = {
    selected?: number
}
