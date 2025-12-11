<script lang="ts">
    import type { Result } from ".";
    import { POINTS } from "../Quiz";

    const { result }: { result: Result } = $props();
</script>

<table class="w-full table-fixed border-collapse border-secondary text-left">
    <thead class="font-bold">
        <tr>
            <th class="border-r pl-3 py-2.5">{result.leftHeader}</th>
            <th class="border-l pl-3 py-2.5">{result.rightHeader}</th>
        </tr>
    </thead>
    <tbody class="font-medium">
        {#each result.pairs as pair, i}
            {@const correct = pair.right === result.answers[i]}
            <tr class="border-t-2 h-20">
                <td class="border-r h-20 pl-3">{pair.left}</td>
                <td class="border-l h-20 pl-3">{pair.right}</td>
            </tr>   
            <tr class="w-200px">
                <td colspan="2">
                    <div class="relative flex justify-between bg-secondary text-primary font-bold h-7.5 mb-3.5 -mx-4 px-8">
                        <div>Du hast {correct ? "RICHTIG" : "FALSCH"} getippt</div>
                        <div>{correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE}/{POINTS.ANSWER_CORRECT}</div>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>