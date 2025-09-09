<script lang="ts">
    import { score } from "$lib/Components/Score.svelte";
</script>

<p>
    Super, Du hast alle Lücken ausgefüllt! Jetzt kannst Du Dir vielleicht
    vorstellen, wie das Warenhaus Althoff früher ausgesehen hat und wie
    beeindruckend es auf die Menschen der damaligen Zeit gewirkt haben muss.
</p>

<p>
    Die Bilder zeigen das sich über zwei Etagen erstreckende, prachtvoll
    ausgestattete Teppichlager – dort wurden übrigens regelmäßig Märchen für
    Kinder aufgeführt –, den beeindruckenden Erfrischungsraum sowie das Gebäude
    von außen. Hast Du Dir die Räume so oder so ähnlich vorgestellt? Das
    Warenhaus Althoff wurde zur Erlebniswelt, die für alle etwas zu bieten
    hatte!
</p>

<p>
    <!-- Ändern, dass nur Punkte angezeigt werden, wenn man das Rätsel neu gelöst hat. -->
    Verdiente Punkte: {score.getLastGained()} 
</p>

<a href=".." data-sveltekit-preload-data data-sveltekit-preload-code>Zurück zur Rätselübersicht</a>