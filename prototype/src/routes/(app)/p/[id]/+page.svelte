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

    let { data }: PageProps = $props()

    // svelte-ignore non_reactive_update
    let gps: GpsGame
    // svelte-ignore non_reactive_update
    let textSelect: TextSelectGame
    // svelte-ignore non_reactive_update
    let matchingGame: MatchingGameGame
    // svelte-ignore non_reactive_update
    let multipleChoice: MultipleChoiceGame
    // svelte-ignore non_reactive_update
    let dragDrop: DragDropGame

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
        if (data.puzzle.type === "multiple-choice-puzzle") {
            rScore = multipleChoice.getSubmitScore()
            rdata = multipleChoice.getSubmitData()
        }
        if (data.puzzle.type === "drag-drop-puzzle") {
            rScore = dragDrop.getSubmitScore()
            rdata = dragDrop.getSubmitData()
        }

        add({ id: data.puzzle.id, score: rScore, data: rdata })
        goto(`/p/${data.puzzle.id}/result`)
    }
</script>

<Modal bind:this={modal} onConfirm={submit} />

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
    {#if data.puzzle.type === "multiple-choice-puzzle"}
        <MultipleChoiceIntroduction data={data.introduction} />
        <MultipleChoiceGame bind:this={multipleChoice} gameInput={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "drag-drop-puzzle"}
        <DragDropIntroduction data={data.introduction} />
        <DragDropGame bind:this={dragDrop} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    <div class="mt-8 mx-auto w-full h-auto">
        <button onclick={(): void => modal.openModal()} class="w-full h-auto pl-6 text-left font-medium text-primary bg-secondary rounded-full py-2 {submitable ? "cursor-pointer active:scale-95" : "opacity-50 cursor-default"}" disabled={!submitable}>Ergebnis anzeigen</button>
    </div>
    <ScrollButton />
</div>