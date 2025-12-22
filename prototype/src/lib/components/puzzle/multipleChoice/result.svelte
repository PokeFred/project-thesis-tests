<script lang="ts">
    import type { ResultData, SavingData } from "."
    import ResultComponent from "$components/Games/MultipleChoiceGame/MultipleChoiceResult.svelte"

    let { result, saving }: { result: ResultData, saving: SavingData } = $props()

    // Result
    // { id: number, text: string, description: [], isCorrect: boolean }[]

    // Saving
    // { answers: { id: number, selected: boolean }[] }

    // const data = {
    //     answers: saving.answers.map((element) => {
    //         return {
    //             answer: element.answer.answer,
    //             correct: element.answer.correct,
    //             selected: element.selected,
    //             description: [
    //                 {
    //                     tag: "p",
    //                     children: [{tag: "text", text: "Aus config laden."}]
    //                 }
    //             ]
    //         }
    //     })
    // }

    // TODO temp
    console.log({ result, saving })
</script>

<!-- <ResultComponent result={result} saving={saving} /> -->
