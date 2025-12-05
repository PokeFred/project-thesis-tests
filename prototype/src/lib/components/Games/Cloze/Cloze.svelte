<script lang="ts">
    import { onMount } from "svelte";
    import Cloze from "./Cloze";
    import type { GameInput } from ".";
    import Fullscreen from "$components/Fullscreen.svelte";
    import Select from "$components/Select.svelte";

    const { gameInput, setSubmitable = $bindable() }: { gameInput: GameInput, setSubmitable: () => void } = $props();

    const cloze: Cloze = new Cloze(gameInput.options);

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
                    <p><Select options={child.options[0]}></p>
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