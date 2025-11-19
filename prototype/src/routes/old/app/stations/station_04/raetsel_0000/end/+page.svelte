<script lang="ts">
    import type { GameResultAccordion } from "$components/accordions/GameResultAccordion";
    import GameResultAccordionComponent from "$components/accordions/GameResultAccordion.svelte";
    import GameHeader from "$components/Games/GameHeader.svelte";
    import PointSummary from "$components/Games/PointSummary.svelte";
    import { POINTS } from "$lib/State.svelte";
    import { quiz, handwerk } from "../Quiz";

    const selected = quiz.Selected.filter((answer)=> answer ? true : false);
    const descriptions: string[] = selected.map((answer, i)=> `${handwerk[i]}:  ${answer.answer}`);
    const points: number[] = selected.map((answer)=> answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);

    const text: string[] = [
        `Ordne den Zünften das richtige Handwerk zu. Aber Achtung: es gibt nur sieben richtige
         Paare! Es wurden drei Zünfte dazu gemischt. Schaffst Du es, die richtigen Paare zu
         finden?`,
        `Zünfte: Schmied, Fleischer, Bäcker, Bader, Tuchmacher, Gerber, Schuhmacher, Krämer,
         Fettkrämer, Abdecker`,
        `Handwerk: Metallverarbeitung, Getreideverarbeitung, Fleischverarbeitung,
         Lederverarbeitung, Feinlederverarbeitung, Gemischtwarenhandel, Handel mit Butter, Öl,
         Speck etc.`
    ]

    const gameResultAccordion: GameResultAccordion = [
            {
                type: "question",
                question: "Abdecker:",
                answers: [
                    {
                        type: "paragraph",
                        content: `So wurden Personen genannt, die mit der Beseitigung und Verwertung (abdecken=abhäuten)
                                  von Tierkadavern beschäftigt waren. Einige Teile des Kadavers konnten verwertet werden.
                                  Daraus entstanden Produkte wie Fette, Leim, Knochenmehl, Seife, Salmiak, Bleichmittel und
                                  Viehfutter. Das Gewerbe galt lange Zeit als „unehrlich“. Das bedeutet, dass die Abdecker
                                  sozial ausgegrenzt wurden. Sie mussten außerhalb der Stadt wohnen.`,
                    },
                ]
            },
            {
                type: "question",
                question: "Bader:",
                answers: [
                    {
                        type: "paragraph",
                        content: `Bader waren – oft in Konkurrenz oder Zusammenarbeit mit den sogenannten Barbieren – bis
                                  ins 19. Jahrhundert für die Körperpflege der Bevölkerung zuständig. Sie betrieben
                                  Badestuben, die nicht nur Orte der Reinigung, sondern auch der Geselligkeit waren. Darüber
                                  hinaus behandelten Bader kleinere Wunden und alltägliche Beschwerden, zogen Zähne oder
                                  legten Schröpfköpfe an. Ihre Tätigkeit lag damit im Schnittfeld zwischen Handwerk, Medizin
                                  und öffentlicher Hygiene.`,
                    },
                ]
            },
            {
                type: "question",
                question: "Gerber:",
                answers: [
                    {
                        type: "paragraph",
                        content: `Gerber verarbeiteten rohe Tierhäute zu haltbarem Leder, das anschließend von
                                  Schuhmachern, Sattlern oder Täschnern weiterverarbeitet wurde. Das Handwerk war wegen
                                  der starken Gerüche und der Nutzung von Gerbflüssigkeiten wie Kalk, Urin oder Lohe
                                  (zerkleinerte Baumrinde) wenig angesehen. Gerbereien lagen deshalb oft am Stadtrand oder
                                  an Flussufern, wo es Wasser zum Spülen der Häute gab. In vielen Städten entstanden
                                  sogenannte Gerbergassen, in denen sich mehrere Werkstätten konzentrierten.`,
                    },
                    {
                        type: "image",
                        src: "/station_01/raetsel_02/image_01.jpg",
                        alt: `Die Gerberstraße in Dortmund. Ausgrabungen im Jahr 2005 förderten zwei Gerbergruben und zwei Brunnen zu
                              Tage. In den Brunnen wurden die Tierhäute gereinigt. Die Gerbergasse lag vor der ehemaligen Stadtmauer (heute
                              am Wall erkennbar). Weißt Du, wo die Straße ist? (Foto: Sophie Ullrich)`,
                        caption: `Die Gerberstraße in Dortmund. Ausgrabungen im Jahr 2005 förderten zwei Gerbergruben und zwei Brunnen zu
                                  Tage. In den Brunnen wurden die Tierhäute gereinigt. Die Gerbergasse lag vor der ehemaligen Stadtmauer (heute
                                  am Wall erkennbar). Weißt Du, wo die Straße ist? (Foto: Sophie Ullrich)`
                    }
                ]
            },
        ];

    const data={
        stitle: "ALTER MARKT",
        identifier: "Rätsel 2"
    }
</script>

<GameHeader stitle={data.stitle} identifier={data.identifier} completion={0} text={text} />

<PointSummary {descriptions} {points} />

<section class="mt-4 mb-4 text-sm text-green-500">
    <h4>Richtige Paare:</h4>
    <span>Zunft ↔ Handwerk:</span>
    <ul>
        <li>Schmied ↔ Metallverarbeitung</li>
        <li>Bäcker ↔ Getreideverarbeitung</li>
        <li>Fleischer ↔ Fleischverarbeitung</li>
        <li>Gerber ↔ Lederverarbeitung</li>
        <li>Schuhmacher ↔ Feinlederverarbeitung</li>
        <li>Krämer ↔ Gemischtwarenhandel</li>
        <li>Fettkrämer ↔ Handel mit Butter, Öl, Speck etc.</li>
    </ul>
</section>

<section class="mb-4 text-sm text-red-500">
    <h4>Dazu gemischt:</h4>
    <p>Bader, Tuchmacher, Abdecker</p>
</section>
<!-- 
<p class="mb-4 w-full h-auto text-sm">
    Super Leistung! Jetzt weißt Du, wer im mittelalterlichen Dortmund wofür zuständig war. Die
    Texte verraten Dir noch mehr über das mittelalterliche Handwerk.
</p> -->

<GameResultAccordionComponent accordion={gameResultAccordion} />