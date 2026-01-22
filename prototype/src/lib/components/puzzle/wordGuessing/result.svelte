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
                        src: "https://placehold.co/600x400",
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
                        src: "https://placehold.co/600x400",
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
