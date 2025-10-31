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
                }
            ]
        }
    ]
</script>

<p class="mb-4 w-full h-auto text-sm">
    Super, Du hast alle Fragen beantwortet. Jetzt weißt Du, was für Anforderungen der Markt im
    Mittelalter erfüllen musste und was den Dortmunder Markt ausmachte. In den Texten dieser
    Station erfährst Du noch mehr über die Geschichte von Märkten und das Einkaufen auf dem
    Markt.
</p>

<PointSummary descriptions={answers} {points} />

<GameResultAccordionComponent accordion={gameResultAccordion}/>

<a href=".." data-sveltekit-preload-data data-sveltekit-preload-code class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Zurück zur Rätselübersicht</a>