<script lang="ts">
    import PointSummary from "$components/Games/PointSummary.svelte";
    import { POINTS } from "$lib/State.svelte";
    import { quiz } from "../Quiz";

    const descriptions: string[] = [`Richtig platzierte Puzzleteile (${quiz.AnswersCorrect})`]
    const points: number[] = [quiz.AnswersCorrect * POINTS.ANSWER_CORRECT]
</script>

<PointSummary {descriptions} {points} />

<section class="text-sm mb-4 text-green-500">
    <h4>Richtig:</h4>
    <ul>
        <li>Schwert (rechte Hand)</li>
        <li>Schild mit Löwen (linke Hand)</li>
        <li>Umhang (ohne Kapuze)</li>
        <li>einfaches Gewand</li>
        <li>einfache Stiefel</li>
        <li>einfache Stiefel</li>
    </ul>
</section>

<section class="text-sm mb-4 text-red-500">
    <h4>Falsch:</h4>
    <p>Schild mit Bären, Stab, Umhang mit Kapuze, Helm mit Nasenbein, Schriftrolle, Buch, Dolch, langes Gewand, barfuß/keine Stiefel.</p>
</section>

<p class="mb-4 w-full h-auto text-sm">
    Geschafft! Du hast den heiligen Reinoldus ausgestattet. Die Kaufleute der Reinoldi-Gilde
    wären sehr zufrieden mit Dir! In den Texten kannst Du etwas über die Reinoldi-Gilde und den
    Handel in Dortmund lernen.
</p>

<a href=".." data-sveltekit-preload-data data-sveltekit-preload-code class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Zurück zur Rätselübersicht</a>