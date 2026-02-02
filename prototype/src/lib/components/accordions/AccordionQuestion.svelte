<script lang="ts">
    import type { AccordionQuestion } from "./Accordion"
    import { Icon } from "svelte-awesome"
    import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus"
    import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"
    import Fullscreen from "$components/Fullscreen.svelte";

    let { question }: { question: AccordionQuestion } = $props()
    let open: boolean = $state<boolean>(false)
</script>

<details bind:open={open}>
    <summary class="w-full h-20 flex  justify-between items-center cursor-pointer px-2">
        <span class="font-bold text-[18px] leading-6">{question.question}</span>
        {#if open}
            <svg class="object-contain w-8 h-fit shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <rect x="0" y="47" width="100" height="6" class="fill-secondary"/>
            </svg>
        {:else}
            <svg class="object-contain w-8 h-fit shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <rect x="0" y="47" width="100" height="6" class="fill-secondary"/>
                <rect x="47" y="0" width="6" height="100" class="fill-secondary"/>
            </svg>
        {/if}
    </summary>
    {#each question.answer as element}
        <div class="mb-7.5 px-2 text-[18px] leading-6">
            {#if element.type === "subtitle"}
                <div class="font-medium">{element.text}</div>
            {:else if element.type === "paragraph"}
                <div class="font-medium">{element.text}</div>
            {:else}
                <figure>
                    <Fullscreen>
                        <img src={element.src} alt={element.alt} class="rounded-lg" />
                    </Fullscreen>
                    <figcaption>{element.caption}</figcaption>
                </figure>
                <!-- TODO Cedric: das ist das richtige gestylte bild. caption und src von caption nutzen -->
                <!-- <figure class="my-10 -mx-6">
                    <Fullscreen>
                        <img src={content.src} alt={content.alt} />
                    </Fullscreen>
                    {#if content.caption}
                        <figcaption class="flex flex-col mx-4.5 mt-3 font-medium">
                            <span class="mb-2 text-[16px] leading-4">{content.caption?.caption}</span>
                            <span class="uppercase text-[12px] leading-4.5 tracking-[0.72pt]">{content.caption?.src}</span>
                        </figcaption>
                    {/if}
                </figure> -->
            {/if}
        </div>
    {/each}
</details>
