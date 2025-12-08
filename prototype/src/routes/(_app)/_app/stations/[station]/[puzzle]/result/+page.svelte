<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import GpsIntroduction from "$components/puzzle/gps/introduction.svelte"
    import GpsResult from "$components/puzzle/gps/result.svelte"
    import DoubleSelectIntroduction from "$components/puzzle/doubleSelect/introduction.svelte"
    import DoubleSelectResult from "$components/puzzle/doubleSelect/result.svelte"
    import MultipleChoiceIntroduction from "$components/puzzle/multipleChoice/introduction.svelte"
    import MultipleChoiceResult from "$components/Games/MultipleChoiceGame/MultipleChoiceResult.svelte";
    

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">{data.title}</span>
        <button onclick={() => goto(`/app/stations/${data.station}/${data.identifier}/game`)} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faAngleLeft} class="w-6 h-6" />
        </button>
    </div>
    {#if data.type === "gps-puzzle"}
        <GpsIntroduction data={data.introduction} />
        <GpsResult data={data.result} />
    {/if}
    {#if data.type === "double-select-puzzle"}
        <DoubleSelectIntroduction data={data.introduction} />
        <DoubleSelectResult data={data.result} />
    {/if}
    {#if data.type === "multiple-choice-puzzle"}
        <MultipleChoiceIntroduction data={data.introduction} />
        <MultipleChoiceResult result={data.result} />
    {/if}
    <div class="mt-4 mx-auto w-fit h-auto">
        <button onclick={() => goto(`/app/stations/${data.station}`)} class="w-full h-auto text-primary bg-secondary rounded-xl cursor-pointer px-8 active:scale-95">Zurück zur Station</button>
    </div>
</div>
