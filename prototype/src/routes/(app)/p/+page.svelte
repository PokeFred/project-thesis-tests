<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"

    let { data }: PageProps = $props()

    async function redirectToPuzzle(puzzle: any): Promise<void> {
        if (!puzzle.done) return goto(`/p/${puzzle.id}`)
        if (puzzle.type !== "gps-puzzle") return goto(`/p/${puzzle.id}/result`)
    }
</script>

<div class="w-full h-auto text-primary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">RÄTSEL</span>
    </div>
    <div class="mt-2 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.stations as station}
            <div class="underline px-4">{station.title}</div>
            {#each station.puzzles as puzzle}
                {#if puzzle.type !== "placeholder-puzzle"}
                    <button onclick={(): Promise<void> => redirectToPuzzle(puzzle)} class="w-full h-auto text-secondary bg-primary rounded-full grid grid-cols-[auto_60px] gap-4 px-6 py-2 {puzzle.locked ? "opacity-50 cursor-default" : "cursor-pointer active:scale-95"}" disabled={puzzle.locked}>
                        <span class="text-lg font-bold text-left">{puzzle.title} {`(${puzzle.type})`.replace("-puzzle", "")}</span>
                        <span class="text-right">{puzzle.score.current}/{puzzle.score.max}</span>
                    </button>
                {:else}
                    <div class="w-full h-auto text-secondary bg-primary rounded-full grid grid-cols-[auto_60px] gap-4 px-6 py-2 opacity-50 cursor-default">
                        <span class="text-lg font-bold text-left">{puzzle.title}</span>
                    </div>
                {/if}
            {/each}
        {/each}
    </div>
</div>
