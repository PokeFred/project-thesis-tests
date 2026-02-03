

export type Introduction = {
    text: string[]
}

export type GameInput = {
    questions: Question[]
}

export type GameOutput = {
    match: boolean
}

export type Result = {
    solutions: string[],
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
    hints?: Hint[]
}