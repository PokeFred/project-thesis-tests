<script lang="ts">
    import type { GameInput, GameOutput } from "./index"
    import { onMount } from "svelte"
    import MultipleChoice from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte"

    let { data, setSubmitable }: { data: GameInput, setSubmitable: () => void } = $props()

    let multiple: MultipleChoice
    export function getSubmitData(): GameOutput { return multiple.getSubmitData() }
    export function getSubmitScore(): number { return multiple.getSubmitScore() }

    onMount((): void => {
        setSubmitable()
    })
</script>

<MultipleChoice bind:this={multiple} gameInput={data} />
