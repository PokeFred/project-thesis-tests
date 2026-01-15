<script lang="ts">
    import type { GameData } from "$components/puzzle/singleChoice"
    import SingleChoice, { type Answer } from "./SingleChoice"

    let { input } : { input: GameData } = $props()
    const options: Answer[] = input.answers.map((element) => {
        return { 
            id: element.id, 
            answer: element.text, 
            correct: element.isCorrect 
        } as Answer;
    })

    const singleChoice: SingleChoice = new SingleChoice(options);

    export const getSubmitData = singleChoice.complete.bind(singleChoice);
    export const getSubmitScore = singleChoice.score.bind(singleChoice);
</script>

<div>
    <div class="flex flex-col border-y-2 border-secondary divide-y-2 divide-secondary">
        {#each singleChoice.Options as option, i }
            <label class="flex h-20 text-[18px] py-2 items-center font-medium leading-6"><input bind:group={singleChoice.Selected} type="radio" name="group" value={i} class="appearance-none touch-manipulation shrink-0 grow-0 w-[32px] h-[32px] ml-[9px] mr-[25px] border-2 border-secondary rounded-full">{option.answer}</label>
        {/each}
    </div>
</div>

<style>
    input {
        background-color: inherit;
    }

    input:checked {
        background-color: var(--color-secondary);
    }
</style>
