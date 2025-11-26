<script lang="ts">
    import type { Introduction } from "./index"

    let { data }: { data: Introduction } = $props()
</script>

<div class="w-full h-auto grid grid-cols-1 gap-4 px-2 py-4">
    {#each data.text as element}
        <div class="mx-2 my-4 font-bold">{element}</div>
    {/each}
</div>
