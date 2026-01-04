import type { Content } from "../Content";
import type { Answer } from "./Cloze.svelte"

export type Introduction = {
    text: string[]
}

export type GameInput = {
    content: Content[]
}

export type GameOutput = {
    selected: Answer[]
}

export type Result = {
    content: Content[],
    selected: Answer[]
}
