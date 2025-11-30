<script lang="ts">
    import type { Answer } from "$components/Games/MultipleChoiceGame/MultipleChoice";
    import MultipleChoice from "$components/Games/MultipleChoiceGame/MultipleChoice";
    import MultipleChoiceComponent from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte";
    import type { GameInput, GameOutput } from "$components/Games/MultipleChoiceGame"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameInput, setSubmitable: () => void } = $props()

    onMount((): void => {
        setSubmitable()
    })
</script>

<MultipleChoiceComponent gameInput={data}/>