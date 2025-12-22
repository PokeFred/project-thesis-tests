export type IntroductionData = {
    text: string[]
}

export type GameData = {
    header: {
        left: string,
        right: string
    },
    data: {
        left: string[],
        right: string[],
        pairs: { left: string, right: string }[]
    }
}

export type ResultData = {}

export type SavingData = {}
