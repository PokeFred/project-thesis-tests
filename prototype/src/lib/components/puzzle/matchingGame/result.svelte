<script lang="ts">
    import type { ResultData, SavingData } from "."
    import ResultComponent from "$components/Games/MatchingGame/MatchingGameResult.svelte"
    import type { Result } from "$components/Games/MatchingGame"

    let { result, saving }: { result: ResultData, saving: SavingData } = $props()

    const _result: Result = {
        leftHeader: result.header.left,
        rightHeader: result.header.right,
        pairs: result.pairs,
        informations: {
            title: result.informations.title,
            data: result.informations.data
        }
    }
</script>

<ResultComponent result={_result} saving={saving} />
