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
    text: string
}

export type AccordionQuestionAnswerParagraph = {
    type: "paragraph",
    text: string
}

export type AccordionQuestionAnswerImage = {
    type: "image",
    src: string,
    alt: string,
    caption: { caption: string, src: string }
}

export type AccordionSeperator = {
    type: "seperator"
}
