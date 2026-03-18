<script lang="ts">
    import type { PageProps } from "./$types"
    import Accordion from "./ChapterAccordion.svelte"
    import type { Chapter } from "./ChapterAccordion"
    import BackButton from "$components/BackButton.svelte"
    import { sendTo } from "$utils/url"

    let { data }: PageProps = $props()

    async function redirectToPuzzle(puzzle: any): Promise<void> {
        if (!puzzle.done) return sendTo(`/p/${puzzle.id}`)
        if (puzzle.type !== "gps-puzzle") return sendTo(`/p/${puzzle.id}/result`)
    }
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center pl-6 pr-4">
        <span class="text-lg font-semibold uppercase">{data.stitle}</span>
        <BackButton path={"/s"} />
    </div>
    <div class="mt-4 mb-8 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.puzzles as puzzle}
            <button onclick={(): Promise<void> => redirectToPuzzle(puzzle)} class="w-full h-auto text-primary bg-secondary rounded-full grid grid-cols-[auto_60px] gap-4 px-6 py-2 {puzzle.locked ? "opacity-50 cursor-default" : "cursor-pointer active:scale-95"}" disabled={puzzle.locked}>
                <span class="text-lg font-bold text-left">{puzzle.title}</span>
                <span class="text-right">{puzzle.score.current}/{puzzle.score.max}</span>
            </button>
        {/each}
    </div>
    <Accordion title={data.title} chapters={data.chapters} />
</div>
