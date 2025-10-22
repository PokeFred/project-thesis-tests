<script lang="ts">
    import PointSummary from "$components/Games/PointSummary.svelte";
    import { POINTS } from "$lib/State.svelte";
    import { quiz, handwerk } from "../Quiz";

    const selected = quiz.selected.filter((answer)=> answer ? true : false);
    const descriptions: string[] = selected.map((answer, i)=> `${handwerk[i]}:  ${answer.answer}`);
    const points: number[] = selected.map((answer)=> answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);
</script>

<p class="mb-4 w-full h-auto text-sm">
    Super Leistung! Jetzt weißt Du, wer im mittelalterlichen Dortmund wofür zuständig war. Die
    Texte verraten Dir noch mehr über das mittelalterliche Handwerk.
</p>

<PointSummary {descriptions} {points} />

<!-- Accordion -->

<a href=".." data-sveltekit-preload-data data-sveltekit-preload-code class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Zurück zur Rätselübersicht</a>