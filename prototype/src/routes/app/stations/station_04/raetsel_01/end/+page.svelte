<script lang="ts">
    import { gameState } from "$lib/State.svelte"
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

<p class="my-4 w-full h-auto text-sm">
    Verdiente Punkte: {gameState.stationStates[3].quizStates[2].getScore()} 
</p>

<a href=".." data-sveltekit-preload-data data-sveltekit-preload-code class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Zurück zur Rätselübersicht</a>