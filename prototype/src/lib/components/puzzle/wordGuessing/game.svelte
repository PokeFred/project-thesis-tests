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
        // TODO (Cedric) remove after meeting
        //setSubmitable()
    })

    const input: Input =  {
        questions: [
            {
                solution: "Dille & Kamille",
                left: {
                    src: "https://placehold.co/600x400",
                    alt: "https://placehold.co/600x400",
                    caption: "Abbildung",
                    hints: {
                        normal: "P=D",
                        crossed: "n"
                    }
                },
                operator: "&",
                right: {
                    src: "https://placehold.co/600x400",
                    alt: "https://placehold.co/600x400",
                    caption: "Abbildung",
                }
            },
            {
                solution: "Dille & Kamille",
                left: {
                    src: "https://placehold.co/600x400",
                    alt: "https://placehold.co/600x400",
                    caption: "Abbildung",
                    hints: {
                        normal: "P=D",
                        crossed: "n"
                    }
                },
                operator: "&",
                right: {
                    src: "https://placehold.co/600x400",
                    alt: "https://placehold.co/600x400",
                    caption: "Abbildung",
                }
            }
        ]
    }
</script>

<GameComponent bind:this={game} input={input} />
