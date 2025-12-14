<script lang="ts">
    import type { GameResultAccordion } from "$components/accordions/GameResultAccordion";
    import GameResultAccordionComponent from "$components/accordions/GameResultAccordion.svelte";
    import PointSummary from "$components/Games/PointSummary.svelte";
    import { quiz } from "../Quiz"
    import GameHeader from "$components/Games/GameHeader.svelte";
    import MultipleChoiceResult from "$components/Games/MultipleChoiceGame/MultipleChoiceResult.svelte";
    import { Icon } from "svelte-awesome";
    import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
    import { POINTS } from "$components/Games/Quiz";

    const selected = quiz.Options.filter((answer, i) => quiz.Selected[i]);
    const answers: string[] = selected.map((answer)=>answer.answer);
    const points: number[] = selected.map((answer)=>answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);

    const text: string = "Was kennzeichnete den Markt in Dortmund im Mittelalter? Nur fünf von acht Antwortmöglichkeiten sind richtig – überlege genau!";

    const data = {
        stitle: "ALTER MARKT"
    }

    const station = {
        identifier: "Rätsel 1",
        completion: 0,
    }
</script>

<GameHeader stitle={data.stitle} identifier={station.identifier} completion = {station.completion} text={text} />

<!-- <PointSummary descriptions={answers} {points} /> -->

<!-- <GameResultAccordionComponent accordion={gameResultAccordion}/> -->
<!-- <MultipleChoiceResult {quiz} /> -->

<!-- <p class="mb-4 mt-4 w-full h-auto text-sm">
    Super, Du hast alle Fragen beantwortet. Jetzt weißt Du, was für Anforderungen der Markt im
    Mittelalter erfüllen musste und was den Dortmunder Markt ausmachte. In den Texten dieser
    Station erfährst Du noch mehr über die Geschichte von Märkten und das Einkaufen auf dem
    Markt.
</p> -->

<button onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })} class="my-8 ml-auto mr-3.5 w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer touch-manipulation active:scale-95">
    <Icon data={faAngleUp} class="w-6 h-6" />
</button>