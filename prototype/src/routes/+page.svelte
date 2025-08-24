<script lang="ts">
    import Icon from "svelte-awesome"
    import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
    import { faClock } from "@fortawesome/free-solid-svg-icons/faClock"
    import { faKey } from "@fortawesome/free-solid-svg-icons/faKey"

    type State = "LOCKED" | "OPEN" | "FINISHED"
    type Station = { state: State, text: string }
    let stations: Station[] = [
        { state: "FINISHED", text: "Station 01" },
        { state: "FINISHED", text: "Station 02" },
        { state: "OPEN", text: "Station 03" },
        { state: "LOCKED", text: "Station 04" },
        { state: "LOCKED", text: "Station 05" }
    ]
</script>

<div class="w-full h-auto text-lg text-center">Stationen</div>
<div class="mt-3 w-full h-auto flex justify-center items-center">
    <div class="mr-3 text-sm shrink-0">Geschafft:</div>
    <div class="w-full h-4 bg-gray-500/25 rounded-xl">
        <div class="w-[50%] h-4 bg-gray-500/60 rounded-xl"></div>
    </div>
</div>
<div class="mt-3 w-full h-auto grid grid-cols-1 gap-2">
    {#each stations as station}
            {#if station.state === "FINISHED"}
                <button class="w-full h-auto bg-green-500/15 border-2 border-green-500 rounded-xl grid grid-cols-[24px_auto] gap-4 cursor-default p-4">
                    <Icon data={faCheck} class="w-6 h-6" />
                    <div class="text-left">{station.text}</div>
                </button>
            {:else if station.state === "OPEN"}
                <button class="w-full h-auto border border-black rounded-xl grid grid-cols-[24px_auto] gap-4 cursor-pointer p-4">
                    <Icon data={faClock} class="w-6 h-6" />
                    <div class="text-left">{station.text}</div>
                </button>
            {:else}
                <button class="w-full h-auto border border-black rounded-xl grid grid-cols-[24px_auto] gap-4 cursor-default opacity-50 p-4">
                    <Icon data={faKey} class="w-6 h-6" />
                    <div class="text-left">{station.text}</div>
                </button>
            {/if}
    {/each}
</div>
