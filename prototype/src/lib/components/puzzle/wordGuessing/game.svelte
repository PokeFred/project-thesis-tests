<script lang="ts">
	import type { GameData, SavingData } from "."
	import GameComponent from "$components/Games/WordGuessingGame/WordGuessingComponent.svelte"
	import type { GameInput as Input } from "$components/Games/WordGuessingGame"
	import { onMount } from "svelte"

	let { data, setSubmitable }: { data: GameData, setSubmitable: () => void } = $props()

	let game: GameComponent
	export function getSubmitData(): SavingData { return game.getSubmitData() }
    export function getSubmitScore(): number { return game.getSubmitScore() }

	onMount((): void => {
        setSubmitable()
    })

    // TODO Cedric: introduction nicht vergessen
    const input: Input =  data

    // TODO cedric: Station 5 Rätsel 3 game
    // const input: Input =  {
    //     questions: [
    //         {
    //             solution: "Rosendahl"
    //         }
    //     ]
    // }

    // TODO cedric: station 7 rätsel 2 game
    // const input: Input =  {
    //     questions: [
    //         {
    //             solution: "10"
    //         }
    //     ]
    // }

    // TODO cedric: station 9 rätsel 1 game
    // const input: Input =  {
    //     questions: [
    //         {
    //             solution: "14"
    //         }
    //     ]
    // }

    // TODO cedric: station 9 rätsel 2 game
    // const input: Input =  {
    //     questions: [
    //         {
    //             solution: "6"
    //         }
    //     ]
    // }

    // TODO cedric: station 9 rätsel 3 game
    // const input: Input =  {
    //     questions: [
    //         {
    //             solution: "2"
    //         }
    //     ]
    // }
</script>

<GameComponent bind:this={game} input={input} />
