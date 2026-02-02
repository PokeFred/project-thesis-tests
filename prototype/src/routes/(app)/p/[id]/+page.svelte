<script lang="ts">
    import type { PageProps } from "./$types"
    import BackButton from "../../s/BackButton.svelte"
    import GpsIntroduction from "$components/puzzle/gps/introduction.svelte"
    import GpsGame from "$components/puzzle/gps/game.svelte"
    import TextSelectIntroduction from "$components/puzzle/textSelect/introduction.svelte"
    import TextSelectGame from "$components/puzzle/textSelect/game.svelte"
    import MatchingGameIntroduction from "$components/puzzle/matchingGame/introduction.svelte"
    import MatchingGameGame from "$components/puzzle/matchingGame/game.svelte"
    import MultipleChoiceIntroduction from "$components/puzzle/multipleChoice/introduction.svelte"
    import MultipleChoiceGame from "$components/puzzle/multipleChoice/game.svelte"
    import Modal from "./ConfirmModal.svelte"
    import { add } from "$stores"
    import { goto } from "$app/navigation"
    import DragDropIntroduction from "$components/puzzle/dragDrop/introduction.svelte"
    import DragDropGame from "$components/puzzle/dragDrop/game.svelte"
    import ScrollButton from "../../s/ScrollButton.svelte";
    import ErrorSpottingIntroduction from "$components/puzzle/errorSpotting/introduction.svelte"
    import ErrorSpottingGame from "$components/puzzle/errorSpotting/game.svelte"
    import WordGuessingIntroduction from "$components/puzzle/wordGuessing/introduction.svelte"
    import WordGuessingGame from "$components/puzzle/wordGuessing/game.svelte"
    import SingleChoiceIntroduction from "$components/puzzle/singleChoice/introduction.svelte"
    import SingleChoiceGame from "$components/puzzle/singleChoice/game.svelte"
    import Introduction from "$components/puzzle/introductionBuilder/introduction.svelte";

    let { data }: PageProps = $props()

    // svelte-ignore non_reactive_update
    let gps: GpsGame
    // svelte-ignore non_reactive_update
    let textSelect: TextSelectGame
    // svelte-ignore non_reactive_update
    let matchingGame: MatchingGameGame
    // svelte-ignore non_reactive_update
    let singleChoice: SingleChoiceGame
    // svelte-ignore non_reactive_update
    let multipleChoice: MultipleChoiceGame
    // svelte-ignore non_reactive_update
    let dragDrop: DragDropGame
    // svelte-ignore non_reactive_update
    let errorSpotting: ErrorSpottingGame
    // svelte-ignore non_reactive_update
    let wordGuessing: WordGuessingGame

    let skipIntroduction: (() => void) | undefined = $state(undefined);
    let submitable: boolean = $state<boolean>(false)
    function setSubmitable(): void {
        submitable = true
    }



    let modal: Modal
    function submit(): void {
        let rScore: number = 0
        let rdata: any = {}

        if (data.puzzle.type === "gps-puzzle") {
            rScore = gps.getSubmitScore()
            rdata = gps.getSubmitData()
        }
        if (data.puzzle.type === "text-select-puzzle") {
            rScore = textSelect.getSubmitScore()
            rdata = textSelect.getSubmitData()
        }
        if (data.puzzle.type === "matching-game-puzzle") {
            rScore = matchingGame.getSubmitScore()
            rdata = matchingGame.getSubmitData()
        }
        if (data.puzzle.type === "single-choice-puzzle") {
            rScore = singleChoice.getSubmitScore()
            rdata = singleChoice.getSubmitData()
        }
        if (data.puzzle.type === "multiple-choice-puzzle") {
            rScore = multipleChoice.getSubmitScore()
            rdata = multipleChoice.getSubmitData()
        }
        if (data.puzzle.type === "drag-drop-puzzle") {
            rScore = dragDrop.getSubmitScore()
            rdata = dragDrop.getSubmitData()
        }
        if (data.puzzle.type === "error-spotting-puzzle") {
            rScore = errorSpotting.getSubmitScore()
            rdata = errorSpotting.getSubmitData()
        }
        if (data.puzzle.type === "word-guessing-puzzle") {
            rScore = wordGuessing.getSubmitScore()
            rdata = wordGuessing.getSubmitData()
        }

        add({ id: data.puzzle.id, score: rScore, data: rdata })
        if (data.puzzle.type !== "gps-puzzle") {
            goto(`/p/${data.puzzle.id}/result`)
        } else {
            goto(`/s/${data.station.id}`)
        }
    }
