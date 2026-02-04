<script lang="ts">
    import type { ResultData, SavingData } from "."
    import ResultComponent from "$components/Games/Cloze/ClozeResult.svelte"

    let { result, saving }: { result: ResultData, saving: SavingData } = $props()
</script>

<!-- TODO (Cedric): result komponente wird nicht aufgerufen -->
<ResultComponent result={result} saving={saving} />
