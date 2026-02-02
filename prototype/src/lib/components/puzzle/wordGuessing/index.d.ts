export type IntroductionData = {
    text: string[]
}

export type GameData = {
    questions: { solution: string, hints: any[] }[]
}

export type ResultData = {
    questions: { solution: string, hints?: any[], solutionText?: string }[]
}

export type SavingData = {
    match: boolean[]
}
