<script lang="ts">
    import type { PageProps } from "./$types"
    import StationButton from "./StationButton.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">STATIONEN</span>
    </div>
    <!-- TODO component ? (start) -->
    <div class="mt-3 w-full h-6 grid grid-cols-[65px_auto_40px] gap-2 px-4">
        <div class="my-auto text-sm text-left"><span>Geschafft:</span></div>
        <div class="my-auto w-full h-fit bg-secondary rounded-xl p-1">
            <div class="h-4 bg-primary rounded-xl" style="width: {data.score.completion}%"></div>
        </div>
        <div class="my-auto text-sm text-right">{data.score.completion}%</div>
    </div>
    <!-- TODO component ? (end) -->
    <div class="mt-2 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.stations as station}
            <StationButton station={station} />
        {/each}
    </div>
</div>
