<script lang="ts">
    import type { GameInput, GameOutput } from "./index"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameInput, setSubmitable: () => void } = $props()

    const output: GameOutput = {}
    export function getSubmitData(): GameOutput {
        return output
    }

    onMount((): void => {
        setSubmitable()
    })
</script>
