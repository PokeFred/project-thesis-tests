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
    src: string,
    alt: string,
    caption: string,
    hints?: {
        normal?: string,
        crossed?: string
    }
}

export type Question = {
    solution: string,
    left: Hint,
    right: Hint,
    operator: string
}