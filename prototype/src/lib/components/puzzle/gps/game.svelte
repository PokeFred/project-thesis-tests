<script lang="ts">
    import type { GameInput, GameOutput } from "./index"
    import Icon from "svelte-awesome"
    import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
    import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe"
    import ErrorBanner from "./ErrorBanner.svelte"
    import SuccessBanner from "./SuccessBanner.svelte"
    import LoadingBanner from "./LoadingBanner.svelte"
    import { onMount } from "svelte"
    import { fetchLocation } from "./Gps"
    import type { UserLocationData, UserLocationError } from "./Gps"

    let { data, setSubmitable }: { data: GameInput, setSubmitable: () => void } = $props()

    export function getSubmitData(): GameOutput { return {} }
    export function getSubmitScore(): number { return 1 }

    function isRange(current: UserLocationData, game: { lat: number, lon: number }): boolean {
        const R: number = 6371e3
        const x: number = (current.lat - game.lat) * (Math.PI / 180) * Math.cos((current.lat + game.lat) / 2 * (Math.PI / 180))
        const y: number = (current.lon - game.lon) * (Math.PI / 180)

        const distance = Math.sqrt(x * x + y * y) * R
        return distance <= 250
    }

    let a: boolean = $state<boolean>(false)
    let message: string = $state("")
    async function _fetchLocation(): Promise<void> {
        try {
            const _data: UserLocationData = await fetchLocation()
            // @ts-ignore
            if (isRange(_data, data.coordinates)) {
                a = true
                message = "Standort korrekt"
                setSubmitable()
            } else {
                a = false
                message = "Achtung! Du bist vermutlich noch nicht am richtigen Standort. Gehe zu den Koordinaten und überprüfe deinen Standort erneut."
            }
        } catch (error: unknown) {
            a = false
            message = (error as Error).message
        }

        setTimeout((): void => {
            //a = true
            //setSubmitable()
        }, 1000)
    }

    onMount(() => {
        //setSubmitable()
    })
</script>

<button onclick={_fetchLocation} class="{a ? "hidden" : ""} w-full h-auto pl-6 text-left text-[20px] font-medium text-primary bg-secondary rounded-full py-2 cursor-pointer active:scale-95">Überprüfe meinen Standort</button>
{#if message !== ""}
    <div class="-mx-4 bg-secondary">
        <div class="mx-4">
            <div class="mt-5.5 mb-15 w-full h-auto font-medium text-[20px] text-primary bg-secondary grid grid-cols-[auto] items-center gap-4 px-6 py-2">
                {message}
            </div>
        </div>
    </div>
{/if}
<div class="mt-3 grid grid-cols gap-4">
    <div class="hidden w-full h-auto text-lg text-primary bg-secondary p-4">Achtung! Du bist vermutlich noch nicht am richtigen Standort. Gehe zu den Koordinaten und überprüfe deinen Standort erneut.</div>
    <div class="hidden w-full h-auto text-lg text-primary bg-secondary p-4">Standort korrekt</div>
    <!-- <SuccessBanner message="Standortzugriff verweigert." /> -->
    <!-- <LoadingBanner /> -->
    <!-- <ErrorBanner message="Standortzugriff verweigert." /> -->
</div>
