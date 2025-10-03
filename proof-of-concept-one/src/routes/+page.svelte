<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</svelte:head>

<script lang="ts">
    import { UserLocation, UserLocationError } from "$utils/GPS"

    let location: Promise<UserLocation> | null = $state(null)
    async function fetchLocation(): Promise<void> {
        location = new Promise(async (resolve: (value: UserLocation) => void, reject: (reason: UserLocationError) => void): Promise<void> => {
            try {
                const location: UserLocation = await UserLocation.fetchLocation()
                resolve(location)
                throw new Error("A")
            } catch (error: unknown) {
                console.log(error)
                reject(new UserLocationError("UNKNOWN", "Error: can't fetch location."))
            }
        })
    }

    function formatTimestamp(timestamp: Date): string {
        const year: string = timestamp.getFullYear().toString()
        const month: string = timestamp.getMonth().toString().padStart(2, "0")
        const day: string = timestamp.getDate().toString().padStart(2, "0")

        const hours: string = timestamp.getHours().toString().padStart(2, "0")
        const minutes: string = timestamp.getMinutes().toString().padStart(2, "0")
        const seconds: string = timestamp.getSeconds().toString().padStart(2, "0")

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }
</script>

<div class="mx-auto w-full max-w-sm h-auto border border-black">
    <div class="w-full h-auto text-xl font-bold text-center px-4 py-2">Proof of Concept One (GPS)</div>
    <div class="w-full h-auto border-t border-black p-4">
        <div class="mx-auto w-fit h-auto">
            <button onclick={fetchLocation} class="w-full h-auto text-lg text-white bg-blue-500 rounded-xl cursor-pointer px-8">Fetch Location</button>
        </div>
        {#if location !== null}
            <div class="mt-3 w-full h-auto text-base border border-black rounded-xl p-4">
                <div class="w-full h-auto font-bold underline text-center">GPS Coordinates</div>
                <div class="w-full h-auto text-left underline">Werte</div>
                {#await location}
                    <div>Loading...</div>
                {:then data: UserLocation | null}
                    <div class="w-fit h-auto grid grid-cols-[auto_auto] gap-x-4">
                        <span>Latitude:</span>
                        <span>{data.getLat()}</span>
                        <span>Longitude:</span>
                        <span>{data.getLon()}</span>
                        <span>Accuracy:</span>
                        <span>{data.getAcc()}</span>
                        <span>Timestamp:</span>
                        <span>{formatTimestamp(data.getTimestamp())}</span>
                    </div>
                {:catch error: UserLocationError}
                    <div class="mt-2 mx-4 text-white text-center bg-red-500/50 border border-red-500 rounded-xl px-8 py-4">{error}</div>
                {/await}
                <div class="mt-8 w-full h-auto text-left underline">Erklärungen</div>
                <div class="w-fit h-auto grid grid-cols-[auto_auto] gap-x-4">
                    <span>Latitude:</span>
                    <span>Breitengrad (Nord/Süd)</span>
                    <span>Longitude:</span>
                    <span>Längengrad (Ost/West)</span>
                    <span>Accuracy:</span>
                    <span>Genauigkeit der Position in Metern</span>
                </div>
            </div>
        {/if}

        <!--
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
        -->
    </div>
</div>
