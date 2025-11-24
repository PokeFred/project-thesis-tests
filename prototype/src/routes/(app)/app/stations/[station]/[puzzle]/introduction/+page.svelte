<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import GpsIntroduction from "$components/puzzle/gps/introduction.svelte"
    import SelectIntroduction from "$components/puzzle/select/introduction.svelte"
    import DoubleSelectIntroduction from "$components/puzzle/doubleSelect/introduction.svelte"
    import MultiSelectIntroduction from "$components/puzzle/multiSelect/introduction.svelte"

    let { data }: PageProps = $props()
    console.log(data)
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">{data.title}</span>
        <button onclick={() => goto(`/app/stations/${data.station}`)} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faAngleLeft} class="w-6 h-6" />
        </button>
    </div>
    {#if data.type === "gps-puzzle"}
        <GpsIntroduction data={data.data} />
    {/if}
    {#if data.type === "select-puzzle"}
        <SelectIntroduction data={data.data} />
    {/if}
    {#if data.type === "double-select-puzzle"}
        <DoubleSelectIntroduction data={data.data} />
    {/if}
    {#if data.type === "multi-select-puzzle"}
        <MultiSelectIntroduction data={data.data} />
    {/if}
    <div class="mx-auto w-fit h-auto">
        <button onclick={() => goto(`/app/stations/${data.station}/${data.identifier}/game`)} class="w-full h-auto text-primary bg-secondary rounded-xl cursor-pointer px-8 active:scale-95">Rätsel starten</button>
    </div>
</div>
