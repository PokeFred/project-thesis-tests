<script lang="ts">
    import AccordionSeperator from "./GameResultAccordionSeperator.svelte"
    import AccordionQuestion from "./GameResultAccordionQuestion.svelte"
    import type { GameResultAccordion } from "./GameResultAccordion"

    let { accordion }: { accordion: GameResultAccordion } = $props()
</script>

<div class="w-full h-auto grid grid-cols-1 gap-2">
    {#each accordion as element}
        {#if element.type === "question"}
            <AccordionQuestion question={element} />
        {:else}
            <AccordionSeperator />
        {/if}
    {/each}
</div>
