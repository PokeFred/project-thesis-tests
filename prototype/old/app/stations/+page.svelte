<script lang="ts">
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
    import { faClock } from "@fortawesome/free-solid-svg-icons/faClock"
    import { faKey } from "@fortawesome/free-solid-svg-icons/faKey"

    type State = "LOCKED" | "OPEN" | "FINISHED"
    type Station = { state: State, tag: string, text: string }
    let stations: Station[] = [
        { state: "FINISHED", tag: "station_01", text: "Station 01" },
        { state: "FINISHED", tag: "station_02", text: "Station 02" },
        { state: "FINISHED", tag: "station_03", text: "Station 03" },
        { state: "OPEN", tag: "station_04", text: "Station 04" },
        { state: "LOCKED", tag: "station_05", text: "Station 05" }
    ]
</script>

<div class="w-full h-auto text-lg underline text-center">Stationen</div>
<div class="mt-3 w-full h-auto flex justify-center items-center">
    <div class="mr-3 text-sm shrink-0">Geschafft:</div>
    <div class="w-full h-4 bg-gray-500/25 rounded-xl">
        <div class="w-[50%] h-4 bg-gray-500/60 rounded-xl"></div>
    </div>
</div>
<div class="mt-3 w-full h-auto grid grid-cols-1 gap-2">
    {#each stations as station}
            {#if station.state === "FINISHED"}
                <div class="w-full h-auto bg-green-500/15 border-2 border-green-500 rounded-xl grid grid-cols-[24px_auto] gap-4 cursor-default p-4">
                    <Icon data={faCheck} class="w-6 h-6" />
                    <div class="text-left">{station.text}</div>
                </div>
            {:else if station.state === "OPEN"}
                <button onclick={(): Promise<void> => goto(`./stations/${station.tag}`)} class="w-full h-auto border border-black rounded-xl grid grid-cols-[24px_auto] gap-4 cursor-pointer p-4">
                    <Icon data={faClock} class="w-6 h-6" />
                    <div class="text-left">{station.text}</div>
                </button>
            {:else}
                <div class="w-full h-auto border border-black rounded-xl grid grid-cols-[24px_auto] gap-4 cursor-default opacity-50 p-4">
                    <Icon data={faKey} class="w-6 h-6" />
                    <div class="text-left">{station.text}</div>
                </div>
            {/if}
    {/each}
</div>
