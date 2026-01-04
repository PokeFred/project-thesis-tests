<script>
    import ErrorSpottingGame from "$components/Games/ErrorSpottingGame/ErrorSpottingGame.svelte";
    import MatchingGameComponent from "$components/Games/MatchingGame/MatchingGameComponent.svelte";
    import MatchingGameResult from "$components/Games/MatchingGame/MatchingGameResult.svelte";
    import MultipleChoiceResult from "$components/Games/MultipleChoiceGame/MultipleChoiceResult.svelte";
    import PuzzleGame from "$components/Games/PuzzleGame/PuzzleGame.svelte";
    import PuzzleGameResult from "$components/Games/PuzzleGame/PuzzleGameResult.svelte";
    import WordGuessingComponent from "$components/Games/WordGuessingGame/WordGuessingComponent.svelte";

// const gameInputCloze: GameInput = {
//         content: [
//             {
//                 tag: "h2",
//                 children: [
//                     {
//                         tag: "text",
//                         text: `Das Warenhaus Althoff – Ein Konsumtempel in Dortmund:`
//                     }
//                 ]
//             },
//             {
//                 tag: "p",
//                 children: [
//                     {
//                         tag: "text",
//                         text: `Im Jahr 1904 eröffnete am Westenhellweg das von Theodor Althoff gegründete
//                                Warenhaus. Die Architektur war inspiriert vom berühmten Wertheim-Warenhaus
//                                in `
//                     },
//                     {
//                         tag: "Select",
//                         options: [
//                             { answer: "London", correct: false },
//                             { answer: "Paris", correct: false },
//                             { answer: "Berlin", correct: true },
//                         ]
//                     },
//                     {
//                         tag: "text",
//                         text: ` und wurde von Otto Engler entworfen. Fast `
//                     },
//                     {
//                         tag: "Select",
//                         options: [
//                             { answer: "10.000", correct: true },
//                             { answer: "100.000", correct: false },
//                             { answer: "1.000", correct: false },
//                         ]
//                     },
//                     {
//                         tag: "text",
//                         text: ` Menschen strömten
//                                 am Eröffnungstag ins Warenhaus. Schon bald folgte ein Erweiterungsbau am
//                                 Hansaplatz.`
//                     }
//                 ]
//             },
//             {
//                 tag: "p",
//                 children: [
//                     {
//                         tag: "text",
//                         text: `Neben Luxuswaren, wie teuren `
//                     },
//                     {
//                         tag: "Select",
//                         options: [
//                             { answer: "Autos", correct: false },
//                             { answer: "Edelsteinen", correct: false },
//                             { answer: "Schmuckstücken", correct: true },
//                         ]
//                     },
//                     {
//                         tag: "text",
//                         text: ` und einer großen Auswahl an Teppichen
//                                 wurden auch Produkte des täglichen Bedarfs verkauft – sehr zum Ärger der
//                                 Einzelhändler, die sich gegen die neuen Warenhäuser zusammenschlossen.`
//                     }
//                 ]
//             },
//             {
//                 tag: "img",
//                 src: "/station_04/raetsel_01/game/Althoff_Teppichlager_01.jpg",
//                 alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
//             },
//             {
//                 tag: "img",
//                 src: "/station_04/raetsel_01/game/Althoff_Teppichlager_02.jpg",
//                 alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
//                 caption: {
//                     caption: "Beide Bilder: Teppichlager im Warenhaus Althoff",
//                     src: "Stadtarchiv Dortmund"
//                 }
//             },
//             {
//                 tag: "p",
//                 children: [
//                     {
//                         tag: "text",
//                         text: `Eine Besonderheit war die Lebensmittelabteilung, die als erste ihrer Art in
//                                einem deutschen Warenhaus galt. Hier wurden neben Grundnahrungsmitteln,
//                                frischem Obst, teurem Champagner und Weinen, als Delikatesse geltende Hummer
//                                in Dosen und sogar lebende Tiere wie junge Tauben, Gänse und `
//                     },
//                     {
//                         tag: "Select",
//                         options: [
//                             { answer: "Aale", correct: true },
//                             { answer: "Schweine", correct: false },
//                             { answer: "Frösche", correct: false },
//                         ]
//                     },
//                     {
//                         tag: "text",
//                         text: ` verkauft.`
//                     }
//                 ]
//             },
//             {
//                 tag: "p",
//                 children: [
//                     {
//                         tag: "text",
//                         text: `Die Innenausstattung des Warenhauses war ebenso beeindruckend wie das
//                                Warenangebot: Wände aus `
//                     },
//                     {
//                         tag: "Select",
//                         options: [
//                             { answer: "Gold", correct: false },
//                             { answer: "Silber", correct: false },
//                             { answer: "Marmor", correct: true },
//                         ]
//                     },
//                     {
//                         tag: "text",
//                         text: `, kunstvolle Verglasungen und elegante Leuchter
//                                aus Bronze sorgten für eine luxuriöse Atmosphäre. Im Modell-Salon „für die
//                                Dame“ konnten die neuesten Modetrends bewundert werden, während der
//                                sogenannte Erfrischungsraum mit einem neun Meter langen Buffet, einem
//                                Brunnen und Tischen aus Marmor sowie Lederstühlen, die Gäste zum Verweilen
//                                einlud.`
//                     }
//                 ]
//             },
//             {
//                 tag: "img",
//                 src: "/station_04/raetsel_01/game/Althoff_Erfrischungsraum_01.jpg",
//                 alt: "Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
//             },
//             {
//                 tag: "img",
//                 src: "/station_04/raetsel_01/game/Althoff_Erfrischungsraum_02.jpg",
//                 alt: "Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
//                 caption: {
//                     caption: "Beide Bilder: Erfrischungsraum im Warenhaus Althoff",
//                     src: "Stadtarchiv Dortmund"
//                 }
//             },
//             {
//                 tag: "p",
//                 children: [
//                     {
//                         tag: "text",
//                         text: `Besonders waren auch die modernen `
//                     },
//                     {
//                         tag: "Select",
//                         options: [
//                             { answer: "Toiletten", correct: false },
//                             { answer: "Fahrstühle", correct: true },
//                             { answer: "Umkleiden", correct: false },
//                         ]
//                     },
//                     {
//                         tag: "text",
//                         text: ` mit ihren Kabinen aus silbergrauem
//                                 Ahorn. Das Treppenhaus hingegen war mit aufwendigen Glasmalereien verziert.
//                                 Im Zweiten Weltkrieg wurde das Gebäude stark beschädigt, aber später wieder
//                                 aufgebaut. Im Jahr 1920 schloss sich das Warenhaus Althoff mit einem
//                                 bekannten Warenhausunternehmen zusammen – ab 1936 war es unter dem Namen `
//                     },
//                     {
//                         tag: "Select",
//                         options: [
//                             { answer: "Kardorf", correct: false },
//                             { answer: "Karstadt", correct: true },
//                             { answer: "Karwinkel", correct: false },
//                         ]
//                     },
//                     {
//                         tag: "text",
//                         text: ` bekannt.`
//                     }
//                 ]
//             },
//             {
//                 tag: "img",
//                 src: "/station_04/raetsel_01/game/Althoff.jpg",
//                 alt: "Gesamtansicht Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
//                 caption: {
//                     caption: "Gesamtansicht Warenhaus Althoff",
//                     src: "Stadtarchiv Dortmund"
//                 }
//             }
//         ],
//     }
</script>

