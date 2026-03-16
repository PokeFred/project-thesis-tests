export type Chapter = {
    title: string,
    data: any[],
    audio: string | null
}

export type AccordionData = AccordionItemData[]

type AccordionItemData = AccordionContentData | { type: "seperator" }

export type AccordionContentData = {
    type: "content",
    question: string,
    answers: any[],
    audio: string | null
}
