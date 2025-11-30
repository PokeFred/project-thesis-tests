<script lang="ts">
    import MultipleChoice from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte";
    import { quiz } from "../Quiz";
    import GameHeader from "$components/Games/GameHeader.svelte";
    import GameFooter from "$components/Games/GameFooter.svelte";
    
    const question: string = "Was kennzeichnete den Markt in Dortmund im Mittelalter? Nur fünf von acht Antwortmöglichkeiten sind richtig – überlege genau!";

    let station = {
        identifier: "Rätsel 1",
        completion: 0,
    }

    let data = {
        stitle: "ALTER MARKT",
    }
</script>

<GameHeader stitle={data.stitle} identifier={station.identifier} completion = {station.completion} text={question} />

<!-- <MultipleChoice multipleChoice={quiz}></MultipleChoice> -->

<GameFooter {quiz}>
    <p>Möchtest du dieses Rätsel wirklich beenden?</p>
</GameFooter>