<script lang="ts">
    import { goto } from "$app/navigation"
    import type { _Station } from "./Station"
    import Icon from "svelte-awesome"
    import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
    import { faClock } from "@fortawesome/free-solid-svg-icons/faClock"
    import { faKey } from "@fortawesome/free-solid-svg-icons/faKey"

    let { station }: { station: _Station } = $props()
</script>

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
