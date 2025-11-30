<script lang="ts">
    import type { Answer } from "$components/Games/MultipleChoiceGame/MultipleChoice";
    import MultipleChoice from "$components/Games/MultipleChoiceGame/MultipleChoice";
    import MultipleChoiceComponent from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte";
import type { GameInput, GameOutput } from "./index"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameInput, setSubmitable: () => void } = $props()

    let output: GameOutput = { answers: [] }

    export function getSubmitScore(): number {
        return output.answers
            .map((e, i): number => (e.isCorrect === data.answers[i].isCorrect) ? 3 : 0)
            .reduce((pre: number, cur: number): number => pre += cur)
    }

    onMount((): void => {
        setSubmitable()

        output = {
            answers: data.answers
        }
    })

    function select(event: HTMLInputElement, id: number) {
        output.answers[id].isCorrect = event.checked
    }

    const game: MultipleChoice = new MultipleChoice(data.answers.map((answer) => {
        return {answer: answer.text, correct: answer.isCorrect}
    }));
    export const getSubmitData = game.complete.bind(game);
</script>

<MultipleChoiceComponent multipleChoice={game}/>