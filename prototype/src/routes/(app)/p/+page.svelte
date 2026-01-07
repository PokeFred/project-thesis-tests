<script lang="ts">
    import type { PageProps } from "./$types"
    import PuzzleButton from "./PuzzleButton.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-primary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">RÄTSEL</span>
    </div>
    <div class="mt-2 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.stations as station}
            <div class="underline px-4">{station.title}</div>
            {#each station.puzzles as puzzle}
                <!-- TODO remove later -->
                {#if puzzle.type !== "placeholder-puzzle"}
                    <PuzzleButton puzzle={puzzle} />
                {:else}
                    <div class="w-full h-auto text-secondary bg-primary rounded-full grid grid-cols-[auto_60px] gap-4 px-6 py-2 opacity-50 cursor-default">
                        <span class="text-lg font-bold text-left">{puzzle.title}</span>
                        <span class="text-right">{puzzle.score.current}/{puzzle.score.max}</span>
                    </div>
                {/if}
            {/each}
        {/each}
    </div>
</div>
