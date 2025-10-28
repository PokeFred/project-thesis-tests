export type FaqAccordion = FaqAccordionListItem[]

export type FaqAccordionListItem = FaqAccordionQuestion | FaqAccordionSeperator

export type FaqAccordionQuestion = {
    type: "question",
    identifier: string,
    question: string,
    answer: string,
    open: boolean
}

export type FaqAccordionSeperator = {
    type: "seperator"
}
