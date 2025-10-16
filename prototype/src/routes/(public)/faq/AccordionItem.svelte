<script lang="ts">
    import Icon from "svelte-awesome"
    import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
    import type { Question } from "./Accordion"
    import { onMount } from "svelte";

    let { question }: { question: Question } = $props()

    let details: HTMLDetailsElement

    onMount(() => {
        details.addEventListener("toggle", (event: ToggleEvent): void => {
            //console.log(event)
        })
    })
</script>

<details bind:this={details} class="w-full h-auto border border-red-500 rounded-xl">
    <summary class="w-full h-auto grid grid-cols-[auto_32px] gap-4">
        <div class="w-full h-auto flex justify-start items-center">{question.question}</div>
        <button class="w-8 h-8 flex justify-center items-center cursor-pointer">
            <Icon data={faCheck} class="w-6 h-6" />
        </button>
    </summary>
    <div class="px-4 py-2">{question.answer}</div>
</details>
