<script lang="ts">
    import type { PageProps } from "./$types"
    import PuzzleButton from "./PuzzleButton.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">RÄTSEL</span>
    </div>
    <div class="mt-2 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.stations as station}
            <div class="underline px-4">{station.title}</div>
            {#each station.puzzles as puzzle}
                <PuzzleButton puzzle={puzzle} />
            {/each}
        {/each}
    </div>
</div>
