<script lang="ts">
    import FaqAccordionListSeperator from "./FaqAccordionListSeperator.svelte"
    import FaqAccordionListQuestion from "./FaqAccordionListQuestion.svelte"
    import type { FaqAccordion } from "./Accordion"

    let { list }: { list: FaqAccordion } = $props()
</script>

<div class="w-full h-auto grid grid-cols-1 gap-2">
    {#each list as element}
        {#if element.type === "question"}
            <FaqAccordionListQuestion question={element.question} answer={element.answer} />
        {:else}
            <FaqAccordionListSeperator />
        {/if}
    {/each}
</div>
