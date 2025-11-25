<script lang="ts">
    import type { GameInput, GameOutput } from "./index"
    import Icon from "svelte-awesome"
    import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"

    let { data, setSubmitable }: { data: GameInput, setSubmitable: () => void } = $props()

    const output: GameOutput = {}
    export function getSubmitData(): GameOutput {
        return output
    }

    let a: boolean = $state<boolean>(false)
    function fetchLocation(): void {
        setTimeout((): void => {
            a = true
            setSubmitable()
        }, 2500)
    }
</script>

<div class="mx-auto w-fit h-auto">
    <button onclick={fetchLocation} class="w-full h-auto text-primary bg-secondary rounded-xl px-8 {!a ? "cursor-pointer active:scale-95" : "opacity-50 cursor-default"}" disabled={a}><Icon data={faLocationDot} /> Fetch Location</button>
</div>
