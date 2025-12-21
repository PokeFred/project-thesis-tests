<script lang="ts">
    import type { Introduction } from "./index"

    let { data }: { data: Introduction } = $props()
</script>

<div class="w-full h-auto px-2 pb-10 leading-6">
    <div class="mb-7 font-bold text-[20px]">{data.title}</div>
    {#each data.description as element}
        <div class="mb-7 font-medium text-[18px]">{element}</div>
    {/each}
</div>
