export type IntroductionData = {
    text: string[]
}

export type GameData = {
    questions: { solution: string, left: any, operator: string, right: any }[]
}

export type ResultData = {}

export type SavingData = {
    inputs: string[]
}
