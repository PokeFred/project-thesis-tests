<script lang="ts">
    import type { GameData, SavingData } from "."
    import GameComponent from "$components/Games/Canvas/PuzzleGame/PuzzleGame.svelte"
    import type { GameInput as Input } from "$components/Games/Canvas/PuzzleGame"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameData, setSubmitable: () => void } = $props()

    let game: GameComponent
    export function getSubmitData(): SavingData { return game.getSubmitData() }
    export function getSubmitScore(): number { return game.getSubmitScore() }

    onMount((): void => {
        setSubmitable()
    })

    // TODO (Simon)
    // { path: string, caption: string }
    const input: Input = data
</script>

<GameComponent bind:this={game} input={input} />
