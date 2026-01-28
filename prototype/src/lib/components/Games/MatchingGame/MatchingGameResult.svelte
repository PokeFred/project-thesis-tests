<script lang="ts">
    import Accordion from "$components/accordions/Accordion.svelte";
    import type { Result } from ".";
    import { POINTS } from "../Quiz";

    /*
    Result { leftHeader: string, rightHeader: string, pairs: { left: string, right: string }[] }
    Saving { answers: string[] }
    */
    const { result, saving }: { result: any, saving: any } = $props();
    console.log(result)
</script>

<table class="w-full table-fixed border-collapse border-secondary text-left">
    <thead class="font-bold tracking-[1.08px] uppercase">
        <tr>
            <th class="border-r pl-3 pt-2.5 pb-4">{result.leftHeader}</th>
            <th class="border-l pl-3 pt-2.5 pb-4">{result.rightHeader}</th>
        </tr>
    </thead>
    <tbody class="font-medium text-[18px] leading-6">
        {#each result.pairs as pair, i}
            {@const correct = pair.right === saving.answers[i]}
            <tr class="border-t-2 h-20">
                <td class="border-r h-20 pl-3">{pair.left}</td>
                <td class="border-l h-20 pl-3">{pair.right}</td>
            </tr>   
            <tr class="w-200px">
                <td colspan="2">
                    <div class="relative flex justify-between items-center bg-secondary text-primary text-[16px] font-bold tracking-[0.96] h-7.5 mb-3.5 -mx-4 px-8">
                        <div>Du hast {correct ? "RICHTIG" : "FALSCH"} getippt</div>
                        <div>{correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE}/{POINTS.ANSWER_CORRECT}</div>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<div class="mt-15 font-medium">
    <Accordion title={result.informations.title} data={result.informations.data} />
</div>
