// TODO MERGE


export type Introduction = {
    text: string[]
}

export type GameInput = {
    questions: Question[]
}

export type GameOutput = {
    inputs: string[]
}

export type Result = {
    solutions: string[],
    inputs: string[]
}



export type Hint = {
    tag: "img"
    src: string,
    alt: string,
    caption: string,
} | {
    tag: "text",
    text: {
        normal?: string,
        crossed?: string
    }
}

export type Question = {
    solution: string,
    hints: Hint[]
}