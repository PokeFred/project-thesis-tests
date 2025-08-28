<!-- Lückentext Rätsel -->
<script lang="ts">
    import AnswerBox from "./AnswerBox.svelte";
    import { type Cloze, type Answer } from "./Cloze.svelte";
    // const cloze: Cloze = new Cloze(
    //     "Das Warenhaus Althoff war mit seinen 5000 m² Verkaufsfläche und etwa 500 Mitarbeitenden das größte Warenhaus außerhalb Berlins.",
    //     "Wenn Du mehr über die Innenausstattung und die im Kaufhaus angebotenen Waren erfahren möchtest, löse den folgenden Lückentext.\nJeweils ein Begriff ist der richtige und muss in die freie Lücke eingesetzt werden.",
    //     "Im Jahr 1904 eröffnete am Westenhellweg das von Theodor Althoff gegründete Warenhaus. Die Architektur war inspiriert vom berühmten Wertheim-Warenhaus in _____ und wurde von Otto Engler entworfen. Fast _____ Menschen strömten am Eröffnungstag ins Warenhaus. Schon bald folgte ein Erweiterungsbau am Hansaplatz."
    // );
    const cloze: Cloze = {
        options: [
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
    };

    let selected: (Answer | null)[] = Array(cloze.options.length).fill(null);
    function printSelected() {
        console.log(selected);
    }
</script>

<button on:click={printSelected}>Test</button>

<h2>Das Warenhaus Althoff – Ein Konsumtempel in Dortmund:</h2>
<p>
    Im Jahr 1904 eröffnete am Westenhellweg das von Theodor Althoff gegründete
    Warenhaus. Die Architektur war inspiriert vom berühmten Wertheim-Warenhaus
    in <AnswerBox options={cloze.options[0]} bind:selected={selected[0]}/> und wurde von Otto Engler entworfen. Fast <AnswerBox options={cloze.options[1]} selected={selected[1]}/> Menschen strömten
    am Eröffnungstag ins Warenhaus. Schon bald folgte ein Erweiterungsbau am
    Hansaplatz.
</p>
<!-- <p>
    Im Jahr 1904 eröffnete am Westenhellweg das von Theodor Althoff gegründete
    Warenhaus. Die Architektur war inspiriert vom berühmten Wertheim-Warenhaus
    in <button on:click={test}>_____</button> und wurde von Otto Engler entworfen. Fast _____ Menschen strömten
    am Eröffnungstag ins Warenhaus. Schon bald folgte ein Erweiterungsbau am
    Hansaplatz.
</p> -->
<p>
    Neben Luxuswaren, wie teuren _____ und einer großen Auswahl an Teppichen
    wurden auch Produkte des täglichen Bedarfs verkauft – sehr zum Ärger der
    Einzelhändler, die sich gegen die neuen Warenhäuser zusammenschlossen.
</p>

<figure>
    <img src="" alt="" />
    <figcaption>
        Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).
    </figcaption>
</figure>

<figure>
    <img src="" alt="" />
    <figcaption>
        Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).
    </figcaption>
</figure>

<p>
    Eine Besonderheit war die Lebensmittelabteilung, die als erste ihrer Art in
    einem deutschen Warenhaus galt. Hier wurden neben Grundnahrungsmitteln,
    frischem Obst, teurem Champagner und Weinen, als Delikatesse geltende Hummer
    in Dosen und sogar lebende Tiere wie junge Tauben, Gänse und _____ verkauft.
</p>
<p>
    Die Innenausstattung des Warenhauses war ebenso beeindruckend wie das
    Warenangebot: Wände aus _____, kunstvolle Verglasungen und elegante Leuchter
    aus Bronze sorgten für eine luxuriöse Atmosphäre. Im Modell-Salon „für die
    Dame“ konnten die neuesten Modetrends bewundert werden, während der
    sogenannte Erfrischungsraum mit einem neun Meter langen Buffet, einem
    Brunnen und Tischen aus Marmor sowie Lederstühlen, die Gäste zum Verweilen
    einlud.
</p>

<figure>
    <img src="" alt="" />
    <figcaption>
        Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).
    </figcaption>
</figure>

<figure>
    <img src="" alt="" />
    <figcaption>
        Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).
    </figcaption>
</figure>

<p>
    Besonders waren auch die modernen _____ mit ihren Kabinen aus silbergrauem
    Ahorn. Das Treppenhaus hingegen war mit aufwendigen Glasmalereien verziert.
    Im Zweiten Weltkrieg wurde das Gebäude stark beschädigt, aber später wieder
    aufgebaut. Im Jahr 1920 schloss sich das Warenhaus Althoff mit einem
    bekannten Warenhausunternehmen zusammen – ab 1936 war es unter dem Namen
    _____ bekannt.
</p>

<figure>
    <img src="" alt="" />
    <figcaption>
        Gesamtansicht Warenhaus Althoff (Foto: Stadtarchiv Dortmund).
    </figcaption>
</figure>