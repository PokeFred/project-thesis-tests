import type { PageLoad } from "./$types"
import Faq from "$config/faq"
import type { FaqQuestion } from "$config/faq"
import type { FaqAccordion } from "$components/accordions/FaqAccordion"

function addSeperator(element: FaqAccordion): FaqAccordion {
    element.push({ type: "seperator" })
    return element
}

export const load: PageLoad = async (): Promise<{ list: FaqAccordion }> => {
    let list: FaqAccordion = Faq
        .map((element: FaqQuestion): FaqAccordion => [{ type: "question", question: element.question, answer: element.answer }])
        .map(addSeperator)
        .flat(1)
    
    list = [{ type: "seperator" }, ...list]

    return {
        list: list
    }
}
