import type { Content } from "../Content";

export type Introduction = {
    text: string[]
}

export type GameInput = {
    content: Content[];
}

export type GameOutput = {
    answers: Answer[]
}

export type Result = {
    answers: Answer[]
}
