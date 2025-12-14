<script lang="ts">
    import type { PageProps } from "./$types"
    import BackButton from "../../s/BackButton.svelte"
    import GpsIntroduction from "$components/puzzle/gps/introduction.svelte"
    import GpsGame from "$components/puzzle/gps/game.svelte"
    import Modal from "./ConfirmModal.svelte"
    import { add } from "$stores"
    import { goto } from "$app/navigation"

    let { data }: PageProps = $props()

    let gps: GpsGame

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

        add({ id: data.puzzle.id, score: rScore, data: rdata })
        goto(`/p/${data.station.id}/result`)
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
    <div class="mt-3 mx-auto w-fit h-auto">
        <button onclick={(): void => modal.openModal()} class="w-full h-auto text-primary bg-secondary rounded-xl px-16 py-2 {submitable ? "cursor-pointer active:scale-95" : "opacity-50 cursor-default"}" disabled={!submitable}>Ergebnisse anzeigen</button>
    </div>
</div>
