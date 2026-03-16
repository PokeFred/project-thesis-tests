<script lang="ts">
    import ChapterAccordionContent from "./ChapterAccordionContent.svelte"
    import type { AccordionData, Chapter } from "./ChapterAccordion"

    let { title, chapters }: { title: string, chapters: Chapter[] } = $props()

    const arr: AccordionData = [{ type: "seperator" }]
    // svelte-ignore state_referenced_locally
    for (const chapter of chapters) {
        arr.push({
            type: "content",
            question: chapter.title,
            answers: chapter.data,
            audio: chapter.audio
        })

        arr.push({ type: "seperator" })
    }
</script>

<div class="w-full h-auto text-lg font-bold text-[20px] text-left leading-6 px-2 mb-5">{title}</div>
<div class="w-full h-auto grid grid-cols-1">
    {#each arr as element}
        {#if element.type === "content"}
            <ChapterAccordionContent question={element.question} answers={element.answers} audio={element.audio} />
        {:else if element.type === "seperator"}
            <hr class="border" />
        {/if}
    {/each}
</div>
