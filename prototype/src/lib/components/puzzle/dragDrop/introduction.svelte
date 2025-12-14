<script lang="ts">
    import type { Introduction } from "./index"

    let { data }: { data: Introduction } = $props()
</script>

<div class="w-full h-auto grid grid-cols-1 gap-2 px-2 py-4">
    <div class="font-bold">{data.title}</div>
    {#each data.description as element}
        <div>{element}</div>
    {/each}
</div>
