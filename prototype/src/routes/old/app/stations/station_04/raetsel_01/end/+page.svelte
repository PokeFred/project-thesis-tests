<script lang="ts">
    import PointSummary from "$components/Games/PointSummary.svelte";
    import { POINTS } from "$lib/State.svelte";
    import { quiz } from "../Quiz";

    const selected = quiz.Selected.filter((answer)=> answer ? true : false);
    const descriptions: string[] = selected.map((answer)=> answer.answer);
    const points: number[] = selected.map((answer)=> answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);

    descriptions.push("Genutze Hinweise");
    points.push((quiz.Hints?.reduce((sum, hint)=> sum + (hint.Unlocked ? POINTS.HINT_UNLOCKED : 0), 0) ?? 0));
</script>

<p class="my-4 w-full h-auto text-sm">
    Super, Du hast alle Lücken ausgefüllt! Jetzt kannst Du Dir vielleicht
    vorstellen, wie das Warenhaus Althoff früher ausgesehen hat und wie
    beeindruckend es auf die Menschen der damaligen Zeit gewirkt haben muss.
</p>

<p class="my-4 w-full h-auto text-sm">
    Die Bilder zeigen das sich über zwei Etagen erstreckende, prachtvoll
    ausgestattete Teppichlager – dort wurden übrigens regelmäßig Märchen für
    Kinder aufgeführt –, den beeindruckenden Erfrischungsraum sowie das Gebäude
    von außen. Hast Du Dir die Räume so oder so ähnlich vorgestellt? Das
    Warenhaus Althoff wurde zur Erlebniswelt, die für alle etwas zu bieten
    hatte!
</p>

<PointSummary {descriptions} {points}/>

<a href=".." data-sveltekit-preload-data data-sveltekit-preload-code class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Zurück zur Rätselübersicht</a>