<ErrorSpottingGame input={{path: "/station_03/raetsel_03/game"}}/>

<!-- <PuzzleGame gameInput={{
    path: "/station_05/raetsel_01/game"
}}/> -->

<!-- <WordGuessingComponent gameInput={{questions:[]}} /> -->

<!-- <PuzzleGame gameInput={{path:"/station_01/raetsel_02/game"}} setSubmitable={()=>{}}/> -->

<!-- <PuzzleGameResult result={
{
    placed: [],
    path:"/station_01/raetsel_02/game/",
    alt: "asdasd" 
}}/> -->

<!-- <MatchingGameComponent gameInput={ -->
<!-- <MatchingGameResult result={
{
    leftHeader: "HANDWERK",
    rightHeader: "ZUNFT",
    pairs: [
        {
            left: "Metall-Verarbeitung",
            right: "asasdasdd"
        },
        {
            left: "asd",
            right: "asd"
        },
        {
            left: "asd",
            right: "asd"
        },
        {
            left: "asd",
            right: "asd"
        },
        {
            left: "asd",
            right: "asd"
        },
        {
            left: "asd",
            right: "asd"
        },
    ],
    answers: []
}} 
/> -->

<!-- <div class="bg-primary">
<MultipleChoiceResult result={{answers:[
    {answer: "asd", selected: true},
    {answer: "asd", selected: false}
]}}/>
</div> -->