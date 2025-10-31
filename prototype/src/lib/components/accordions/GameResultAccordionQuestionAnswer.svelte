<script lang="ts">
    import type { GameResultAccordionQuestionAnswer } from "./GameResultAccordion"

    let { answers, color }: { answers: GameResultAccordionQuestionAnswer[], color: string } = $props()
</script>

<div class="{color} px-4 pt-1">
    {#each answers as answer}
        {#if answer.type === "paragraph"}
            <div><i>{answer.content}</i></div>
        {/if}
        {#if answer.type === "image"}
            <img src={answer.src} alt={answer.alt} class="rounded-lg" />
            <div class="text-black">{answer.caption}</div>
        {/if}
        {#if answer.type === "spacing"}
            <br />
        {/if}
    {/each}
</div>
