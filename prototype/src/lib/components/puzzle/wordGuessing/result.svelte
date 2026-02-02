<script lang="ts">
    import type { ResultData, SavingData } from "."
    import ResultComponent from "$components/Games/WordGuessingGame/WordGuessingResult.svelte"

    let { result, saving }: { result: ResultData, saving: SavingData } = $props()

    // TODO Cedric: Station 1 Rätsel 1 Result
    result = {
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
                solution: "Tewes",
                solutionText: "Lösung: Tee (-e) + Western (-tern) = Tewes"
            }
        ]
    }

    // TODO Cedric: Station 2 Rätsel 2 Result
    //  result = {
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
    //             solution: "Freund & Bauer",
    //             solutionText: "Lösung: Freundschaft (-schaft) + & + Bauer = Freund & Bauer"
    //         }
    //     ]
    // }

    // TODO Cedric: Station 2 Rätsel 3 Result
    // result = {
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
    //             solution: "Betten Hutt",
    //             solutionText: "Betten + Hut (t) = Betten Hutt"
    //         }
    //     ]
    // }

    // TODO Cedric: Station 2 Rätsel 4 Result
    // result = {
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
    //             solution: "Rüschenbeck",
    //             solutionText: "Rüschen + (-Ge)b(ä=e)ck = Rüschenbeck"
    //         }
    //     ]
    // }

    // TODO cedric: station 5 rätsel 3 result
    // im introduction bild nicht vergessen
    // result = {
    //     questions: [
    //         {
    //             solution: "Rosendahl",
    //         }
    //     ]
    // }

    // TODO cedric: station 7 rätsel 2 result
    // result = {
    //     questions: [
    //         {
    //             solution: "10"
    //         }
    //     ]
    // }
    
</script>

<ResultComponent result={result} saving={saving} />
