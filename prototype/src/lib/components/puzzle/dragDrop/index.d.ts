export type IntroductionData = {
    title: string,
    description: string[]
}

export type GameData = {
    path: string,
    caption: string,
    introduction?: boolean
}

export type ResultData = {
    img: string,
    caption: string,
    scoreDescription?: string
}

export type SavingData = {
    total: number,
    correct: number
}
