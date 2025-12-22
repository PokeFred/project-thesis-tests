<script lang="ts">
    import type { GameData, SavingData } from "."
    import GameComponent from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte"
    import type { GameInput as Input } from "$components/Games/MultipleChoiceGame"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameData, setSubmitable: () => void } = $props()

    let game: GameComponent
    // @ts-ignore
    export function getSubmitData(): SavingData { return game.getSubmitData() as SavingData }
    // @ts-ignore
    export function getSubmitScore(): number { return game.getSubmitScore() }

    onMount((): void => {
        setSubmitable()
    })

    const input: Input = {
        options: data.answers.map((element) => {
            return { answer: element.text, correct: element.isCorrect }
        })
    }

    // TODO temp
    console.log({ data, input })
</script>

<!-- <GameComponent bind:this={game} input={input} /> -->
