<script lang="ts">
    import { onMount } from "svelte";
    import Cloze, { type Answer } from "./Cloze.svelte"
    import type { GameInput } from ".";
    import Fullscreen from "$components/Fullscreen.svelte";
    import Select from "$components/Select.svelte";
    import type { Content, Inline } from "../Content";

    const { input }: { input: GameInput } = $props();
    const gameInput: GameInput = input

    const options: Answer[][] = new Array<Answer[]>();

    gameInput.content.forEach((content: Content) => {
        if(content.tag === "p") {
            content.children.forEach((inline: Inline) => {
                if(inline.tag === "Select") {
                    options.push(inline.options);
                }
            });
        }
    });

    const cloze: Cloze = new Cloze(options);
    let selectElementCounter: number = 0; 

    export const isComplete = cloze.isComplete.bind(cloze);
    export const getSubmitData = cloze.complete.bind(cloze);
    export const getSubmitScore = cloze.score.bind(cloze);
</script>

{#each gameInput.content as content }
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
                    <span class="block border-b-2 h-12 my-3 -mx-2">
                        <Select placeholder={"Wähle einen Text"} options={cloze.Options[i].map((answer: Answer) => answer.answer)} onclick={(option: string, index: number) => {
                                cloze.Selected[i] = cloze.Options[i][index]; 
                            }}/>
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