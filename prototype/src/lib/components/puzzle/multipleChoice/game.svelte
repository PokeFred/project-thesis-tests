<script lang="ts">
    import type { Answer } from "$components/Games/MultipleChoiceGame/MultipleChoice";
    import MultipleChoice from "$components/Games/MultipleChoiceGame/MultipleChoice";
    import MultipleChoiceComponent from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte";
    import type { GameInput, GameOutput } from "$components/Games/MultipleChoiceGame"
    import { onMount } from "svelte"

    let { data, getSubmitData = $bindable(), setSubmitable = $bindable() }: { data: GameInput, getSubmitData: () => GameOutput; setSubmitable: () => void } = $props()

    onMount((): void => {
        setSubmitable()
    })
</script>

<MultipleChoiceComponent gameInput={data} bind:getSubmitData={getSubmitData}/>