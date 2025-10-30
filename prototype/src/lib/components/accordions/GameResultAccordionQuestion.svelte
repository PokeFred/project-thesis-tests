<script lang="ts">
    import AccordionQuestionAnswer from "./GameResultAccordionQuestionAnswer.svelte"
    import type { GameResultAccordionQuestion } from "./GameResultAccordion"
    import { Icon } from "svelte-awesome"
    import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus"
    import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"
    import { faSquareCheck } from "@fortawesome/free-solid-svg-icons/faSquareCheck"
    import { faSquareXmark } from "@fortawesome/free-solid-svg-icons/faSquareXmark"

    let { question }: { question: GameResultAccordionQuestion } = $props()
    let open: boolean = $state<boolean>(false)
    let color: string = question.success ? "text-green-500" : "text-red-500"
</script>

<details bind:open={open} class="w-full h-auto">
    <summary class="w-full h-auto flex justify-between items-center cursor-pointer">
        <span class="font-bold {color}"><Icon data={question.success ? faSquareCheck : faSquareXmark} /> {question.question}</span>
        <Icon data={open ? faMinus : faPlus} class="{color}" />
    </summary>
    <AccordionQuestionAnswer answers={question.answers} color={color} />
</details>
