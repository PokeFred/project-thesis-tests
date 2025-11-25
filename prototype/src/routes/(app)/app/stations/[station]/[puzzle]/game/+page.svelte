<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import Game from "$stores"
    import GpsGame from "$components/puzzle/gps/game.svelte"
    import DoubleGame from "$components/puzzle/doubleSelect/game.svelte"
    import Modal from "./ConfirmModal.svelte"

    let { data }: PageProps = $props()

    let gps: GpsGame

    let submitable: boolean = $state<boolean>(false)
    function setSubmitable(): void {
        submitable = true
    }

    let modal: Modal
    function submit(): void {
        let rdata: any
        if (data.type === "gps-puzzle") {
            rdata = gps.getSubmitData()
        }

        $Game.puzzles.push({ identifier: data.identifier, score: data.score, state: "DONE", data: rdata })
        goto(`/app/stations/${data.station}/${data.identifier}/result`)
    }
</script>

<Modal bind:this={modal} onConfirm={submit} />

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">{data.title}</span>
        <button onclick={() => goto(`/app/stations/${data.station}/${data.identifier}/introduction`)} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faAngleLeft} class="w-6 h-6" />
        </button>
    </div>
    {#if data.type === "gps-puzzle"}
        <GpsGame bind:this={gps} data={{}} setSubmitable={setSubmitable} />
    {/if}
    {#if data.type === "double-select-puzzle"}
        <!--
        <DoubleGame data={{
            informations: ["Ordne den Zünften das richtige Handwerk zu. Aber Achtung: es gibt nur sieben richtige Paare! Es wurden drei Zünfte dazu gemischt. Schaffst Du es, die richtigen Paare zu finden?", "Zünfte: Schmied, Fleischer, Bäcker, Bader, Tuchmacher, Gerber, Schuhmacher, Krämer, Fettkrämer, Abdecker", "Handwerk: Metallverarbeitung, Getreideverarbeitung, Fleischverarbeitung, Lederverarbeitung, Feinlederverarbeitung, Gemischtwarenhandel, Handel mit Butter, Öl, Speck etc."],
            data: {
                left: [],
                right: [],
                pairs: []
            }
        }} />
        -->
    {/if}
    <div class="mt-3 mx-auto w-fit h-auto">
        <button onclick={(): void => modal.openModal()} class="w-full h-auto text-primary bg-secondary rounded-xl px-8 {submitable ? "cursor-pointer active:scale-95" : "opacity-50 cursor-default"}" disabled={!submitable}>Ergebnisse anzeigen</button>
    </div>
</div>
