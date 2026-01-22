<script lang="ts">
    import type { ResultData, SavingData } from "."
    import ResultComponent from "$components/Games/WordGuessingGame/WordGuessingResult.svelte"

    let { result, saving }: { result: ResultData, saving: SavingData } = $props()

    result = {
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
                            crossed: "test",
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
                solution: "Tewes",
                solutionText: "Lösung: Freundschaft (-schaft) + & + Bauer = Freund & Bauer"
            }
        ]
    }
</script>

<ResultComponent result={result} saving={saving} />
