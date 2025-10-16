<script lang="ts">
    import type { Question } from "./Accordion"
    import AccordionItem from "./AccordionItem.svelte"
    import AccordionSeperator from "./AccordionSeperator.svelte"

    let { questions }: { questions: Question[] } = $props()
</script>
<div class="w-full h-auto grid grid-cols-1 gap-2">
    {#each questions as question}
        <AccordionItem question={question} />
        <AccordionSeperator />
    {/each}
</div>
