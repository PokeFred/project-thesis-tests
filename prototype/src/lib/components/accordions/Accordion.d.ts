export type AccordionData = AccordionDataItem[]

export type AccordionDataItem = AccordionQuestion | AccordionSeperator

export type AccordionQuestion = {
    type: "question",
    question: string,
    answer: AccordionQuestionAnswer[]
}

export type AccordionQuestionAnswer = AccordionQuestionAnswerSubtitle | AccordionQuestionAnswerParagraph | AccordionQuestionAnswerImage

export type AccordionQuestionAnswerSubtitle = {
    type: "subtitle",
    content: string
}

export type AccordionQuestionAnswerParagraph = {
    type: "paragraph",
    content: string
}

export type AccordionQuestionAnswerImage = {
    type: "image",
    src: string,
    alt: string,
    caption: string
}

export type AccordionSeperator = {
    type: "seperator"
}
