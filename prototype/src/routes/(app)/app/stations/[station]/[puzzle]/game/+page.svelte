<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import Game from "$stores/game"
    import GpsGame from "$components/puzzle/gps/game.svelte"

    let { data }: PageProps = $props()

    let submitable: boolean = $state<boolean>(false)
    function submit(): void {
        $Game.puzzles.push({ identifier: data.identifier, score: data.score, state: "DONE" })
        goto(`/app/stations/${data.station}/${data.identifier}/result`)
    }
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">{data.title}</span>
        <button onclick={() => goto(`/app/stations/${data.station}/${data.identifier}/introduction`)} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faAngleLeft} class="w-6 h-6" />
        </button>
    </div>
    <GpsGame submitable={(): void => { submitable = true }} />
    <div class="mx-auto w-fit h-auto">
        <button onclick={submit} class="w-full h-auto text-primary bg-secondary rounded-xl px-8 {submitable ? "cursor-pointer active:scale-95" : "cursor-default opacity-50"}" disabled={!submitable}>Ergebnisse anzeigen</button>
    </div>
</div>
