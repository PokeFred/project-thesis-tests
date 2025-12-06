import type { Answer } from "./Cloze/Cloze.svelte"

export type Content =  {
    readonly tag: "h2",
    readonly children: Inline[]
} | {
    readonly tag: "p",
    readonly children: Inline[]
} | {
    readonly tag: "img",
    readonly src: string,
    readonly alt: string,
    readonly caption?: string
}

export type Inline = {
    readonly tag: "text",
    readonly text: string
} | {
    readonly tag: "Select",
    readonly options: Answer[]
}