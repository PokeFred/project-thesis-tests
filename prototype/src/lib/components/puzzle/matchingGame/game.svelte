<script lang="ts">
  import MatchingGame from "$components/Games/MatchingGame/MatchingGame.svelte";
    import type { GameInput, GameOutput } from "./index"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameInput, setSubmitable: () => void } = $props()

    let matching: MatchingGameComponent

    export function getSubmitData(): GameOutput {
        return matching.getSubmitData()
    }

    export function getSubmitScore(): number {
        return matching.getSubmitScore()
    }

    onMount((): void => {
        setSubmitable()
    })

    import type { GameInput as _GameInput } from "$components/Games/Cloze";
  import MatchingGameComponent from "$components/Games/MatchingGame/MatchingGameComponent.svelte";
    const gameInputCloze: _GameInput = {
        content: [
            {
                tag: "h2",
                children: [
                    {
                        tag: "text",
                        text: `Das Warenhaus Althoff – Ein Konsumtempel in Dortmund:`
                    }
                ]
            },
            {
                tag: "p",
                children: [
                    {
                        tag: "text",
                        text: `Im Jahr 1904 eröffnete am Westenhellweg das von Theodor Althoff gegründete
                               Warenhaus. Die Architektur war inspiriert vom berühmten Wertheim-Warenhaus
                               in `
                    },
                    {
                        tag: "Select",
                        options: [
                            { answer: "London", correct: false },
                            { answer: "Paris", correct: false },
                            { answer: "Berlin", correct: true },
                        ]
                    },
                    {
                        tag: "text",
                        text: ` und wurde von Otto Engler entworfen. Fast `
                    },
                    {
                        tag: "Select",
                        options: [
                            { answer: "10.000", correct: true },
                            { answer: "100.000", correct: false },
                            { answer: "1.000", correct: false },
                        ]
                    },
                    {
                        tag: "text",
                        text: ` Menschen strömten
                                am Eröffnungstag ins Warenhaus. Schon bald folgte ein Erweiterungsbau am
                                Hansaplatz.`
                    }
                ]
            },
            {
                tag: "p",
                children: [
                    {
                        tag: "text",
                        text: `Neben Luxuswaren, wie teuren `
                    },
                    {
                        tag: "Select",
                        options: [
                            { answer: "Autos", correct: false },
                            { answer: "Edelsteinen", correct: false },
                            { answer: "Schmuckstücken", correct: true },
                        ]
                    },
                    {
                        tag: "text",
                        text: ` und einer großen Auswahl an Teppichen
                                wurden auch Produkte des täglichen Bedarfs verkauft – sehr zum Ärger der
                                Einzelhändler, die sich gegen die neuen Warenhäuser zusammenschlossen.`
                    }
                ]
            },
            {
                tag: "img",
                src: "/station_04/raetsel_01/game/Althoff_Teppichlager_01.jpg",
                alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                caption: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)."
            },
            {
                tag: "img",
                src: "/station_04/raetsel_01/game/Althoff_Teppichlager_02.jpg",
                alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                caption: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)."
            },
            {
                tag: "p",
                children: [
                    {
                        tag: "text",
                        text: `Eine Besonderheit war die Lebensmittelabteilung, die als erste ihrer Art in
                               einem deutschen Warenhaus galt. Hier wurden neben Grundnahrungsmitteln,
                               frischem Obst, teurem Champagner und Weinen, als Delikatesse geltende Hummer
                               in Dosen und sogar lebende Tiere wie junge Tauben, Gänse und `
                    },
                    {
                        tag: "Select",
                        options: [
                            { answer: "Aale", correct: true },
                            { answer: "Schweine", correct: false },
                            { answer: "Frösche", correct: false },
                        ]
                    },
                    {
                        tag: "text",
                        text: ` verkauft.`
                    }
                ]
            },
            {
                tag: "p",
                children: [
                    {
                        tag: "text",
                        text: `Die Innenausstattung des Warenhauses war ebenso beeindruckend wie das
                               Warenangebot: Wände aus `
                    },
                    {
                        tag: "Select",
                        options: [
                            { answer: "Gold", correct: false },
                            { answer: "Silber", correct: false },
                            { answer: "Marmor", correct: true },
                        ]
                    },
                    {
                        tag: "text",
                        text: `, kunstvolle Verglasungen und elegante Leuchter
                               aus Bronze sorgten für eine luxuriöse Atmosphäre. Im Modell-Salon „für die
                               Dame“ konnten die neuesten Modetrends bewundert werden, während der
                               sogenannte Erfrischungsraum mit einem neun Meter langen Buffet, einem
                               Brunnen und Tischen aus Marmor sowie Lederstühlen, die Gäste zum Verweilen
                               einlud.`
                    }
                ]
            },
            {
                tag: "img",
                src: "/station_04/raetsel_01/game/Althoff_Erfrischungsraum_01.jpg",
                alt: "Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                caption: "Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)."
            },
            {
                tag: "img",
                src: "/station_04/raetsel_01/game/Althoff_Erfrischungsraum_02.jpg",
                alt: "Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                caption: "Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)."
            },
            {
                tag: "p",
                children: [
                    {
                        tag: "text",
                        text: `Besonders waren auch die modernen `
                    },
                    {
                        tag: "Select",
                        options: [
                            { answer: "Toiletten", correct: false },
                            { answer: "Fahrstühle", correct: true },
                            { answer: "Umkleiden", correct: false },
                        ]
                    },
                    {
                        tag: "text",
                        text: ` mit ihren Kabinen aus silbergrauem
                                Ahorn. Das Treppenhaus hingegen war mit aufwendigen Glasmalereien verziert.
                                Im Zweiten Weltkrieg wurde das Gebäude stark beschädigt, aber später wieder
                                aufgebaut. Im Jahr 1920 schloss sich das Warenhaus Althoff mit einem
                                bekannten Warenhausunternehmen zusammen – ab 1936 war es unter dem Namen `
                    },
                    {
                        tag: "Select",
                        options: [
                            { answer: "Kardorf", correct: false },
                            { answer: "Karstadt", correct: true },
                            { answer: "Karwinkel", correct: false },
                        ]
                    },
                    {
                        tag: "text",
                        text: ` bekannt.`
                    }
                ]
            },
            {
                tag: "img",
                src: "/station_04/raetsel_01/game/Althoff.jpg",
                alt: "Gesamtansicht Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                caption: "Gesamtansicht Warenhaus Althoff (Foto: Stadtarchiv Dortmund)."
            }
        ],
    }
</script>

<MatchingGameComponent bind:this={matching} gameInput={{ leftHeader: data.header.left, rightHeader: data.header.right, pairs: data.data.pairs }} />
