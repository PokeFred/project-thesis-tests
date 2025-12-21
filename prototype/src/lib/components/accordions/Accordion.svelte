<script lang="ts">
    import type { AccordionData } from "./Accordion"
    import AccordionQuestion from "./AccordionQuestion.svelte"
    import AccordionSeperator from "./AccordionSeperator.svelte"

    let { title, data }: { title: string, data: AccordionData } = $props()
</script>

<div class="w-full h-auto text-lg font-bold text-[20px] text-left leading-6 px-2 mb-5">{title}</div>
<div class="w-full h-auto grid grid-cols-1">
    {#each data as element}
        {#if element.type === "question"}
            <AccordionQuestion question={element} />
        {:else}
            <AccordionSeperator />
        {/if}
    {/each}
</div>
