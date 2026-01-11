<script lang="ts">
    import type { GameData, SavingData } from "."
    import GameComponent from "$components/Games/Canvas/ErrorSpottingGame/ErrorSpottingGame.svelte"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameData, setSubmitable: () => void } = $props()

    let game: GameComponent
    export function getSubmitData(): SavingData { return game.getSubmitData() }
    export function getSubmitScore(): number { return game.getSubmitScore() }

    onMount((): void => {
        // TODO (Cedric) remove after meeting
        //setSubmitable()
    })
</script>

<GameComponent bind:this={game} input={data} />
