<script lang="ts">
    import { score } from "$lib/Components/Score.svelte";
</script>

<p>
    <!-- Ändern, dass nur Punkte angezeigt werden, wenn man das Rätsel neu gelöst hat, gamestate -->
    Verdiente Punkte: {score.getLastGained()} 
</p>

<a href=".." data-sveltekit-preload-data data-sveltekit-preload-code class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Zurück zur Rätselübersicht</a>