import type { PageLoad } from "./$types"
import type { FaqAccordion } from "./Accordion"

export const load: PageLoad = async (): Promise<{ list: FaqAccordion }> => {
    // TODO read from config
    return {
        list: [
            { type: "question", identifier: "question_01", question: "Frage 1 ?", answer: "Antwort 1.", open: false },
            { type: "seperator" },
            { type: "question", identifier: "question_01", question: "Frage 2 ?", answer: "Antwort 2.", open: false },
            { type: "seperator" },
            { type: "question", identifier: "question_01", question: "Frage 3 ?", answer: "Antwort 3.", open: false }
        ]
    }
}
