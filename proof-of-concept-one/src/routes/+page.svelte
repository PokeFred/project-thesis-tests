<script lang="ts">
    import { fetchLocation } from "$utils/Gps"
    import type { UserLocationData, UserLocationError } from "$utils/Gps"
    import { formatTimestamp } from "$utils"
    import SearchBanner from "$components/SearchBanner.svelte"
    import ErrorBanner from "$components/ErrorBanner.svelte"

    let location: Promise<UserLocationData> | null = $state<Promise<UserLocationData> | null>(null)
</script>

<div class="w-full h-auto text-[#30114F] bg-[#FFA099] rounded-xl p-4">
    <div class="w-full h-auto text-lg font-bold underline text-center">GPS Koordinaten</div>
    <div class="mt-2 mx-auto w-fit h-auto">
        <button onclick={() => location = fetchLocation()} class="w-full h-auto text-lg text-[#FFA099] font-semibold bg-[#30114F] rounded-xl cursor-pointer px-8 active:scale-95">Standort aktualisieren</button>
    </div>
    <div class="mt-4 mx-auto w-full h-auto">
        {#if location !== null}
            {#await location}
                <SearchBanner />
            {:then data: UserLocationData}
                <div class="mx-auto w-full max-w-3xs h-auto grid grid-cols-[auto_160px] gap-x-4">
                    <span class="text-left">Latitude:</span>
                    <span class="text-left">{data.lat}</span>
                    <span class="text-left">Longitude:</span>
                    <span class="text-left">{data.lon}</span>
                    <span class="text-left">Accuracy:</span>
                    <span class="text-left">{data.acc}</span>
                    <span class="text-left">Timestamp:</span>
                    <span class="text-left">{formatTimestamp(data.timestamp)}</span>
                </div>
            {:catch error: UserLocationError}
                <ErrorBanner message={error.message} />
            {/await}
        {/if}
    </div>
</div>
<div class="mt-4 w-full h-auto text-[#30114F] bg-[#FFA099] rounded-xl p-4">
    <div class="w-full h-auto text-lg font-bold underline text-center">Erklärungen</div>
    <div class="w-full h-auto grid grid-cols-[auto_auto] gap-x-4">
        <div class="italic text-left">Latitude:</div>
        <div class="italic text-left">Breitengrad (Nord/Süd)</div>
        <div class="italic text-left">Longitude:</div>
        <div class="italic text-left">Längengrad (Ost/West)</div>
        <div class="italic text-left">Accuracy:</div>
        <div class="italic text-left">Genauigkeit der Position (in Metern)</div>
    </div>
</div>
