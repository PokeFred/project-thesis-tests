export type IntroductionData = {
    text: string[]
}

export type GameData = {
    answers: { text: string, isCorrect: boolean, description: {}[] }[]
}

export type ResultData = {}

export type SavingData = {
    answers: { selected: boolean, answer: Answer }[]
}
