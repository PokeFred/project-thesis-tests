<script lang="ts">
    import Select from "$components/Select.svelte";
    import type MatchingGame from "./MatchingGame.svelte"
    import { type Answer } from "./MatchingGame.svelte";

    const { matchingGame, index }: { matchingGame: MatchingGame, index: number } = $props();
    const options = matchingGame.Options[index];
    let answers: string[] = options.map((answer: Answer) => answer.answer);

    function onchange(option: string, i: number): boolean {
        matchingGame.Selected[index] = options[i];
        return true;
    }
</script>

<Select options={answers} {onchange}/>