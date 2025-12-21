<script lang="ts">
    import type { GameInput } from ".";
    import MatchingGame, { type Pair } from "./MatchingGame.svelte";
    import Select from "$components/Select.svelte";

    const { gameInput }: { gameInput: GameInput } = $props();

    const matchingGame: MatchingGame = new MatchingGame(gameInput.pairs);

    export const getSubmitData = matchingGame.complete.bind(matchingGame);
    export const getSubmitScore = matchingGame.score.bind(matchingGame);
</script>

<table class="w-full table-fixed border-collapse border-secondary text-left">
    <thead class="text-[18px] font-bold leading-6 tracking-[1.08px] uppercase">
        <tr>
            <th class="border-r pl-3 py-2.5">{gameInput.leftHeader}</th>
            <th class="border-l pl-3 py-2.5">{gameInput.rightHeader}</th>
        </tr>
    </thead>
    <tbody class="text-[18px] font-medium leading-6">
        {#each matchingGame.Pairs as pair, i}
            <tr class="border-t-2 border-b-2 h-20">
                <td class="border-r h-20 pl-3">{pair.left}</td>
                <td class="border-l h-20"><Select options={gameInput.options} bind:selected={matchingGame.Selected[i]} placeholder="Wähle eine Zunft"/></td>
            </tr>
        {/each}
    </tbody>
</table>