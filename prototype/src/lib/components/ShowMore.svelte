<script lang="ts">
    import type { Snippet } from "svelte";

    const { base, extension } : {base: Snippet, extension: Snippet} = $props();
    let shown: boolean = $state(false);

    function onclick(): void {
        shown = !shown;
    }

</script>

<div>
    {@render base?.()}
    {#if shown}
        {@render extension?.()}
    {/if}
    <button {onclick}>{shown ? "Weniger Anzeigen" : "Mehr Anzeigen"}</button>
</div>

<!-- Beispiel: -->

<!-- 
<ShowMore>
    {#snippet base()}
        <p>Basistext</p>
    {/snippet}
    {#snippet extension()}
        <p>Zusatztext</p>
    {/snippet}
</ShowMore> 
-->
