<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import { add } from "$stores"
    import GpsGame from "$components/puzzle/gps/game.svelte"
    import SelectGame from "$components/puzzle/select/game.svelte"
    import DoubleSelectGame from "$components/puzzle/doubleSelect/game.svelte"
    import MultiSelectGame from "$components/puzzle/multiSelect/game.svelte"
    import Modal from "./ConfirmModal.svelte"
    import GpsIntroduction from "$components/puzzle/gps/introduction.svelte"
    import SelectIntroduction from "$components/puzzle/select/introduction.svelte"
    import DoubleSelectIntroduction from "$components/puzzle/doubleSelect/introduction.svelte"
    import MultiSelectIntroduction from "$components/puzzle/multiSelect/introduction.svelte"

    let { data }: PageProps = $props()

    let gps: GpsGame
    let select: SelectGame
    let doubleSelect: DoubleSelectGame
    let multiSelect: MultiSelectGame

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
        if (data.puzzle.type === "select-puzzle") {
            rdata = select.getSubmitData()
        }
        if (data.puzzle.type === "double-select-puzzle") {
            rdata = doubleSelect.getSubmitData()
        }
        if (data.puzzle.type === "multi-select-puzzle") {
            rdata = multiSelect.getSubmitData()
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
    <div class="mt-3 w-full h-auto text-primary bg-secondary rounded-full grid grid-cols-[auto_80px_16px] gap-4 px-6 py-2">
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
    {#if data.puzzle.type === "select-puzzle"}
        <SelectIntroduction data={data.introduction} />
        <SelectGame bind:this={select} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "double-select-puzzle"}
        <DoubleSelectIntroduction data={data.introduction} />
        <DoubleSelectGame bind:this={doubleSelect} data={{ informations: [], data: { left: [], right: [], pairs: [] } }} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "multi-select-puzzle"}
        <MultiSelectIntroduction data={data.introduction} />
        <MultiSelectGame bind:this={multiSelect} data={{}} setSubmitable={setSubmitable} />
    {/if}
    <div class="mt-3 mx-auto w-fit h-auto">
        <button onclick={(): void => modal.openModal()} class="w-full h-auto text-primary bg-secondary rounded-xl px-8 {submitable ? "cursor-pointer active:scale-95" : "opacity-50 cursor-default"}" disabled={!submitable}>Ergebnisse anzeigen</button>
    </div>
</div>
