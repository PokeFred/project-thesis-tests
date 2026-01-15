<script lang="ts">
    import type { GameData, SavingData } from "."
    // TODO (Simon) richtige Komponente einbinden
    import GameComponent from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte"
    import type { GameInput as Input } from "$components/Games/MultipleChoiceGame"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameData, setSubmitable: () => void } = $props()

    let game: GameComponent
    export function getSubmitData(): SavingData { return game.getSubmitData() }
    export function getSubmitScore(): number { return game.getSubmitScore() }

    onMount((): void => {
        setSubmitable()
    })

    const input: Input = {
        options: data.answers.map((element) => {
            return { id: element.id, answer: element.text, correct: element.isCorrect }
        })
    }
</script>

<GameComponent bind:this={game} input={input} />