</script>

<Modal bind:this={modal} onConfirm={submit} />

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center my-1 pl-6 pr-4">
        <span class="font-medium text-[16px] uppercase tracking-[1.28px]">{data.station.title}</span>
        <BackButton url={`/s/${data.station.id}`} />
    </div>
    <div class="-mx-4 bg-secondary">
        <div class="mx-4">
            <div class="mt-5.5 mb-15 w-full h-auto text-primary bg-secondary grid grid-cols-[auto_52px] items-center gap-4 px-6 py-2">
                <span class="font-medium text-[20px] text-left">{data.puzzle.title}</span>
                <span class="font-medium text-[16px] text-right"><span>{data.puzzle.score.current}/{data.puzzle.score.max}</span></span>
            </div>
        </div>
    </div>
    {#if data.puzzle.type === "gps-puzzle"}
        <GpsIntroduction data={data.introduction} />
        <GpsGame bind:this={gps} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "text-select-puzzle"}
        <TextSelectIntroduction data={data.introduction} />
        <TextSelectGame bind:this={textSelect} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "matching-game-puzzle"}
        <MatchingGameIntroduction data={data.introduction} />
        <MatchingGameGame bind:this={matchingGame} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "single-choice-puzzle"}
        <!-- <SingleChoiceIntroduction data={data.introduction} /> -->
        <Introduction data={[
            {
                tag: "title",
                text: `In welchem Jahr wurde die erste Rolltreppe im Kaufhaus Karstadt, ehemals Warenhaus Althoff, eröffnet?`
            },
            {
                tag: "img",
                src: "/station_03/raetsel_02/image_00.jpg",
                alt: "Eröffnung der ersten Rolltreppe im Kaufhaus Karstadt, ehemals Warenhaus Althoff (Stadtarchiv Dortmund).",
                caption: {
                    caption: "Eröffnung der ersten Rolltreppe im Kaufhaus Karstadt, ehemals Warenhaus Althoff",
                    src: "Stadtarchiv Dortmund"
                }
            },
            {
                tag: "p",
                text: "testetssetstsetstsetsetsetse asdflökj saslökdfj löaksdjf löaksdjf lökasjdf lökajsdflöask jdflökjasdlöfj "
            }
        ]}/>
        <SingleChoiceGame bind:this={singleChoice} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "multiple-choice-puzzle"}
        <MultipleChoiceIntroduction data={data.introduction} />
        <MultipleChoiceGame bind:this={multipleChoice} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "drag-drop-puzzle"}
        <DragDropIntroduction data={data.introduction} />
        <DragDropGame bind:this={dragDrop} data={data.game} setSubmitable={setSubmitable} bind:skipIntroduction={skipIntroduction} />
    {/if}
    {#if data.puzzle.type === "error-spotting-puzzle"}
        <ErrorSpottingIntroduction data={data.introduction} />
        <ErrorSpottingGame bind:this={errorSpotting} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "word-guessing-puzzle"}
        <WordGuessingIntroduction data={data.introduction} />
        <WordGuessingGame bind:this={wordGuessing} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if submitable}
        <div class="mt-7.5 mx-auto w-full h-auto">
            {#if skipIntroduction}
                <button onclick={() => { skipIntroduction?.(); skipIntroduction = undefined }} class="w-full h-auto pl-6 text-left text-[20px] font-medium text-primary bg-secondary rounded-full py-2 cursor-pointer active:scale-95">Weiter</button>
            {:else}
                <button onclick={(): void => modal.openModal()} class="w-full h-auto pl-6 text-left text-[20px] font-medium text-primary bg-secondary rounded-full py-2 cursor-pointer active:scale-95">{(data.puzzle.type !== "gps-puzzle") ? "Ergebnis anzeigen" : "Gehe zu den Rätseln"}</button>
            {/if}
        </div>
    {/if}
    <ScrollButton />
</div>
