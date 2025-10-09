<script lang="ts">
    import { goto } from "$app/navigation"
    import game from "$stores/game"
    import Icon from "svelte-awesome"
    import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
    import { faClock } from "@fortawesome/free-solid-svg-icons/faClock"
    import { faKey } from "@fortawesome/free-solid-svg-icons/faKey"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"

    import { config, getPuzzleState, getPuzzleScore } from "../game"
</script>

<button onclick={() => goto("/app")} class="mb-3 w-8 h-8 text-black border border-black rounded-lg flex justify-center items-center cursor-pointer">
    <Icon data={faAngleLeft} class="w-6 h-6" />
</button>
<div class="w-full h-auto text-black border border-black rounded-xl p-4">
    <div class="w-full h-auto text-lg underline text-center">Stationen</div>
    <div class="mt-3 w-full h-auto flex justify-center items-center">
        <div class="mr-3 text-sm shrink-0">Geschafft:</div>
        <div class="w-full h-auto bg-gray-500/25 rounded-xl">
            <div class="w-[{Math.floor($game.score.current * 100 / $game.score.max)}%] h-4 bg-gray-500/60 rounded-xl"></div>
        </div>
    </div>
    <div class="mt-3 w-full h-auto grid grid-cols-1 gap-2">
        {#each config.stations as station}
            {#if getPuzzleState(station.identifier) === "FINISHED"}
                <div class="w-full h-auto bg-green-500/15 border-2 border-green-500 rounded-xl grid grid-cols-[24px_auto_48px] gap-4 cursor-default p-4">
                    <Icon data={faCheck} class="w-6 h-6" />
                    <span class="text-left">{station.name}</span>
                    <span class="text-right">{getPuzzleScore(station.identifier)}/{station.score}</span>
                </div>
            {:else if getPuzzleState(station.identifier) === "OPEN"}
                <button onclick={(): Promise<void> => goto(`./stations/${station.identifier}`)} class="w-full h-auto border border-black rounded-xl grid grid-cols-[24px_auto_48px] gap-4 cursor-pointer p-4">
                    <Icon data={faClock} class="w-6 h-6" />
                    <span class="text-left">{station.name}</span>
                    <span class="text-right">{getPuzzleScore(station.identifier)}/{station.score}</span>
                </button>
            {:else}
                <div class="w-full h-auto border border-black rounded-xl grid grid-cols-[24px_auto_48px] gap-4 cursor-default opacity-50 p-4">
                    <Icon data={faKey} class="w-6 h-6" />
                    <span class="text-left">{station.name}</span>
                    <span class="text-right">{getPuzzleScore(station.identifier)}/{station.score}</span>
                </div>
            {/if}
        {/each}
    </div>
</div>
