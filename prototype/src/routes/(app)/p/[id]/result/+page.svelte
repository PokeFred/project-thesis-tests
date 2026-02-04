<script lang="ts">
    import type { PageProps } from "./$types"
    import BackButton from "$components/BackButton.svelte"
    import ScrollButton from "$components/ScrollButton.svelte"
    import GpsIntroduction from "$components/puzzle/gps/introduction.svelte"
    import GpsResult from "$components/puzzle/gps/result.svelte"
    import MultipleChoiceIntroduction from "$components/puzzle/multipleChoice/introduction.svelte"
    import MultipleChoiceResult from "$components/puzzle/multipleChoice/result.svelte"
    import MatchingGameIntroduction from "$components/puzzle/matchingGame/introduction.svelte"
    import MatchingGameResult from "$components/puzzle/matchingGame/result.svelte"
    import DragDropIntroduction from "$components/puzzle/dragDrop/introduction.svelte"
    import DragDropResult from "$components/puzzle/dragDrop/result.svelte"
    import { goto } from "$app/navigation";
    import ErrorSpottingIntroduction from "$components/puzzle/errorSpotting/introduction.svelte"
    import ErrorSpottingResult from "$components/puzzle/errorSpotting/result.svelte"
    import WordGuessingIntroduction from "$components/puzzle/wordGuessing/introduction.svelte"
    import WordGuessingResult from "$components/puzzle/wordGuessing/result.svelte"
    import SingleChoiceIntroduction from "$components/puzzle/singleChoice/introduction.svelte"
    import SingleChoiceResult from "$components/puzzle/singleChoice/result.svelte"
    import Introduction from "$components/puzzle/introductionBuilder/introduction.svelte";
    import TextSelectIntroduction from "$components/puzzle/textSelect/introduction.svelte"
    import TextSelectResult from "$components/puzzle/textSelect/result.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center my-1 pl-6 pr-4">
        <span class="text-[16px] font-medium uppercase tracking-[1.28px]">{data.station.title}</span>
        <BackButton path={`/s/${data.station.id}`} />
    </div>
    <div class="-mx-4 bg-secondary">
        <div class="mx-4">
            <div class="mt-5.5 mb-15 w-full h-auto text-primary bg-secondary rounded-full grid grid-cols-[auto_52px] items-center gap-4 px-6 py-2">
                <span class="font-medium text-[20px] text-left">{data.puzzle.title}</span>
                <span class="font-medium text-[16px] text-right"><span>{data.puzzle.score.current}/{data.puzzle.score.max}</span></span>
            </div>
        </div>
    </div>
    {#if data.puzzle.type === "gps-puzzle"}
        <GpsIntroduction data={data.introduction} />
        <GpsResult data={data.result} />
    {/if}
    {#if data.puzzle.type === "text-select-puzzle"}
        <TextSelectIntroduction data={data.introduction} />
        <TextSelectResult result={data.result} saving={data.saving} />
    {/if}
    {#if data.puzzle.type === "matching-game-puzzle"}
        <MatchingGameIntroduction data={data.introduction} />
        <MatchingGameResult result={data.result} saving={data.saving} />
    {/if}
    {#if data.puzzle.type === "single-choice-puzzle"}
        <Introduction data={data.introduction.data} />
        <SingleChoiceResult result={data.result} saving={data.saving} />
    {/if}
    {#if data.puzzle.type === "multiple-choice-puzzle"}
        <MultipleChoiceIntroduction data={data.introduction} />
        <MultipleChoiceResult result={data.result} saving={data.saving} />
    {/if}
    {#if data.puzzle.type === "drag-drop-puzzle"}
        <DragDropIntroduction data={data.introduction} />
        <DragDropResult result={data.result} saving={data.saving} />
    {/if}
    {#if data.puzzle.type === "error-spotting-puzzle"}
        <Introduction data={data.introduction.data} />
        <ErrorSpottingResult result={data.result} saving={data.saving} />
    {/if}
    {#if data.puzzle.type === "word-guessing-puzzle"}
        <Introduction data={data.introduction.data} />
        <WordGuessingResult result={data.result} saving={data.saving} />
    {/if}
    <button onclick={()=>goto(`/s/${data.station.id}`)} class="w-full h-11.5 mt-7.5 pl-7 bg-secondary text-left text-[20px] font-medium text-primary rounded-full cursor-pointer">Zurück zur Übersicht</button>
    <ScrollButton />
</div>
