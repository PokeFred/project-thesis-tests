<!-- Lückentext Rätsel -->
<script lang="ts">
    import AnswerBox from "../../../../../../lib/Components/Cloze/AnswerBox.svelte";
    import Cloze from "../../../../../../lib/Components/Cloze/Cloze";
    import Modal from "@skeletonlabs/skeleton"

    const cloze: Cloze = new Cloze(
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
        ]
    );

    function printSelected() {
        console.log(cloze.selected);
        console.log(cloze.sumPoints());
    }
</script>

<button on:click={printSelected}>Test</button>

<h2>Das Warenhaus Althoff – Ein Konsumtempel in Dortmund:</h2>
<p>
    Im Jahr 1904 eröffnete am Westenhellweg das von Theodor Althoff gegründete
    Warenhaus. Die Architektur war inspiriert vom berühmten Wertheim-Warenhaus
    in <AnswerBox {cloze} index={0}/> und wurde von Otto Engler entworfen. Fast <AnswerBox {cloze} index={1}/> Menschen strömten
    am Eröffnungstag ins Warenhaus. Schon bald folgte ein Erweiterungsbau am
    Hansaplatz.
</p>


<p>
    Neben Luxuswaren, wie teuren <AnswerBox {cloze} index={2}/> und einer großen Auswahl an Teppichen
    wurden auch Produkte des täglichen Bedarfs verkauft – sehr zum Ärger der
    Einzelhändler, die sich gegen die neuen Warenhäuser zusammenschlossen.
</p>

<figure>
    <img src="/Coze/Althoff_Teppichlager_01.jpg" alt="Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    <figcaption>
        Teppichlager im Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.
    </figcaption>
</figure>

<figure>
    <img src="/Coze/Althoff_Teppichlager_02.jpg" alt="Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    <figcaption>
        Teppichlager im Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.
    </figcaption>
</figure>

<p>
    Eine Besonderheit war die Lebensmittelabteilung, die als erste ihrer Art in
    einem deutschen Warenhaus galt. Hier wurden neben Grundnahrungsmitteln,
    frischem Obst, teurem Champagner und Weinen, als Delikatesse geltende Hummer
    in Dosen und sogar lebende Tiere wie junge Tauben, Gänse und <AnswerBox {cloze} index={3}/> verkauft.
</p>

<p>
    Die Innenausstattung des Warenhauses war ebenso beeindruckend wie das
    Warenangebot: Wände aus <AnswerBox {cloze} index={4}/>, kunstvolle Verglasungen und elegante Leuchter
    aus Bronze sorgten für eine luxuriöse Atmosphäre. Im Modell-Salon „für die
    Dame“ konnten die neuesten Modetrends bewundert werden, während der
    sogenannte Erfrischungsraum mit einem neun Meter langen Buffet, einem
    Brunnen und Tischen aus Marmor sowie Lederstühlen, die Gäste zum Verweilen
    einlud.
</p>

<figure>
    <img src="/Coze/Althoff_Erfrischungsraum_01.jpg" alt="Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    <figcaption>
        Erfrischungsraum im Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.
    </figcaption>
</figure>

<figure>
    <img src="/Coze/Althoff_Erfrischungsraum_02.jpg" alt="Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    <figcaption>
        Erfrischungsraum im Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.
    </figcaption>
</figure>

<p>
    Besonders waren auch die modernen <AnswerBox {cloze} index={5}/> mit ihren Kabinen aus silbergrauem
    Ahorn. Das Treppenhaus hingegen war mit aufwendigen Glasmalereien verziert.
    Im Zweiten Weltkrieg wurde das Gebäude stark beschädigt, aber später wieder
    aufgebaut. Im Jahr 1920 schloss sich das Warenhaus Althoff mit einem
    bekannten Warenhausunternehmen zusammen – ab 1936 war es unter dem Namen
    <AnswerBox {cloze} index={6}/> bekannt.
</p>

<figure>
    <img src="/Coze/Althoff.jpg" alt="Gesamtansicht Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    <figcaption>
        Gesamtansicht Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.
    </figcaption>
</figure>

<a href="./end"><button>Rätsel beenden</button></a>