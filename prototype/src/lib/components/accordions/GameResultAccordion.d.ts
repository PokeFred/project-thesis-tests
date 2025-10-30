export type GameResultAccordion = nAccordionItem[]

export type GameResultAccordionItem = nAccordionQuestion | nAccordionSeperator

export type GameResultAccordionQuestion = {
    type: "question",
    success: boolean,
    question: string,
    answers: GameResultAccordionQuestionAnswer[]
}

// TODO better types ?
export type GameResultAccordionQuestionAnswer = { type: "paragraph", content: string } | { type: "image", src: string, alt: string, caption: string } | { type: "spacing" }

export type GameResultAccordionSeperator = {
    type: "seperator"
}
