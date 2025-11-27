<script lang="ts">
    import { goto, preloadCode, preloadData} from "$app/navigation";
    import Modal from "$components/Modal.svelte";
    import AnswerBox from "$components/Games/MatchingGame/AnswerBox.svelte";
    import { dev } from "$app/environment";
    import { quiz } from "../Quiz"
    import Fullscreen from "$components/Fullscreen.svelte";
    import GameHeader from "$components/Games/GameHeader.svelte";
    import GameFooter from "$components/Games/GameFooter.svelte";
    
    quiz.reset();

    // Github pages
    const GITHUB_PAGES_URL: string = dev ? "" : "/project-thesis-tests/prototype";

    let showModal: () => void = $state(()=>{});

    const data = {
        stitle: "ASD",
        completion: 0,
        identifier: "asd",
        text: "Text..."
    }
</script>

<GameHeader stitle={data.stitle} completion={data.completion} identifier={data.identifier} text={data.text} />

<h2 class="underline">Das Warenhaus Althoff – Ein Konsumtempel in Dortmund:</h2>
<p class="my-4 w-full h-auto text-sm">
    Im Jahr 1904 eröffnete am Westenhellweg das von Theodor Althoff gegründete
    Warenhaus. Die Architektur war inspiriert vom berühmten Wertheim-Warenhaus
    in <AnswerBox matchingGame={quiz} index={0}/> und wurde von Otto Engler entworfen. Fast <AnswerBox matchingGame={quiz} index={1}/> Menschen strömten
    am Eröffnungstag ins Warenhaus. Schon bald folgte ein Erweiterungsbau am
    Hansaplatz.
</p>

<p class="my-4 w-full h-auto text-sm">
    Neben Luxuswaren, wie teuren <AnswerBox matchingGame={quiz} index={2}/> und einer großen Auswahl an Teppichen
    wurden auch Produkte des täglichen Bedarfs verkauft – sehr zum Ärger der
    Einzelhändler, die sich gegen die neuen Warenhäuser zusammenschlossen.
</p>

<!-- Bild zoom wenn angeklickt? -->
<figure>
    <Fullscreen>
        <img src={GITHUB_PAGES_URL + "/station_04/raetsel_01/game/Althoff_Teppichlager_01.jpg"} alt="Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    </Fullscreen>
    <figcaption class="text-sm">Teppichlager im Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.</figcaption>
</figure>

<figure>
    <Fullscreen>
        <img src={GITHUB_PAGES_URL + "/station_04/raetsel_01/game/Althoff_Teppichlager_02.jpg"} alt="Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    </Fullscreen>
    <figcaption class="text-sm">Teppichlager im Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.</figcaption>
</figure>

<p class="my-4 w-full h-auto text-sm">
    Eine Besonderheit war die Lebensmittelabteilung, die als erste ihrer Art in
    einem deutschen Warenhaus galt. Hier wurden neben Grundnahrungsmitteln,
    frischem Obst, teurem Champagner und Weinen, als Delikatesse geltende Hummer
    in Dosen und sogar lebende Tiere wie junge Tauben, Gänse und <AnswerBox matchingGame={quiz} index={3}/> verkauft.
</p>

<p class="my-4 w-full h-auto text-sm">
    Die Innenausstattung des Warenhauses war ebenso beeindruckend wie das
    Warenangebot: Wände aus <AnswerBox matchingGame={quiz} index={4}/>, kunstvolle Verglasungen und elegante Leuchter
    aus Bronze sorgten für eine luxuriöse Atmosphäre. Im Modell-Salon „für die
    Dame“ konnten die neuesten Modetrends bewundert werden, während der
    sogenannte Erfrischungsraum mit einem neun Meter langen Buffet, einem
    Brunnen und Tischen aus Marmor sowie Lederstühlen, die Gäste zum Verweilen
    einlud.
</p>

<figure>
    <Fullscreen>
        <img src={GITHUB_PAGES_URL + "/station_04/raetsel_01/game/Althoff_Erfrischungsraum_01.jpg"} alt="Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    </Fullscreen>
    <figcaption class="text-sm">Erfrischungsraum im Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.</figcaption>
</figure>

<figure>
    <Fullscreen>
        <img src={GITHUB_PAGES_URL + "/station_04/raetsel_01/game/Althoff_Erfrischungsraum_02.jpg"} alt="Erfrischungsraum im Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    </Fullscreen>
    <figcaption class="text-sm">Erfrischungsraum im Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.</figcaption>
</figure>

<p class="my-4 w-full h-auto text-sm">
    Besonders waren auch die modernen <AnswerBox matchingGame={quiz} index={5}/> mit ihren Kabinen aus silbergrauem
    Ahorn. Das Treppenhaus hingegen war mit aufwendigen Glasmalereien verziert.
    Im Zweiten Weltkrieg wurde das Gebäude stark beschädigt, aber später wieder
    aufgebaut. Im Jahr 1920 schloss sich das Warenhaus Althoff mit einem
    bekannten Warenhausunternehmen zusammen – ab 1936 war es unter dem Namen
    <AnswerBox matchingGame={quiz} index={6}/> bekannt.
</p>

<figure>
    <Fullscreen>
        <img src={GITHUB_PAGES_URL + "/station_04/raetsel_01/game/Althoff.jpg"} alt="Gesamtansicht Warenhaus Althoff (Foto: Stadtarchiv Dortmund)." />
    </Fullscreen>
    <figcaption class="text-sm">Gesamtansicht Warenhaus Althoff <cite>(Foto: Stadtarchiv Dortmund)</cite>.</figcaption>
</figure>

<GameFooter quiz={quiz}>
    <p>Möchtest du dieses Rätsel wirklich beenden?</p>
     {#if quiz.Options.length != quiz.Selected.filter((e)=> e != undefined).length}
        <p>Es sind noch nicht alle Felder ausgefüllt.</p>
     {/if}
</GameFooter>