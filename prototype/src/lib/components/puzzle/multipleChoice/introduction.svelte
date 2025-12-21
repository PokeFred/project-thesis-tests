<script lang="ts">
    import type { Introduction } from "./index"

    let { data }: { data: Introduction } = $props()
</script>

<div class="w-full h-auto px-1 mb-15 font-bold text-[20px] leading-6">
    {#each data.text as element}
        <div>{element}</div>
    {/each}
</div>