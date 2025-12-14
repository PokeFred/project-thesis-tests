<script lang="ts">
    import type { Introduction } from "./index"

    let { data }: { data: Introduction } = $props()
</script>

<div class="w-full h-auto grid grid-cols-1 gap-2 mx-1 my-8">
    <div class="font-bold">{data.title}</div>
    {#each data.description as element}
        <div class="my-4">{element}</div>
    {/each}
</div>
