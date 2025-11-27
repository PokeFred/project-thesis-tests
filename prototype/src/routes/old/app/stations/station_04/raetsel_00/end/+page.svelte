<script lang="ts">
    import PointSummary from "$components/Games/PointSummary.svelte";
    import { POINTS } from "$lib/State.svelte";
    import { Icon } from "svelte-awesome";
    import { quiz } from "../Quiz";
    import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
    import GameHeader from "$components/Games/GameHeader.svelte";

    const descriptions: string[] = [`Richtig platzierte Puzzleteile (${quiz.AnswersCorrect})`]
    const points: number[] = [quiz.AnswersCorrect * POINTS.ANSWER_CORRECT]

    const data = {
        stitle: "ASD",
        completion: 0,
        identifier: "asd",
        text: "Text..."
    }
</script>

<GameHeader stitle={data.stitle} completion={data.completion} identifier={data.identifier} text={data.text} />

<PointSummary {descriptions} {points}/>

<button onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })} class="my-8 ml-auto mr-3.5 w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer touch-manipulation active:scale-95">
    <Icon data={faAngleUp} class="w-6 h-6" />
</button>