<script lang="ts">
    import type { ResultData, SavingData } from "."
    import ResultComponent from "$components/Games/MultipleChoiceGame/MultipleChoiceResult.svelte"

    let { result, saving }: { result: ResultData, saving: SavingData } = $props()
</script>

<ResultComponent result={result} saving={saving} />
