<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Station from "./Station.svelte"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"

    let { data }: PageProps = $props()
</script>

<button onclick={() => goto("/app")} class="mb-3 w-8 h-8 text-black border border-black rounded-lg flex justify-center items-center cursor-pointer">
    <Icon data={faAngleLeft} class="w-6 h-6" />
</button>
<div class="w-full h-auto text-black border border-black rounded-xl p-4">
    <div class="w-full h-auto text-lg underline text-center">Stationen</div>
    <div class="mt-3 w-full h-auto flex justify-center items-center">
        <div class="text-sm shrink-0">Geschafft:</div>
        <div class="mx-3 w-full h-auto bg-gray-500/25 rounded-xl">
            <div class="h-4 bg-blue-500 rounded-xl" style="width: {data.score.current * 100 / data.score.max}%;"></div>
        </div>
        <div class="text-sm shrink-0">{data.score.current}/{data.score.max}</div>
    </div>
    <div class="mt-3 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.stations as station}
            <Station station={station} />
        {/each}
    </div>
    <div class="mt-4 w-full h-auto text-lg underline text-center">Storyline</div>
</div>
