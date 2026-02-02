<script lang="ts">
    import type { GameData, SavingData } from "."
    import GameComponent from "$components/Games/Cloze/ClozeComponent.svelte"
    import type { GameInput as Input } from "$components/Games/Cloze"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameData, setSubmitable: () => void } = $props()

    let game: GameComponent
    export function getSubmitData(): SavingData { return game.getSubmitData() }
    export function getSubmitScore(): number { return game.getSubmitScore() }

    onMount((): void => {
        // TODO (Cedric) remove after meeting
        //setSubmitable()
    })

    // TODO cedric: in die config rein
    const input: Input = {
        content: [
            { tag: "h2", children: [{ tag: "text", text: "Das Warenhaus Althoff - Ein Konsumtempel in Dortmund:"}] },
            {
                tag: "p",
                children: [
                    {
                        tag: "text",
                        text: `Im Jahr 1904 eröffnete am Westenhellweg das von Theodor Althoff gegründete Warenhaus. Die Architektur war inspiriert vom berühmten Wertheim-Warenhaus in `
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
                        text: `und wurde von Otto Engler entworfen. Mit einer Verkaufsfläche von 5000 m² und etwa 500 Mitarbeitenden war es das damals größte deutsche Warenhaus außerhalb Berlins. Fast`
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
                        text: `Menschen strömten am Eröffnungstag in das Warenhaus. Schon bald folgte ein Erweiterungsbau am Hansaplatz.`
                    }
                ]
            },
            {
                tag: "img",
                src: "/station_03/raetsel_01/image_00.jpg",
                alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                caption: {
                    caption: "Warenhaus Althoff an der Hansastraße, Ecke Westenhellweg",
                    src: "Stadtarchiv Dortmund"
                }
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
                        text: `und einer großen Auswahl an Teppichen wurden auch Produkte des täglichen Bedarfs verkauft – sehr zum Ärger der Einzelhändler, die sich gegen die neuen Warenhäuser zusammenschlossen.`
                    }
                ]
            },
            {
                tag: "img",
                src: "/station_03/raetsel_01/image_01.jpg",
                alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                caption: {
                    src: "Stadtarchiv Dortmund"
                }
            },
            {
                tag: "img",
                src: "/station_03/raetsel_01/image_02.jpg",
                alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                caption: {
                    caption: "Beide Bilder: Teppichlager im Warenhaus Althoff",
                    src: "Stadtarchiv Dortmund"
                }
            },
            {
                tag: "p",
                children: [
                    {
                        tag: "text",
                        text: `Eine Besonderheit war die Lebensmittelabteilung, die als erste ihrer Art in einem deutschen Warenhaus galt. Hier wurden neben Grundnahrungsmitteln, frischem Obst, teurem Champagner und Weinen, als Delikatesse geltende Hummer in Dosen und sogar lebende Tiere wie junge Tauben, Gänse und`
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
                        text: `verkauft.`
                    }
                ]
            },
            {
                tag: "img",
                src: "/station_03/raetsel_01/image_03.jpg",
                alt: "Lebensmittelabteilung im Warenhaus Althoff (Sammlung Klaus Winter).",
                caption: {
                    caption: "Lebensmittelabteilung im Warenhaus Althoff",
                    src: "Sammlung Klaus Winter"
                }
            },
            {
                tag: "img",
                src: "/station_03/raetsel_01/image_04.jpg",
                alt: "Wein und Likörabteilung Warenhaus Althoff (Sammlung Klaus Winter).",
                caption: {
                    caption: "Wein und Likörabteilung Warenhaus Althoff",
                    src: "Sammlung Klaus Winter"
                }
            },
            {
                tag: "p",
                children: [
                    {
                        tag: "text",
                        text: `Die Innenausstattung des Warenhauses war ebenso beeindruckend wie das Warenangebot: Wände aus`
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
                        text: `, kunstvolle Verglasungen und elegante Leuchter aus Bronze sorgten für eine luxuriöse Atmosphäre. Im Modell-Salon „für die Dame“ konnten die neuesten Modetrends bewundert werden, während der sogenannte Erfrischungsraum mit einem neun Meter langen Buffet, einem Brunnen und Tischen aus Marmor sowie Lederstühlen, die Gäste zum Verweilen einlud.`
                    }
                ]
            },
            {
                tag: "img",
                src: "/station_03/raetsel_01/image_05.jpg",
                alt: "Erfrischungsraum im Warenhaus Althoff (Stadtarchiv Dortmund).",
                caption: {
                    src: "Stadtarchiv Dortmund"
                }
            },
            {
                tag: "img",
                src: "/station_03/raetsel_01/image_06.jpg",
                alt: "Erfrischungsraum im Warenhaus Althoff (Stadtarchiv Dortmund).",
                caption: {
                    caption: "Beide Bilder: Erfrischungsraum im Warenhaus Althoff",
                    src: "Stadtarchiv Dortmund"
                }
            },
            { tag: "img", src: "/station_03/raetsel_01/image_07.png", alt: "Außergewöhnliche Innenarchitektur: Der Lichthof im Warenhaus Althoff (Sammlung Klaus Winter).", caption: { caption: "Außergewöhnliche Innenarchitektur: Der Lichthof im Warenhaus Althoff", src: "Sammlung Klaus Winter" } },
            { tag: "img", src: "/station_03/raetsel_01/image_08.png", alt: "Kurzwaren Abteilung mit verschiedenem textilem Zubehör im Warenhaus Althoff (Sammlung Klaus Winter).", caption: { caption: "Kurzwaren Abteilung mit verschiedenem textilem Zubehör im Warenhaus Althoff", src: "Sammlung Klaus Winter" } },
            {
                tag: "p",
                children: [
                    { tag: "text", text: "Besonders waren auch die modernen" },
                    { tag: "Select", options: [{ answer: "Toiletten", correct: false }, { answer: "Fahrstühle", correct: true }, { answer: "Umkleiden", correct: false }] },
                    {
                        tag: "text",
                        text: `mit ihren Kabinen aus silbergrauem Ahorn. Das Treppenhaus hingegen war mit aufwendigen Glasmalereien verziert. Im Jahr 1920 schloss sich das Warenhaus Althoff mit einem bekannten Warenhausunternehmen zusammen – ab 1936 war es unter dem Namen`
                    },
                    { tag: "Select", options: [{ answer: "Kardorf", correct: false }, { answer: "Karstadt", correct: true }, { answer: "Karwinkel", correct: false }] },
                    { tag: "text", text: "bekannt. Im Zweiten Weltkrieg wurde das Gebäude stark beschädigt, aber später wieder aufgebaut. Heute gehört das ehemalige Warenhaus Althoff zur Warenhauskette GALERIA. Diese entstand 2020 aus dem Zusammenschluss von Karstadt und Kaufhof." }
                ]
            },
            { tag: "img", src: "/station_03/raetsel_01/image_09.jpg", alt: "Der Erweiterungsbau des ehemaligen Warenhauses Althoff steht auch heute noch (Foto: Sophie Ullrich).", caption: { caption: "Der Erweiterungsbau des ehemaligen Warenhauses Althoff steht auch heute noch", src: "Sophie Ullrich" } }
        ]
    }
</script>

<GameComponent bind:this={game} input={input} />
