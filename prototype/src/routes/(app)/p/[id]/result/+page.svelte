<script lang="ts">
    import type { PageProps } from "./$types"
    import BackButton from "../../../s/BackButton.svelte"
    import ScrollButton from "../../../s/ScrollButton.svelte"
    import GpsIntroduction from "$components/puzzle/gps/introduction.svelte"
    import GpsResult from "$components/puzzle/gps/result.svelte"
    import MultipleChoiceIntroduction from "$components/puzzle/multipleChoice/introduction.svelte"
    import MultipleChoiceResult from "$components/puzzle/multipleChoice/result.svelte"
    import MatchingGameIntroduction from "$components/puzzle/matchingGame/introduction.svelte"
    import MatchingGameResult from "$components/puzzle/matchingGame/result.svelte"
    import DragDropIntroduction from "$components/puzzle/dragDrop/introduction.svelte"
    import DragDropResult from "$components/puzzle/dragDrop/result.svelte"
    import { goto } from "$app/navigation";

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center my-1 px-6">
        <span class="text-[16px] font-medium uppercase tracking-[1.28px]">{data.station.title}</span>
        <BackButton url={`/s/${data.station.id}`} />
    </div>
    <div class="mt-5.5 mb-15 w-full h-auto text-primary bg-secondary rounded-full grid grid-cols-[auto_52px] items-center gap-4 px-6 py-2">
        <span class="font-medium text-[20px] text-left">{data.puzzle.title}</span>
        <span class="font-medium text-[16px] text-right"><span>{data.puzzle.score.current}/{data.puzzle.score.max}</span></span>
    </div>
    {#if data.puzzle.type === "gps-puzzle"}
        <GpsIntroduction data={data.introduction} />
        <GpsResult data={data.result} />
    {/if}
    {#if data.puzzle.type === "matching-game-puzzle"}
        <MatchingGameIntroduction data={data.introduction} />
        <MatchingGameResult data={data.result} />
    {/if}
    {#if data.puzzle.type === "multiple-choice-puzzle"}
        <MultipleChoiceIntroduction data={data.introduction} />
        <MultipleChoiceResult result={data.result} saving={data.saving} />
    {/if}
    {#if data.puzzle.type === "drag-drop-puzzle"}
        <DragDropIntroduction data={data.introduction} />
        <DragDropResult result={data.result} saving={data.saving} />
    {/if}
    <button onclick={()=>goto(`/s/${data.station.id}`)} class="w-full h-11.5 mt-7.5 pl-7 bg-secondary text-left text-[20px] font-medium text-primary rounded-full">Zurück zur Übersicht</button>
    <ScrollButton />
</div>
