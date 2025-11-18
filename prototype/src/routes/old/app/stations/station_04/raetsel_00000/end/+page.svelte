<script lang="ts">
    import type { GameResultAccordion } from "$components/accordions/GameResultAccordion";
    import GameResultAccordionComponent from "$components/accordions/GameResultAccordion.svelte";
    import PointSummary from "$components/Games/PointSummary.svelte";
    import { POINTS } from "$lib/State.svelte";
    import { quiz } from "../Quiz"
    import GameHeader from "$components/Games/GameHeader.svelte";
    import MultipleChoiceResult from "$components/Games/MultipleChoiceGame/MultipleChoiceResult.svelte";

    const selected = quiz.Options.filter((answer, i) => quiz.Selected[i]);
    const answers: string[] = selected.map((answer)=>answer.answer);
    const points: number[] = selected.map((answer)=>answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);

    const question: string = "Was kennzeichnete den Markt in Dortmund im Mittelalter? Nur fünf von acht Antwortmöglichkeiten sind richtig – überlege genau!";

    const data = {
        stitle: "ALTER MARKT"
    }

    const station = {
        identifier: "Rätsel 1",
        completion: 0,
    }
</script>

<GameHeader stitle={data.stitle} identifier={station.identifier} completion = {station.completion} question={question} />

<!-- <PointSummary descriptions={answers} {points} /> -->

<!-- <GameResultAccordionComponent accordion={gameResultAccordion}/> -->
<MultipleChoiceResult {quiz} />

<!-- <p class="mb-4 mt-4 w-full h-auto text-sm">
    Super, Du hast alle Fragen beantwortet. Jetzt weißt Du, was für Anforderungen der Markt im
    Mittelalter erfüllen musste und was den Dortmunder Markt ausmachte. In den Texten dieser
    Station erfährst Du noch mehr über die Geschichte von Märkten und das Einkaufen auf dem
    Markt.
</p> -->