<!-- Lückentext Rätsel -->
<script lang="ts">
    import { goto, preloadCode, preloadData} from "$app/navigation";
    import Modal from "$components/Modal.svelte";
    import AnswerBox from "$components/Cloze/AnswerBox.svelte"
    import Cloze from "$components/Cloze/Cloze.svelte"
    import { dev } from "$app/environment";
    import { gameState } from "$lib/State.svelte";
    
    // Github pages
    const GITHUB_PAGES_URL: string = dev ? "" : "/project-thesis-tests/prototype";

    const cloze: Cloze = new Cloze(
        gameState.stationStates[3].quizStates[2],
        [
            [
                { answer: "London", correct: false },
                { answer: "Paris", correct: false },
                { answer: "Berlin", correct: true },
            ],
            [
                { answer: "10.000", correct: true },
                { answer: "100.000", correct: false },
                { answer: "1.000", correct: false },
            ],
            [
                { answer: "Autos", correct: false },
                { answer: "Edelsteinen", correct: false },
                { answer: "Schmuckstücken", correct: true },
            ],
            [
                { answer: "Aale", correct: true },
                { answer: "Schweine", correct: false },
                { answer: "Frösche", correct: false },
            ],
            [
                { answer: "Gold", correct: false },
                { answer: "Silber", correct: false },
                { answer: "Marmor", correct: true },
            ],
            [
                { answer: "Toiletten", correct: false },
                { answer: "Fahrstühle", correct: true },
                { answer: "Umkleiden", correct: false },
            ],
            [
                { answer: "Kardorf", correct: false },
                { answer: "Karstadt", correct: true },
                { answer: "Karwinkel", correct: false },
            ],
        ],

        [
            "Es geht hier um einen Vergleich in Deutschland…",
            `Zum Vergleich: 
            Das Michigan Stadium in den USA ist das größte Stadion der USA und hat 107.601 Plätze, dort würde die Menschenmenge also hineinpassen.

            Eng stehend braucht eine Person etwa 0,5 m² Platz, 1.000 Menschen brauchen daher rund 500 m². Zur Erinnerung: Das Warenhaus Althoff bot 5000 m² Platz!`,
            "Es geht um einen zusammenfassenden Begriff.",
            "Die Tiere, um die es hier geht, wurden in der Fischhalle angeboten.",
            "Zwei der drei Materialien sind selten, bis sehr selten in der Erdkruste zu finden. Eines ist ein metamorphes Gestein, das aus Kalkstein entsteht und in klassischem Sinn nicht selten ist.",
            "Lies den zweiten Satz aufmerksam und überlege noch einmal, worauf sich der erste Satz am ehesten beziehen könnte.",
            "Welcher Name einer großen Kaufhauskette könnte Dir schon einmal in der Stadt begegnet sein?"
        ]
    );

    function printSelected(): void {
    //     console.log(cloze.selected); // muss testen ob undefined (disabled option könnte umgehen werden)
    //     console.log(cloze.selected.filter((e)=> e != undefined).length)
    }

    let showModal: () => void = $state(()=>{});

</script>

<!-- <button onclick={printSelected}>Test</button> -->

<h2 class="underline">Das Warenhaus Althoff – Ein Konsumtempel in Dortmund:</h2>
<p class="my-4 w-full h-auto text-sm">
    Im Jahr 1904 eröffnete am Westenhellweg das von Theodor Althoff gegründete
    Warenhaus. Die Architektur war inspiriert vom berühmten Wertheim-Warenhaus
    in <AnswerBox {cloze} index={0}/> und wurde von Otto Engler entworfen. Fast <AnswerBox {cloze} index={1}/> Menschen strömten
    am Eröffnungstag ins Warenhaus. Schon bald folgte ein Erweiterungsbau am
    Hansaplatz.
</p>

<p class="my-4 w-full h-auto text-sm">
    Neben Luxuswaren, wie teuren <AnswerBox {cloze} index={2}/> und einer großen Auswahl an Teppichen
    wurden auch Produkte des täglichen Bedarfs verkauft – sehr zum Ärger der
    Einzelhändler, die sich gegen die neuen Warenhäuser zusammenschlossen.
</p>

<!-- Bild zoom wenn angeklickt? -->
<figure>
    <img src={GITHUB_PAGES_URL + "/Coze/Althoff_Teppichlager_01.jpg"} alt="Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    <figcaption class="text-sm">Teppichlager im Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.</figcaption>
</figure>

<figure>
    <img src={GITHUB_PAGES_URL + "/Coze/Althoff_Teppichlager_02.jpg"} alt="Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    <figcaption class="text-sm">Teppichlager im Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.</figcaption>
</figure>

<p class="my-4 w-full h-auto text-sm">
    Eine Besonderheit war die Lebensmittelabteilung, die als erste ihrer Art in
    einem deutschen Warenhaus galt. Hier wurden neben Grundnahrungsmitteln,
    frischem Obst, teurem Champagner und Weinen, als Delikatesse geltende Hummer
    in Dosen und sogar lebende Tiere wie junge Tauben, Gänse und <AnswerBox {cloze} index={3}/> verkauft.
</p>

<p class="my-4 w-full h-auto text-sm">
    Die Innenausstattung des Warenhauses war ebenso beeindruckend wie das
    Warenangebot: Wände aus <AnswerBox {cloze} index={4}/>, kunstvolle Verglasungen und elegante Leuchter
    aus Bronze sorgten für eine luxuriöse Atmosphäre. Im Modell-Salon „für die
    Dame“ konnten die neuesten Modetrends bewundert werden, während der
    sogenannte Erfrischungsraum mit einem neun Meter langen Buffet, einem
    Brunnen und Tischen aus Marmor sowie Lederstühlen, die Gäste zum Verweilen
    einlud.
</p>

<figure>
    <img src={GITHUB_PAGES_URL + "/Coze/Althoff_Erfrischungsraum_01.jpg"} alt="Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    <figcaption class="text-sm">Erfrischungsraum im Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.</figcaption>
</figure>

<figure>
    <img src={GITHUB_PAGES_URL + "/Coze/Althoff_Erfrischungsraum_02.jpg"} alt="Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    <figcaption class="text-sm">Erfrischungsraum im Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.</figcaption>
</figure>

<p class="my-4 w-full h-auto text-sm">
    Besonders waren auch die modernen <AnswerBox {cloze} index={5}/> mit ihren Kabinen aus silbergrauem
    Ahorn. Das Treppenhaus hingegen war mit aufwendigen Glasmalereien verziert.
    Im Zweiten Weltkrieg wurde das Gebäude stark beschädigt, aber später wieder
    aufgebaut. Im Jahr 1920 schloss sich das Warenhaus Althoff mit einem
    bekannten Warenhausunternehmen zusammen – ab 1936 war es unter dem Namen
    <AnswerBox {cloze} index={6}/> bekannt.
</p>

<figure>
    <img src={GITHUB_PAGES_URL + "/Coze/Althoff.jpg"} alt="Gesamtansicht Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    <figcaption class="text-sm">Gesamtansicht Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.</figcaption>
</figure>

<Modal bind:show={showModal} confirmButtonText={"ja"} closeButtonText={"Nein"} onConfirm={()=> {
        cloze.complete();
        goto("./end"); 
    }}>
     <p>Möchtest du dieses Rätsel wirklich beenden?</p>
     {#if cloze.options.length != cloze.selected.filter((e)=> e != undefined).length}
        <p>Es sind noch nicht alle Felder ausgefüllt.</p>
     {/if}
</Modal>
<button onclick={showModal} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Rätsel beenden</button>