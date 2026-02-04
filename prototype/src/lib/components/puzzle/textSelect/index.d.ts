export type IntroductionData = {
    text: string[]
}

export type GameData = {
    data: any[]
}

export type ResultData = {}

export type SavingData = {
    selected: {
        readonly answer: string;
        readonly correct: boolean;
    }[]   
}
