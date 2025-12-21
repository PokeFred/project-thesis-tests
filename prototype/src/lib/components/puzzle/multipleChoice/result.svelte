<script lang="ts">
    import type { ResultData, SavingData } from "."
    import ResultComponent from "$components/Games/MultipleChoiceGame/MultipleChoiceResult.svelte"
    import type { Result } from "$components/Games/MultipleChoiceGame"

    let { result, saving }: { result: ResultData, saving: SavingData } = $props()

    // { id: 0, selected: true }
    const _saving = {
        answers: saving.answers.map((element) => {
            return {
                answer: element.answer.answer,
                correct: element.answer.correct,
                selected: element.selected,
                description: [
                    {
                        tag: "p",
                        children: [{tag: "text", text: "Aus config laden."}]
                    }
                ]
            }
        })
    }
</script>

<ResultComponent result={result} saving={_saving} />
