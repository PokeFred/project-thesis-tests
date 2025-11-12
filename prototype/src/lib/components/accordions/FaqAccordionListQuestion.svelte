<script lang="ts">
    import type { FaqAccordionQuestion } from "./FaqAccordion"
    import { Icon } from "svelte-awesome"
    import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus"
    import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"

    let { question }: { question: FaqAccordionQuestion } = $props()
    let open: boolean = $state<boolean>(false)
</script>

<details bind:open={open} class="w-full h-auto">
    <summary class="w-full h-auto flex justify-between items-center cursor-pointer px-3">
        <span class="font-bold">{question.question}</span>
        <Icon data={open ? faPlus : faMinus} />
    </summary>
    <div class="px-2 pt-1">{question.answer}</div>
</details>
