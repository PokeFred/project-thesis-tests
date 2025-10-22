<script lang="ts">
    import PointSummary from "$components/Games/PointSummary.svelte";
    import { POINTS } from "$lib/State.svelte";
    import { quiz } from "../Quiz";

    const descriptions: string[] = ["Richtig platzierte Puzzleteile"]
    const points: number[] = [quiz.pieces.reduce((sum, piece) => sum + (piece.isPlaced() ? POINTS.ANSWER_CORRECT : 0), 0)]
</script>

<PointSummary {descriptions} {points}/>

<a href=".." data-sveltekit-preload-data data-sveltekit-preload-code class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Zurück zur Rätselübersicht</a>