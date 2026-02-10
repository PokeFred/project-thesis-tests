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

    function isRange(current: UserLocationData, game: { lan: number, lon: number}): boolean {
        console.log({ current, game })
        return false
    }

    let a: boolean = $state<boolean>(false)
    async function _fetchLocation(): Promise<void> {
        try {
            //const _data: UserLocationData = await fetchLocation()
            // @ts-ignore
            //isRange(_data, data.coordinates)
        } catch (error: unknown) {
            console.log(error)
        }

        setTimeout((): void => {
            a = true
            setSubmitable()
        }, 1000)
    }

    onMount(() => {
        //setSubmitable()
    })
</script>

<button onclick={_fetchLocation} class="{a ? "hidden" : ""} w-full h-auto pl-6 text-left text-[20px] font-medium text-primary bg-secondary rounded-full py-2 cursor-pointer active:scale-95">Überprüfe meinen Standort</button>
<div class="mt-3 grid grid-cols gap-4">
    <div class="hidden w-full h-auto text-lg text-primary bg-secondary p-4">Achtung! Du bist vermutlich noch nicht am richtigen Standort. Gehe zu den Koordinaten und überprüfe deinen Standort erneut.</div>
    <div class="hidden w-full h-auto text-lg text-primary bg-secondary p-4">Standort korrekt</div>
    <!-- <SuccessBanner message="Standortzugriff verweigert." /> -->
    <!-- <LoadingBanner /> -->
    <!-- <ErrorBanner message="Standortzugriff verweigert." /> -->
</div>
