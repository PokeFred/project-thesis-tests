<script lang="ts">
    import type { Introduction } from "./index"

    let { data }: { data: Introduction } = $props()
</script>

<div class="w-full h-auto px-2 my-15">
    {#each data.text as element}
        <div class="font-bold text-[20px] leading-6">{element}</div>
    {/each}
</div>
