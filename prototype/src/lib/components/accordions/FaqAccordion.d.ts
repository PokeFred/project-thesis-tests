export type FaqAccordion = FaqAccordionListItem[]

export type FaqAccordionListItem = FaqAccordionQuestion | FaqAccordionSeperator

export type FaqAccordionQuestion = {
    type: "question",
    question: string,
    answer: string
}

export type FaqAccordionSeperator = {
    type: "seperator"
}
