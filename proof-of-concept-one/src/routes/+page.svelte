<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</svelte:head>

<script lang="ts">
    import type { PageProps } from "./$types"
    import { UserLocation, UserLocationError } from "$utils/GPS"

    let { data }: PageProps = $props()
</script>

<div class="mx-auto w-full max-w-sm h-auto border border-black">
    <div class="w-full h-auto text-xl font-bold text-center px-4 py-2">Title</div>
    <div class="w-full h-auto border-t border-black p-4">
        {#await data.location}
            <div>Loading...</div>
        {:then data: UserLocation}
            <div class="w-full text-base border border-black rounded-xl p-4">
                <div class="grid grid-cols-[auto_auto]">
                    <span class="underline">Werte</span>
                    <span></span>
                    <span>Latitude:</span>
                    <span>{data.getLat()}</span>
                    <span>Longitude:</span>
                    <span>{data.getLon()}</span>
                    <span>Accuracy:</span>
                    <span>{data.getAcc()}</span>
                    <span class="h-4"></span>
                    <span></span>
                    <span class="underline">Erklärungen</span>
                    <span></span>
                    <span class="font-bold">Latitude:</span>
                    <span>Breitengrad (Nord/Süd)</span>
                    <span class="font-bold">Longitude:</span>
                    <span>Längengrad (Ost/West)</span>
                    <span class="font-bold">Accuracy:</span>
                    <span>Genauigkeit der Position in Metern</span>
                </div>
            </div>
        {:catch error: UserLocationError}
            <div class="w-full h-auto text-white bg-red-500/50 border-2 border-red-500 rounded-xl p-4">
                <div class="w-full h-auto text-lg underline text-center">Fehler</div>
                <div class="w-full h-auto text-base text-center">{error.getMessage()}</div>
            </div>
        {/await}
    </div>
</div>
