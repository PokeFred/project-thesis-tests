<script lang="ts">
    import type { ResultData, SavingData } from "."
    // TODO (Simon) richtige Komponente einbinden
    import ResultComponent from "$components/Games/MultipleChoiceGame/MultipleChoiceResult.svelte"

    let { result, saving }: { result: ResultData, saving: SavingData } = $props()
</script>

<ResultComponent result={result} saving={saving} />

<!-- TODO (Simon) text hier unten rendern -->
<!-- Result { answers: any[], text: string[] } -->
<!-- Sinn: Der Text ist relativ statisch, der kommt hier hin, die Answers sind ja der "dynamische" Teil deiner Komponente -->
<div class="w-full h-auto px-1 mb-15 font-bold text-[20px] leading-6">
    {#each result.text as element}
        <div>{element}</div>
    {/each}
</div>
<div>Hey</div>
