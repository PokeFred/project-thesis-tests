<script lang="ts">
    import type { Introduction } from "./index"

    let { data }: { data: Introduction } = $props()
</script>

<div class="w-full h-auto grid grid-cols-1 gap-4 mx-1 my-7">
    {#each data.text as element}
        <div class="mx-2 my-7 font-bold">{element}</div>
    {/each}
</div>
