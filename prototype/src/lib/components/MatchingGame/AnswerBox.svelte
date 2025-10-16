<script lang="ts">
    import Select from "$components/Select.svelte";
    import Modal from "$components/Modal.svelte";
    import type MatchingGame from "./MatchingGame.svelte"
    import { type Answer } from "./MatchingGame.svelte";

    const { matchingGame, index }: { matchingGame: MatchingGame, index: number } = $props();
    const options = matchingGame.options[index];
    let answers: string[] = options.map((answer: Answer) => answer.answer);
    if(matchingGame.hints && matchingGame.hints[index]) {
        answers.push("Hinweis");
    }

    function onchange(option: string, i: number): boolean {
        console.log(option, i)
        // Hint selected
        if(i == options.length) {
            showModalHint();
            return false;
        }

        matchingGame.selected[index] = options[i];
        return true;
    }

    function unlockHint(): void {
        if(matchingGame.hints) {
            matchingGame.hints[index].markUnlocked();
        }
    }

    let showModalHint: Function = $state(()=>{});
</script>

{#if matchingGame.hints && matchingGame.hints[index]}
    <Modal bind:show={showModalHint} onConfirm={unlockHint} confirmButtonText={!matchingGame.hints[index].isUnlocked() ? "Anzeigen" : undefined} closeButtonText={"Schließen"}>
        {#if matchingGame.hints[index].isUnlocked()}
            <p>{matchingGame.hints[index].hint}</p>
        {:else}
            <p>Hinweis anzeigen?</p>
        {/if}
    </Modal>
{/if}

<Select options={answers} {onchange}/>