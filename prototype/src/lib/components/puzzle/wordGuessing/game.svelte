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

    // TODO Cedric: Station 1 Rätsel 1 Game
    const input: Input =  {
        questions: [
            {
                hints: [
                    {
                        tag: "img",
                        src: "/station_02/raetsel_01/game/image_00.png",
                        alt: "Tee",
                        caption: ""
                    },
                    {
                        tag: "text",
                        text: {
                            crossed: "e",
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
                        src: "/station_02/raetsel_01/game/image_01.png",
                        alt: "Western",
                        caption: ""
                    },
                    {
                        tag: "text",
                        text: {
                            crossed: "tern"
                        }
                    },  
                ],
                solution: "Tewes"
            }
        ]
    }

    // TODO Cedric: Station 2 Rätsel 2 Game
    // const input: Input =  {
    //     questions: [
    //         {
    //             hints: [
    //                 {
    //                     tag: "img",
    //                     src: "/station_02/raetsel_02/game/image_00.png",
    //                     alt: "Freundschaft",
    //                     caption: ""
    //                 },
    //                 {
    //                     tag: "text",
    //                     text: {
    //                         crossed: "schaft"
    //                     }
    //                 },
    //                 {
    //                     tag: "text",
    //                     text: {
    //                         normal: "+"
    //                     }
    //                 },  
    //                 {
    //                     tag: "text",
    //                     text: {
    //                         normal: "&"
    //                     }
    //                 },
    //                 {
    //                     tag: "text",
    //                     text: {
    //                         normal: "+"
    //                     }
    //                 },
    //                 {
    //                     tag: "img",
    //                     src: "/station_02/raetsel_02/game/image_01.png",
    //                     alt: "Bauer",
    //                     caption: ""
    //                 }
    //             ],
    //             solution: "Freund & Bauer"
    //         }
    //     ]
    // }

    // TODO Cedric: Station 2 Rätsel 3 Game
    // const input: Input =  {
    //     questions: [
    //         {
    //             hints: [
    //                 {
    //                     tag: "img",
    //                     src: "/station_02/raetsel_03/game/image_00.png",
    //                     alt: "Betten",
    //                     caption: ""
    //                 },
    //                 {
    //                     tag: "text",
    //                     text: {
    //                         normal: "+"
    //                     }
    //                 },  
    //                 {
    //                     tag: "img",
    //                     src: "/station_02/raetsel_03/game/image_01.png",
    //                     alt: "Hut",
    //                     caption: ""
    //                 },
    //                 {
    //                     tag: "text",
    //                     text: {
    //                         normal: "t"
    //                     }
    //                 },  
    //             ],
    //             solution: "Betten Hutt"
    //         }
    //     ]
    // }

    // TODO Cedric: Station 2 Rätsel 4 Game
    //  const input: Input =  {
    //     questions: [
    //         {
    //             hints: [
    //                 {
    //                     tag: "img",
    //                     src: "/station_02/raetsel_04/game/image_00.png",
    //                     alt: "Rüschen",
    //                     caption: ""
    //                 },
    //                 {
    //                     tag: "text",
    //                     text: {
    //                         normal: "+"
    //                     }
    //                 },  
    //                 {
    //                     tag: "img",
    //                     src: "/station_02/raetsel_04/game/image_01.png",
    //                     alt: "Gebäck",
    //                     caption: ""
    //                 },
    //                 {
    //                     tag: "text",
    //                     text: {
    //                         crossed: "Ge",
    //                         normal: " + ä=e"
    //                     }
    //                 },  
    //             ],
    //             solution: "Rüschenbeck"
    //         }
    //     ]
    //  }

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
</script>

<GameComponent bind:this={game} input={input} />
