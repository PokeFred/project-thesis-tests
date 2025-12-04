<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import { add } from "$stores"
    import GpsIntroduction from "$components/puzzle/gps/introduction.svelte"
    import GpsGame from "$components/puzzle/gps/game.svelte"
    import TextSelectIntroduction from "$components/puzzle/textSelect/introduction.svelte"
    import TextSelectGame from "$components/puzzle/textSelect/game.svelte"
    import DoubleSelectIntroduction from "$components/puzzle/doubleSelect/introduction.svelte"
    import DoubleSelectGame from "$components/puzzle/doubleSelect/game.svelte"
    import MultipleChoiceIntroduction from "$components/puzzle/multipleChoice/introduction.svelte"
    import Modal from "./ConfirmModal.svelte"
    import MultipleChoiceGame from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte";
    import PuzzleGame from "$components/Games/PuzzleGame/PuzzleGame.svelte";
    import MatchingGame from "$components/Games/MatchingGame_/MatchingGameComponent.svelte";

    let { data }: PageProps = $props()

    let gps: GpsGame
    let textSelect: TextSelectGame
    let matchingGame: MatchingGame
    let multipleChoice: MultipleChoiceGame
    let puzzleGame: PuzzleGame

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
            //rScore = textSelect.getSubmitScore()
            rdata = textSelect.getSubmitData()
        }
        if (data.puzzle.type === "double-select-puzzle") {
            rScore = matchingGame.getSubmitScore()
            rdata = matchingGame.getSubmitData()
        }
        if (data.puzzle.type === "multiple-choice-puzzle") {
            rScore = multipleChoice.getSubmitScore()
            rdata = multipleChoice.getSubmitData()
        }

        puzzleGame.getSubmitData()

        add({ identifier: data.puzzle.identifier, score: rScore, state: "DONE", data: rdata })
        goto(`/app/stations/${data.station.identifier}/${data.puzzle.identifier}/result`)
    }
</script>

<Modal bind:this={modal} onConfirm={submit} />

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">{data.station.title}</span>
        <button onclick={() => goto(`/app/stations/${data.station.identifier}`)} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faAngleLeft} class="w-6 h-6" />
        </button>
    </div>
    <div class="my-4 w-full h-auto text-primary bg-secondary rounded-full grid grid-cols-[auto_80px_16px] gap-4 px-6 py-2">
        <span class="text-lg font-bold text-left">{data.puzzle.title}</span>
        <div class="w-full h-7 flex justify-center items-center">
            <div class="w-full h-fit bg-primary border rounded-full p-0.5">
                <div class="w-full h-4 bg-secondary border rounded-full"></div>
            </div>
        </div>
        <span class="text-lg font-bold text-right">%</span>
    </div>
    {#if data.puzzle.type === "gps-puzzle"}
        <GpsIntroduction data={data.introduction} />
        <GpsGame bind:this={gps} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "text-select-puzzle"}
        <TextSelectIntroduction data={data.introduction} />
        <TextSelectGame bind:this={textSelect} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "double-select-puzzle"}
        <DoubleSelectIntroduction data={data.introduction} />
        <MatchingGame bind:this={matchingGame} gameInput={{
            leftHeader: "Handwerk",
            rightHeader: "Zünfte",
            pairs: data.game.data.pairs
            }} {setSubmitable}/>
    {/if}
    {#if data.puzzle.type === "multiple-choice-puzzle"}
        <MultipleChoiceIntroduction data={data.introduction} />
        <MultipleChoiceGame bind:this={multipleChoice} gameInput={data.game} setSubmitable={setSubmitable} />
    {/if}
    <!-- <PuzzleGame bind:this={puzzleGame} {setSubmitable} gameInput={{path: "/station_04/raetsel_00/game"}}/> -->
    <PuzzleGame bind:this={puzzleGame} {setSubmitable} gameInput={{path: "/station_01/raetsel_02/game"}}/>
    <div class="mt-3 mx-auto w-fit h-auto">
        <button onclick={(): void => modal.openModal()} class="w-full h-auto text-primary bg-secondary rounded-xl px-16 py-2 {submitable ? "cursor-pointer active:scale-95" : "opacity-50 cursor-default"}" disabled={!submitable}>Ergebnisse anzeigen</button>
    </div>
</div>
