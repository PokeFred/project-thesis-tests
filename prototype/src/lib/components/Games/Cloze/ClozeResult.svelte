<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte";
    import { Icon } from "svelte-awesome";
    import type { Result } from ".";
    import angleDown from "svelte-awesome/icons/angleDown";
    import type { Answer } from "./Cloze.svelte";
    import type { Content, Inline } from "../Content";
    import { POINTS } from "../Quiz";
    import type { SavingData } from "$components/puzzle/textSelect";

    const { result, saving }: { result: Result; saving: SavingData } = $props();

    const correctAnswers: Answer[] = new Array<Answer>();

    result.content.forEach((content: Content) => {
        if(content.tag === "p") {
            content.children.forEach((inline: Inline) => {
                if(inline.tag === "Select") {
                    inline.options.forEach((option: Answer) => {                        
                        if(option.correct) {
                            correctAnswers.push(option);
                            return;
                        }
                    });
                }
            });
        }
    });

    let selectElementCounter: number = 0;
</script>


{#each result.content as content }
    {#if content.tag === "h2"}
        <h2 class="mx-2 font-medium text-[18px] leading-6">
            {#each content.children as child}
                {#if child.tag === "text"}
                    {child.text}
                {/if}
            {/each}
        </h2>
    {:else if content.tag === "p"}
        <p class="mx-1.5 mb-5 font-medium text-[18px] leading-6">
            {#each content.children as child}
                {#if child.tag === "text"}
                    {child.text}
                {:else if child.tag === "Select"}
                    {@const i: number = selectElementCounter++}
                    <span class="flex justify-between items-center border-b-2 h-12 my-3 -mx-2">
                        <span class="ml-3">{correctAnswers[i].answer}</span>
                        <span class="mr-5"><Icon data={angleDown} scale={2}/></span>
                    </span>
                    <span class="flex justify-between items-center h-8 mb-5 -mx-5.5 pl-8.5 pr-7.5 bg-secondary text-primary text-[16px] leading-6">
                        <span class="font-bold  tracking-[0.96px]">Du hast {saving.selected[i] ? (saving.selected[i].correct ? "RICHTIG" : "FALSCH") : "FALSCH"} getippt</span>
                        <span class="font-medium">{saving.selected[i] ? (saving.selected[i].correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE) : POINTS.NOT_ANSWERED}/{POINTS.ANSWER_CORRECT}</span>
                    </span>
                {/if}
            {/each}
        </p>
    {:else if content.tag === "img"}
        <figure class="my-10 -mx-4">
            <Fullscreen>
                <img src={content.src} alt={content.alt}>
            </Fullscreen>
            {#if content.caption}
                <figcaption class="flex flex-col mx-4.5 mt-3 font-medium">
                    <span class="mb-2 text-[16px] leading-4">{content.caption?.caption}</span>
                    <span class="uppercase text-[12px] leading-4.5 tracking-[0.72pt]">{content.caption?.src}</span>
                </figcaption>
            {/if}
        </figure>
    {/if}
{/each}