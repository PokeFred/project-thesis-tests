<script lang="ts">
    import type { IntroductionData } from "."

    let { data }: { data: IntroductionData } = $props()
</script>

<div class="w-full h-auto px-2 mb-10">
    {#each data.text as element}
        <p class="mb-5 font-bold text-[20px] leading-6">{element}</p>
    {/each}
</div>
