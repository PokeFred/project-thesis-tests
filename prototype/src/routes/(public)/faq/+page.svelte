<script lang="ts">
    import { Icon } from "svelte-awesome"
    import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"
    import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus"

    type AccordionList = AccordionListItem[]

    type AccordionListItem = AccordionQuestion | AccordionSeperator

    type AccordionQuestion = {
        type: "question",
        identifier: string,
        question: string,
        answer: string,
        open: boolean
    }

    type AccordionSeperator = {
        type: "seperator"
    }

    const list: AccordionList = $state([
        { type: "question", identifier: "question_01", question: "Frage 1 ?", answer: "Antwort 1.", open: false },
        { type: "seperator" },
        { type: "question", identifier: "question_01", question: "Frage 2 ?", answer: "Antwort 2.", open: false },
        { type: "seperator" },
        { type: "question", identifier: "question_01", question: "Frage 3 ?", answer: "Antwort 3.", open: false }
    ])
</script>

<div class="w-full h-auto text-black border border-black rounded-xl p-4">
    <div class="text-xl font-bold underline text-center">FAQ</div>
     <div class="w-full h-auto grid grid-cols-1 gap-2">
        {#each list as element}
            {#if element.type === "question"}
                <details bind:open={element.open} class="w-full h-auto">
                    <summary class="w-full h-auto flex justify-between items-center cursor-pointer"><span class="font-bold">{element.question}</span> <Icon data={element.open ? faPlus : faMinus} /></summary>
                    <div class="px-2 pt-1">{element.answer}</div>
                </details>
            {:else}
                <hr />
            {/if}
        {/each}
     </div>
</div>
