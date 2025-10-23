<script lang="ts">
    import Select from "$components/Select.svelte";
    import Modal from "$components/Modal.svelte";
    import type MatchingGame from "./MatchingGame.svelte"
    import { type Answer } from "./MatchingGame.svelte";

    const { matchingGame, index }: { matchingGame: MatchingGame, index: number } = $props();
    const options = matchingGame.Options[index];
    let answers: string[] = options.map((answer: Answer) => answer.answer);
    if(matchingGame.Hints && matchingGame.Hints[index]) {
        answers.push("Hinweis");
    }

    function onchange(option: string, i: number): boolean {
        // Hint selected
        if(i == options.length) {
            showModalHint();
            return false;
        }

        matchingGame.Selected[index] = options[i];
        return true;
    }

    function unlockHint(): void {
        if(matchingGame.Hints) {
            matchingGame.Hints[index].markUnlocked();
        }
    }

    let showModalHint: Function = $state(()=>{});
</script>

{#if matchingGame.Hints && matchingGame.Hints[index]}
    <Modal bind:show={showModalHint} onConfirm={unlockHint} confirmButtonText={!matchingGame.Hints[index].Unlocked ? "Anzeigen" : undefined} closeButtonText={"Schließen"}>
        {#if matchingGame.Hints[index].Unlocked}
            <p>{matchingGame.Hints[index].Hint}</p>
        {:else}
            <p>Hinweis anzeigen?</p>
        {/if}
    </Modal>
{/if}

<Select options={answers} {onchange}/>