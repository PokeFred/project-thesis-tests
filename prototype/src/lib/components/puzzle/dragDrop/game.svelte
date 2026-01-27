<script lang="ts">
    import type { GameData, SavingData } from "."
    import GameComponent from "$components/Games/Canvas/PuzzleGame/PuzzleGame.svelte"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameData, setSubmitable: () => void } = $props()

    let game: GameComponent
    export function getSubmitData(): SavingData { return game.getSubmitData() }
    export function getSubmitScore(): number { return game.getSubmitScore() }

    let a: HTMLDialogElement
    onMount((): void => {
        setSubmitable()
        a.showModal()
    })
</script>

<GameComponent bind:this={game} input={data} />

<dialog bind:this={a} open class="top-0 left-0 w-full h-full bg-yellow-500 absolute z-100 p-4">
    <button onclick={(): void => a.close()} class="border px-4">Hey</button>
</dialog>
