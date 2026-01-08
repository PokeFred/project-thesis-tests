<script lang="ts">
    import type { GameInput, GameOutput } from "./index"
    import Icon from "svelte-awesome"
    import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
    import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe"
    import ErrorBanner from "./ErrorBanner.svelte"
    import SuccessBanner from "./SuccessBanner.svelte"
    import LoadingBanner from "./LoadingBanner.svelte"

    let { data, setSubmitable }: { data: GameInput, setSubmitable: () => void } = $props()

    export function getSubmitData(): GameOutput { return {} }
    export function getSubmitScore(): number { return 1 }

    let a: boolean = $state<boolean>(false)
    function fetchLocation(): void {
        setTimeout((): void => {
            a = true
            setSubmitable()
        }, 1000)
    }
</script>

<div class="mx-auto w-fit h-auto">
    <button onclick={fetchLocation} class="w-full h-auto text-primary bg-secondary rounded-xl flex justify-center items-center px-8 {!a ? "cursor-pointer active:scale-95" : "opacity-50 cursor-default"}" disabled={a}><Icon data={faGlobe} /><span class="ml-2">Überprüfe Standort</span></button>
</div>
<div class="mt-3 grid grid-cols gap-4">
    <!-- <SuccessBanner message="Standortzugriff verweigert." /> -->
    <!-- <LoadingBanner /> -->
    <!-- <ErrorBanner message="Standortzugriff verweigert." /> -->
</div>
