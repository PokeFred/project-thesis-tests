<script lang="ts">
    import type { GameInput, GameOutput } from "./index"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameInput, setSubmitable: () => void } = $props()

    let output: GameOutput = {}
    export function getSubmitData(): GameOutput {
        return output
    }

    export function getSubmitScore(): number {
        return 0
    }

    onMount((): void => {
        setSubmitable()

        output = {}
    })
</script>

<div>{JSON.stringify(data)}</div>

<div class="grid grid-cols-2 gap-2 px-1">
    <h4>Handwerk</h4>
    <h4 class="justify-self-end">Zünfte</h4>
    {#each data.data.left as element}
        <span class="border-1 rounded">{element}</span>
        <div class="justify-self-end"></div>
    {/each}
</div>
