<script lang="ts">
    import type { AccordionQuestion } from "./Accordion"
    import { Icon } from "svelte-awesome"
    import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus"
    import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"

    let { question }: { question: AccordionQuestion } = $props()
    let open: boolean = $state<boolean>(false)
</script>

<details bind:open={open}>
    <summary class="w-full h-20 flex justify-between items-center cursor-pointer px-2">
        <span class="font-bold text-[18px] leading-6">{question.question}</span>
        <Icon data={open ? faMinus : faPlus} scale={2} />
    </summary>
    {#each question.answer as element}
        <div class="mb-7.5 px-2 text-[18px] leading-6">
            {#if element.type === "subtitle"}
                <div class="font-medium">{element.content}</div>
            {:else if element.type === "paragraph"}
                <div class="font-medium">{element.content}</div>
            {:else}
                <figure>
                    <img src={element.src} alt={element.alt} class="rounded-lg" />
                    <figcaption>{element.caption}</figcaption>
                </figure>
            {/if}
        </div>
    {/each}
</details>
