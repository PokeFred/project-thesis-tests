<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte";
    import type { Inline, Content } from "./Types";

    let { content }: { content: Content[] } = $props();
</script>


{#each content as element }
    {#if element.tag === "h2"}
        <h2 class="mx-2 font-medium text-[18px] leading-6">
            {#each element.children as child}
                {#if child.tag === "text"}
                    {child.text}
                {/if}
            {/each}
        </h2>
    {:else if element.tag === "p"}
        <p class="mx-1.5 mb-5 font-medium text-[18px] leading-6">
            {#each element.children as child}
                {#if child.tag === "text"}
                    {child.text}
                <!-- {:else if child.tag === "Select"}
                    {@const i: number = selectElementCounter++}
                    <span class="block border-b-2 h-12 my-3 -mx-2">
                        <Select placeholder={"Wähle einen Text"} options={cloze.Options[i].map((answer: Answer) => answer.answer)} onclick={(option: string, index: number) => {
                                cloze.Selected[i] = cloze.Options[i][index]; 
                            }}/>
                    </span> -->
                {/if}
            {/each}
        </p>
    {:else if element.tag === "img"}
        <figure class="my-10 -mx-4">
            <Fullscreen>
                <img src={element.src} alt={element.alt}>
            </Fullscreen>
            {#if element.caption}
                <figcaption class="flex flex-col mx-4.5 mt-3 font-medium">
                    <span class="mb-2 text-[16px] leading-4">{element.caption?.caption}</span>
                    <span class="uppercase text-[12px] leading-4.5 tracking-[0.72pt]">{element.caption?.src}</span>
                </figcaption>
            {/if}
        </figure>
    {/if}
{/each}