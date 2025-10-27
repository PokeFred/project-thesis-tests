<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
    import { faClock } from "@fortawesome/free-solid-svg-icons/faClock"
    import { faKey } from "@fortawesome/free-solid-svg-icons/faKey"

    let { data }: PageProps = $props()
</script>

<button onclick={() => goto("/app")} class="mb-3 w-8 h-8 text-black border border-black rounded-lg flex justify-center items-center cursor-pointer">
    <Icon data={faAngleLeft} class="w-6 h-6" />
</button>
<div class="w-full h-auto text-black border border-black rounded-xl p-4">
    <div class="w-full h-auto text-lg underline text-center">Stationen</div>
    <div class="mt-3 w-full h-auto flex justify-center items-center">
        <div class="mr-3 text-sm shrink-0">Geschafft:</div>
        <div class="w-full h-auto bg-gray-500/25 rounded-xl">
            <div class="w-[{data.completion}%] h-4 bg-blue-500 rounded-xl"></div>
        </div>
    </div>
    <div class="mt-3 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.stations as station}
            {#if station.state === "FINISHED"}
                <div class="w-full h-auto bg-green-500/15 border-2 border-green-500 rounded-xl grid grid-cols-[24px_auto_48px] gap-4 cursor-default p-4">
                    <Icon data={faCheck} class="w-6 h-6" />
                    <span class="text-left">{station.name}</span>
                    <span class="text-right">{station.score.current}<span class="mx-0.5">/</span>{station.score.max}</span>
                </div>
            {:else if station.state === "OPEN"}
                <button onclick={(): Promise<void> => goto(`./stations/${station.identifier}`)} class="w-full h-auto border border-black rounded-xl grid grid-cols-[24px_auto_48px] gap-4 cursor-pointer p-4">
                    <Icon data={faClock} class="w-6 h-6" />
                    <span class="text-left">{station.name}</span>
                    <span class="text-right">{station.score.current}<span class="mx-0.5">/</span>{station.score.max}</span>
                </button>
            {:else}
                <div class="w-full h-auto border border-black rounded-xl grid grid-cols-[24px_auto_48px] gap-4 cursor-default opacity-50 p-4">
                    <Icon data={faKey} class="w-6 h-6" />
                    <span class="text-left">{station.name}</span>
                    <span class="text-right">{station.score.current}<span class="mx-0.5">/</span>{station.score.max}</span>
                </div>
            {/if}
        {/each}
    </div>
</div>
