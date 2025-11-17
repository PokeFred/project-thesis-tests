<script lang="ts">
    import type { AccordionData } from "./Accordion"
    import AccordionQuestion from "./AccordionQuestion.svelte"
    import AccordionSeperator from "./AccordionSeperator.svelte"

    let { title, data }: { title: string, data: AccordionData } = $props()
</script>

<div class="w-full h-auto text-lg font-bold text-left px-3">{title}</div>
<div class="w-full h-auto grid grid-cols-1 gap-4">
    {#each data as element}
        {#if element.type === "question"}
            <AccordionQuestion question={element} />
        {:else}
            <AccordionSeperator />
        {/if}
    {/each}
</div>
