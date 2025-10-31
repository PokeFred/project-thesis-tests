<script lang="ts">
    import type { GameResultAccordion } from "$components/accordions/GameResultAccordion";
    import GameResultAccordionComponent from "$components/accordions/GameResultAccordion.svelte";
    import PointSummary from "$components/Games/PointSummary.svelte";
    import { POINTS } from "$lib/State.svelte";
    import { quiz } from "../Quiz"

    const selected = quiz.Options.filter((answer, i) => quiz.Selected[i]);
    const answers: string[] = selected.map((answer)=>answer.answer);
    const points: number[] = selected.map((answer)=>answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);

    const gameResultAccordion: GameResultAccordion = [
        {
            type: "question",
            success: true,
            question: "(a) Es gab einen Brunnen am Markt.",
            answers: [
                {
                    type: "paragraph",
                    content: `Richtig: Der Brunnen war zentral für die Wasserversorgung – und ein beliebter
                              Treffpunkt zum Austausch aller Art. Eine Tafel erinnert heute an den früheren Brunnen.
                              Findest Du sie?`,
                },
                {
                    type: "image",
                    src: "/station_01/raetsel_01/image_01.jpg",
                    alt: "Foto: Sophie Ullrich",
                    caption: "Foto: Sophie Ullrich"
                }
            ]
        },
        {
            type: "question",
            success: true,
            question: "(b) Die Hauptpfarrkirche lag am Marktplatz",
            answers: [
                {
                    type: "paragraph",
                    content: `Richtig: Der erste Dortmunder Marktplatz befand sich am Vorgängerbau der
                              Reinoldikirche, nahe dem damaligen, ersten Rathaus. Das ist der heutige Platz von Leeds.
                              Nach dem großen Stadtbrand von 1232 wurde der Markt an seinen heutigen Standort
                              verlegt.`,
                },
            ]
        },
        {
            type: "question",
            success: true,
            question: "(c) Der Markt war das Zentrum der Stadt.",
            answers: [
                {
                    type: "paragraph",
                    content: `Richtig: Der Marktplatz war das Herz der Stadt: Hier wurde gehandelt, verhandelt
                              und Recht gesprochen.`,
                },
            ]
        },
        {
            type: "question",
            success: false,
            question: "(d) Hinrichtungen von Verurteilten fanden auf dem Markt statt.",
            answers: [
                {
                    type: "paragraph",
                    content: `Falsch: Der Richtplatz lag außerhalb der Stadt, östlich in Körne. Dort fanden die
                              Hinrichtungen statt. Am Markt befand sich jedoch der „Trissel“, eine besondere Form
                              des Prangers in Gestalt eines Korbes, in dem Verurteilte öffentlich zur Schau gestellt
                              wurden. Im Trissel vollzog man soziale oder „entehrende“ Strafen. Der Verlust von Ehre
                              und Ansehen bedeutete im Mittelalter den Ausschluss aus der Gemeinschaft.`,
                },
            ]
        },
        {
            type: "question",
            success: true,
            question: "(e) Der Markt lag an einem wichtigen Handelsweg.",
            answers: [
                {
                    type: "paragraph",
                    content: `Richtig: Dortmund lag am Hellweg, einer bedeutenden mittelalterlichen
                              Fernstraße. Diese Lage machte die Stadt zu einem wichtigen Handels- und
                              Hansestandort.`,
                },
            ]
        },
        {
            type: "question",
            success: false,
            question: "(f) Zutritt hatten nur Angehörige des Adels.",
            answers: [
                {
                    type: "paragraph",
                    content: `Falsch: Der Markt stand allen Stadtbewohner:innen offen. Hier wurde die
                              Versorgung mit Lebensmitteln gesichert.`,
                },
            ]
        },
        {
            type: "question",
            success: true,
            question: "(g) Das Rathaus lag direkt am Marktplatz.",
            answers: [
                {
                    type: "paragraph",
                    content: `Richtig: Das Dortmunder Rathaus war eng mit dem Marktgeschehen verbunden
                              und lag unmittelbar am Platz.`,
                },
            ]
        },
        {
            type: "question",
            success: false,
            question: "(h) Eine zweite Stadtmauer umgab den Markt.",
            answers: [
                {
                    type: "paragraph",
                    content: `Falsch: Es gab keine zweite Stadtmauer. Die Befestigung umschloss die gesamte Stadt.
                              An den heutigen Wallanlagen lässt sich erkennen, welchen Umfang die Stadtmauer bereits um
                              1200 hatte.`,
                },
            ]
        },
    ]
</script>

<PointSummary descriptions={answers} {points} />

<GameResultAccordionComponent accordion={gameResultAccordion}/>

<p class="mb-4 mt-4 w-full h-auto text-sm">
    Super, Du hast alle Fragen beantwortet. Jetzt weißt Du, was für Anforderungen der Markt im
    Mittelalter erfüllen musste und was den Dortmunder Markt ausmachte. In den Texten dieser
    Station erfährst Du noch mehr über die Geschichte von Märkten und das Einkaufen auf dem
    Markt.
</p>

<a href=".." data-sveltekit-preload-data data-sveltekit-preload-code class="inline-block text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Zurück zur Rätselübersicht</a>