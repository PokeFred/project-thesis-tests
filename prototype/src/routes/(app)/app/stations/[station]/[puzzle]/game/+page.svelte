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
    import MultipleChoiceGame from "$components/puzzle/multipleChoice/game.svelte"
    import Modal from "./ConfirmModal.svelte"

    let { data }: PageProps = $props()

    let gps: GpsGame
    let textSelect: TextSelectGame
    let doubleSelect: DoubleSelectGame
    let multipleChoice: MultipleChoiceGame

    let submitable: boolean = $state<boolean>(false)
    function setSubmitable(): void {
        submitable = true
    }

    let modal: Modal
    function submit(): void {
        let rdata: any
        if (data.puzzle.type === "gps-puzzle") {
            rdata = gps.getSubmitData()
        }
        if (data.puzzle.type === "text-select-puzzle") {
            rdata = textSelect.getSubmitData()
        }
        if (data.puzzle.type === "double-select-puzzle") {
            rdata = doubleSelect.getSubmitData()
        }
        if (data.puzzle.type === "multiple-choice-puzzle") {
            rdata = multipleChoice.getSubmitData()
        }

        //add({ identifier: data.introduction.identifier, score: data.introduction.score, state: "DONE", data: rdata })
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
            <div class="w-full h-fit bg-primary border rounded-full p-[1px]">
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
        <DoubleSelectGame bind:this={doubleSelect} data={{ informations: [], data: { left: [], right: [], pairs: [] } }} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "multiple-choice-puzzle"}
        <MultipleChoiceIntroduction data={data.introduction} />
        <MultipleChoiceGame bind:this={multipleChoice} data={{}} setSubmitable={setSubmitable} />
    {/if}
    <div class="mt-3 mx-auto w-fit h-auto">
        <button onclick={(): void => modal.openModal()} class="w-full h-auto text-primary bg-secondary rounded-xl px-8 {submitable ? "cursor-pointer active:scale-95" : "opacity-50 cursor-default"}" disabled={!submitable}>Ergebnisse anzeigen</button>
    </div>
</div>
