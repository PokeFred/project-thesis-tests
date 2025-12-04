<script lang="ts">
    import { onMount } from "svelte";
    import type { GameInput } from ".";
    import MatchingGame, { type Pair } from "./MatchingGame.svelte";
    import Select from "$components/Select.svelte";

    const { gameInput, setSubmitable = $bindable() }: { gameInput: GameInput, setSubmitable: () => void } = $props();

    const matchingGame: MatchingGame = new MatchingGame(gameInput.pairs);
    const options: string[] = matchingGame.Pairs.map((pair: Pair) => pair.right);

    onMount((): void => {
        setSubmitable();
    })    

    export const getSubmitData = matchingGame.complete.bind(matchingGame);
    export const getSubmitScore = matchingGame.score.bind(matchingGame);
</script>

<div class="grid grid-cols-2 gap-2 px-1">
    <h4>{gameInput.leftHeader}</h4>
    <h4 class="justify-self-end">{gameInput.rightHeader}</h4>

    {#each matchingGame.Pairs as pair, i}
        <span class="border-1 rounded">{pair.left}</span>
        <div class="justify-self-end">
            <Select {options} bind:selected={matchingGame.Selected[i]}/>
        </div>
    {/each}
</div>