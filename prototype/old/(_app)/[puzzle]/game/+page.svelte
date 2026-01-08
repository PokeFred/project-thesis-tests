<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import { add } from "$stores"
    import GpsIntroduction from "$components/puzzle/gps/introduction.svelte"
    import GpsGame from "$components/puzzle/gps/game.svelte"
    import TextSelectIntroduction from "$components/puzzle/textSelect/introduction.svelte"
    import TextSelectGame from "$components/puzzle/textSelect/game.svelte"
    import DoubleSelectIntroduction from "$components/puzzle/matchingGame/introduction.svelte"
    import DoubleSelectGame from "$components/puzzle/matchingGame/game.svelte"
    import MultipleChoiceIntroduction from "$components/puzzle/multipleChoice/introduction.svelte"
    import Modal from "./ConfirmModal.svelte"
    import MultipleChoiceGame from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte";
    import PuzzleGame from "$components/Games/PuzzleGame/PuzzleGame.svelte";
    import MatchingGame from "$components/Games/MatchingGame/MatchingGameComponent.svelte";
    import ClozeGame from "$components/Games/Cloze/ClozeComponent.svelte";
    import type { GameInput } from "$components/Games/Cloze";

    let { data }: PageProps = $props()

    // svelte-ignore non_reactive_update
    let gps: GpsGame
    // svelte-ignore non_reactive_update
    let textSelect: TextSelectGame
    // svelte-ignore non_reactive_update
    let matchingGame: MatchingGame
    // svelte-ignore non_reactive_update
    let multipleChoice: MultipleChoiceGame

    let submitable: boolean = $state<boolean>(false)
    function setSubmitable(): void {
        submitable = true
    }

    let modal: Modal
    function submit(): void {
        let rScore: number = 0
        let rdata: any = {}

        if (data.puzzle.type === "gps-puzzle") {
            rScore = gps.getSubmitScore()
            rdata = gps.getSubmitData()
        }
        if (data.puzzle.type === "text-select-puzzle") {
            //rScore = textSelect.getSubmitScore()
            rdata = textSelect.getSubmitData()
        }
        if (data.puzzle.type === "double-select-puzzle") {
            rScore = matchingGame.getSubmitScore()
            rdata = matchingGame.getSubmitData()
        }
        if (data.puzzle.type === "multiple-choice-puzzle") {
            rScore = multipleChoice.getSubmitScore()
            rdata = multipleChoice.getSubmitData()
        }

    }
    const gameInputCloze: GameInput = {
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

<Modal bind:this={modal} onConfirm={submit} />

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">{data.station.title}</span>
        <button onclick={() => goto(`/app/stations/${data.station.identifier}`)} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faAngleLeft} class="w-6 h-6" />
        </button>
    </div>
    <div class="my-4 w-full h-auto text-primary bg-secondary rounded-full grid grid-cols-[auto_80px_16px] gap-4 px-6 py-2">
        <span class="text-lg font-bold text-left">{data.puzzle.title}</span>
        <div class="w-full h-7 flex justify-center items-center">
            <div class="w-full h-fit bg-primary border rounded-full p-0.5">
                <div class="w-full h-4 bg-secondary border rounded-full"></div>
            </div>
        </div>
        <span class="text-lg font-bold text-right">%</span>
    </div>
    {#if data.puzzle.type === "gps-puzzle"}
        <GpsIntroduction data={data.introduction} />
        <GpsGame bind:this={gps} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "text-select-puzzle"}
        <TextSelectIntroduction data={data.introduction} />
        <TextSelectGame bind:this={textSelect} data={data.game} setSubmitable={setSubmitable} />
    {/if}
    {#if data.puzzle.type === "double-select-puzzle"}
        <DoubleSelectIntroduction data={data.introduction} />
        <MatchingGame bind:this={matchingGame} gameInput={{
            leftHeader: "Handwerk",
            rightHeader: "Zünfte",
            pairs: data.game.data.pairs
            }} {setSubmitable}/>
    {/if}
    {#if data.puzzle.type === "multiple-choice-puzzle"}
        <MultipleChoiceIntroduction data={data.introduction} />
        <MultipleChoiceGame bind:this={multipleChoice} gameInput={data.game} setSubmitable={setSubmitable} />
    {/if}
    <div class="mt-3 mx-auto w-fit h-auto">
        <button onclick={(): void => modal.openModal()} class="w-full h-auto text-primary bg-secondary rounded-xl px-16 py-2 {submitable ? "cursor-pointer active:scale-95" : "opacity-50 cursor-default"}" disabled={!submitable}>Ergebnisse anzeigen</button>
    </div>
</div>
