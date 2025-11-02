<script lang="ts">
    import FaqAccordionListSeperator from "./FaqAccordionListSeperator.svelte"
    import FaqAccordionListQuestion from "./FaqAccordionListQuestion.svelte"
    import type { FaqAccordion } from "./FaqAccordion"

    let { list }: { list: FaqAccordion } = $props()
</script>

<div class="w-full h-auto grid grid-cols-1 gap-2">
    {#each list as element}
        {#if element.type === "question"}
            <FaqAccordionListQuestion question={element} />
        {:else}
            <FaqAccordionListSeperator />
        {/if}
    {/each}
</div>
