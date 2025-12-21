<script lang="ts">
    import type { PageProps } from "./$types"
    import BackButton from "../BackButton.svelte"
    import { goto } from "$app/navigation"
    import PuzzleButton from "./PuzzleButton.svelte"
    import Accordion from "$components/accordions/Accordion.svelte"
    import type { AccordionData } from "$components/accordions/Accordion"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center pl-6 pr-4">
        <span class="text-lg font-semibold">{data.stitle}</span>
        <BackButton url={"/s"} />
    </div>
    <div class="mt-3 w-full h-6 grid grid-cols-[65px_auto_40px] gap-2 px-4">
        <div class="my-auto text-sm text-left"><span>Geschafft:</span></div>
        <div class="my-auto w-full h-fit bg-secondary rounded-xl p-1">
            <div class="h-4 bg-primary rounded-xl" style="width: {data.score.completion}%"></div>
        </div>
        <div class="my-auto text-sm text-right">{data.score.completion}%</div>
    </div>
    <div class="mt-2 mb-8 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.puzzles as puzzle}
            <PuzzleButton puzzle={puzzle} />
        {/each}
    </div>
    <Accordion title={data.title} data={data.chapters as AccordionData} />
</div>
