<script lang="ts">
    import type { GameData, SavingData } from "."
    import GameComponent from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte"
    import type { GameInput } from "$components/Games/MultipleChoiceGame"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameData, setSubmitable: () => void } = $props()

    let game: GameComponent
    // @ts-ignore
    export function getSubmitData(): SavingData { return game.getSubmitData() as SavingData }
    export function getSubmitScore(): number { return game.getSubmitScore() }

    onMount((): void => {
        setSubmitable()
    })

    const input: GameInput = {
        options: data.answers.map((element) => {
            return { answer: element.text, correct: element.isCorrect }
        })
    }
</script>

<GameComponent bind:this={game} input={input} />
