<script lang="ts">
    import type { Game } from "./index"
    let { data }: { data: Game } = $props()
</script>

{#each data.informations as element}
    <div class="p-2">{element}</div>
{/each}
