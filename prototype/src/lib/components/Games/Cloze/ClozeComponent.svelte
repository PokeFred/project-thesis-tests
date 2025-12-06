<script lang="ts">
    import { onMount } from "svelte";
    import Cloze, { type Answer } from "./Cloze.svelte"
    import type { GameInput } from ".";
    import Fullscreen from "$components/Fullscreen.svelte";
    import Select from "$components/Select.svelte";
    import type { Content, Inline } from "../Content";

    const { gameInput, setSubmitable = $bindable() }: { gameInput: GameInput, setSubmitable: () => void } = $props();

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

    onMount((): void => {
        setSubmitable();
    })    

    export const getSubmitData = cloze.complete.bind(cloze);
    export const getSubmitScore = cloze.score.bind(cloze);
</script>

{#each gameInput.content as content }
    {#if content.tag === "h2"}
        <h2>
            {#each content.children as child}
                {#if child.tag === "text"}
                    {child.text}
                {/if}
            {/each}
        </h2>
    {:else if content.tag === "p"}
        <p>
            {#each content.children as child}
                {#if child.tag === "text"}
                    {child.text}
                {:else if child.tag === "Select"}
                    {@const i: number = selectElementCounter++}
                    <Select options={options[i].map((answer: Answer) => answer.answer)} onclick={(option: string, index: number) => {
                            cloze.Selected[i] = options[i][index]; 
                            console.log(cloze.Selected)
                        }}/>
                {/if}
            {/each}
        </p>
    {:else if content.tag === "img"}
        <figure>
            <Fullscreen>
                <img src={content.src} alt={content.alt}>
            </Fullscreen>
            <figcaption>{content.caption}</figcaption>
        </figure>
    {/if}
{/each}