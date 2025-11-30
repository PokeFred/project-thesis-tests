<script lang="ts">
    import type { Answer } from "$components/Games/MultipleChoiceGame/MultipleChoice";
    import MultipleChoice from "$components/Games/MultipleChoiceGame/MultipleChoice";
    import MultipleChoiceComponent from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte";
    import type { GameInput, GameOutput } from "$components/Games/MultipleChoiceGame"
    import { onMount } from "svelte"

    let { data, setSubmitable = $bindable() }: { data: GameInput, setSubmitable: () => void } = $props()

    let multipleChoiceComponent: MultipleChoiceComponent;

    onMount((): void => {
        setSubmitable()
    })
    export const getSubmitData = () => { multipleChoiceComponent?.getSubmitData };
    export const getSubmitScore = () => { return 0; }
</script>

<MultipleChoiceComponent gameInput={data} bind:this={multipleChoiceComponent}/>