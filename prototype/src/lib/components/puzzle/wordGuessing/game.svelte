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

    const input: Input =  {
        questions: [
            {
                hints: [
                    {
                        tag: "img",
                        src: "/station_02/raetsel_01/game/image_02.png",
                        alt: "test",
                        caption: ""
                    },
                    {
                        tag: "text",
                        text: {
                            // crossed: "sel",
                            crossed: "schaft",
                            // normal: " + chen"
                        }
                    },
                    {
                        tag: "text",
                        text: {
                            normal: "+"
                        }
                    },  
                    {
                        tag: "text",
                        text: {
                            normal: "&"
                        }
                    },
                    {
                        tag: "text",
                        text: {
                            normal: "+"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_01/game/image_03.png",
                        alt: "test",
                        caption: ""
                    }
                ],
                solution: "Tewes"
            }
        ]
    }
</script>

<GameComponent bind:this={game} input={input} />
