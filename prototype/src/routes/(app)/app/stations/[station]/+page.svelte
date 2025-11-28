<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import Accordion from "$components/accordions/Accordion.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">{data.stitle}</span>
        <button onclick={() => goto("/app/stations")} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faAngleLeft} class="w-6 h-6" />
        </button>
    </div>
    <div class="mt-3 w-full h-6 grid grid-cols-[65px_auto_40px] gap-2 px-4">
        <div class="my-auto text-sm text-left"><span>Geschafft:</span></div>
        <div class="my-auto w-full h-fit bg-secondary rounded-xl p-1">
            <div class="h-4 bg-primary rounded-xl" style="width: {data.score.completion}%"></div>
        </div>
        <div class="my-auto text-sm text-right">{data.score.current}%</div>
    </div>
    <div class="mt-2 mb-8 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.puzzles as puzzle}
            <button onclick={() => goto(`/app/stations/${data.identifier}/${puzzle.identifier}/game`)} class="w-full h-auto text-primary bg-secondary rounded-full grid grid-cols-[auto_60px] gap-4 px-6 py-2 {puzzle.unlocked ? "cursor-pointer active:scale-95" : "opacity-50 cursor-default"}" disabled={!puzzle.unlocked}>
                <span class="text-lg font-bold text-left">{puzzle.name}</span>
                <span class="text-right">{puzzle.score.current}/{puzzle.score.max}</span>
            </button>
        {/each}
    </div>
    <Accordion title={data.title} data={data.chapters} />
</div>
