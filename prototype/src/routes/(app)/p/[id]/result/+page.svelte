<script lang="ts">
    import type { PageProps } from "./$types"
    import BackButton from "../../../s/BackButton.svelte"
    import ScrollButton from "../../../s/ScrollButton.svelte"
    import GpsIntroduction from "$components/puzzle/gps/introduction.svelte"
    import GpsResult from "$components/puzzle/gps/result.svelte"
    import MultipleChoiceIntroduction from "$components/puzzle/multipleChoice/introduction.svelte"
    import MultipleChoiceResult from "$components/puzzle/multipleChoice/result.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">{data.station.title}</span>
        <BackButton url={`/s/${data.station.id}`} />
    </div>
    <div class="my-4 w-full h-auto text-primary bg-secondary rounded-full grid grid-cols-[auto_52px] gap-4 px-6 py-2">
        <span class="text-lg font-bold text-left">{data.puzzle.title}</span>
        <span class="text-lg font-bold text-right"><span>{data.puzzle.score.current}/{data.puzzle.score.max}</span></span>
    </div>
    {#if data.puzzle.type === "gps-puzzle"}
        <GpsIntroduction data={data.introduction} />
        <GpsResult data={data.result} />
    {/if}
    {#if data.puzzle.type === "multiple-choice-puzzle"}
        <MultipleChoiceIntroduction data={data.introduction} />
        <MultipleChoiceResult data={data.result} />
    {/if}
    <ScrollButton />
</div>
