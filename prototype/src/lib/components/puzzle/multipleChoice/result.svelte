<script lang="ts">
    import type { ResultData, SavingData } from "."
    import ResultComponent from "$components/Games/MultipleChoiceGame/MultipleChoiceResult.svelte"

    let { result, saving }: { result: ResultData, saving: SavingData } = $props()

    // Result
    // { id: number, text: string, description: [], isCorrect: boolean }[]

    // Saving
    // { answers: { id: number, selected: boolean }[] }
</script>

<!-- <ResultComponent result={result} saving={saving} /> -->
