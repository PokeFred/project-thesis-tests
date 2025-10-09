<script lang="ts">
    import { gameState } from "$lib/State.svelte";
</script>

<p class="mb-4 w-full h-auto text-sm">
    Geschafft! Du hast den heiligen Reinoldus ausgestattet. Die Kaufleute der Reinoldi-Gilde
    wären sehr zufrieden mit Dir! In den Texten kannst Du etwas über die Reinoldi-Gilde und den
    Handel in Dortmund lernen.
</p>

<p class="mb-4 w-full h-auto text-sm">Verdiente Punkte: {gameState.stationStates[3].quizStates[1].getScore()}</p>

<a href=".." data-sveltekit-preload-data data-sveltekit-preload-code class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Zurück zur Rätselübersicht</a>