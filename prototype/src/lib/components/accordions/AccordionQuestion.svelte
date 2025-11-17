<script lang="ts">
    import type { AccordionQuestion } from "./Accordion"
    import { Icon } from "svelte-awesome"
    import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus"
    import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"

    let { question }: { question: AccordionQuestion } = $props()
    let open: boolean = $state<boolean>(false)
</script>

<details bind:open={open}>
    <summary class="w-full h-auto flex justify-between items-center cursor-pointer px-3">
        <span class="font-bold">{question.question}</span>
        <Icon data={open ? faMinus : faPlus} />
    </summary>
    <div class="px-2 pt-1">
        {#each question.answer as element}
            {#if element.type === "subtitle"}
                <div class="font-semibold">{element.content}</div>
            {:else if element.type === "paragraph"}
                <div class="p-1">{element.content}</div>
            {:else}
                <figure class="p-1">
                    <img src={element.src} alt={element.alt} class="rounded-lg" />
                    <figcaption>{element.caption}</figcaption>
                </figure>
            {/if}
        {/each}
    </div>
</details>
