<script lang="ts">
    import type { ResultData, SavingData } from "."
    import ResultComponent from "$components/Games/SingleChoice/SingleChoiceResult.svelte"

    let { result, saving }: { result: ResultData, saving: SavingData } = $props()
</script>

<ResultComponent result={result} saving={saving} />
<div class="w-full h-auto px-1 mb-15 font-bold text-[20px] leading-6">
    {#each result.text as element}
        <div>{element}</div>
    {/each}
</div>
