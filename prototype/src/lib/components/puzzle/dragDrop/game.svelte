<script lang="ts">
  import PuzzleGame from "$components/Games/PuzzleGame/PuzzleGame.svelte";
    import type { GameInput, GameOutput } from "./index"
    import { onMount } from "svelte"
    import type { GameInput as _GameInput } from "$components/Games/PuzzleGame"

    let { data, setSubmitable }: { data: GameInput, setSubmitable: () => void } = $props()

    let puzzle: PuzzleGame

    const output: GameOutput = {}
    export function getSubmitData(): GameOutput {
        return puzzle.getSubmitData()
    }

    export function getSubmitScore(): number {
        return puzzle.getSubmitScore()
    }

    onMount((): void => {
        setSubmitable()
    })
</script>

<PuzzleGame bind:this={puzzle} gameInput={{ path: data.path } as _GameInput} />
