<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte";
    import type { GameInput, Hint, Question } from ".";
    import WordGuessing from "./WordGuessing.svelte";

    const { input }: { input: GameInput } = $props();

    const solutions: string[][] = input.questions.map((question: Question) => question.solutions);

    const wordGuessingGame: WordGuessing = new WordGuessing(solutions);

    export const isComplete = wordGuessingGame.isComplete.bind(wordGuessingGame);
    export const getSubmitData = wordGuessingGame.complete.bind(wordGuessingGame);
    export const getSubmitScore = wordGuessingGame.score.bind(wordGuessingGame);
</script>

<div class="flex flex-col border-t-2 pt-21">
    {#each input.questions as question, i }
        <div>
            <div class="flex flex-col gap-9">
                {#each question.hints as hint }
                    <div class="font-medium text-[40px] text-center leading-6">
                        {#if hint.tag === "img"}
                            <figure class="-mx-4">
                                <Fullscreen>
                                    <img src={hint.src} alt={hint.alt}>
                                </Fullscreen>
                                {#if hint.caption}
                                    <figcaption class="flex flex-col mx-4.5 mt-3 font-medium text-left">
                                        <span class="mb-2 text-[16px] leading-4">{hint.caption?.caption}</span>
                                        <span class="uppercase text-[12px] leading-4.5 tracking-[0.72pt]">{hint.caption?.src}</span>
                                    </figcaption>
                                {/if}
                            </figure>
                        {:else if hint.tag === "text"}
                            <p class="self-center">{#if hint.text.crossed}<span class="crossed">{hint.text.crossed}</span>{/if}{hint.text.normal}</p>
                        {/if}
                    </div>
                {/each}
            </div>
            <label class="block h-12 mt-10"><input type="text" placeholder="Tippe hier deine Lösung ein" bind:value={wordGuessingGame.Inputs[i]} class="inline-block w-full h-full pl-2 border-b-2 font-medium text-[18px] leading-6 border-secondary placeholder-secondary/60"></label>
        </div>
    {/each}
</div>


<style>
    .crossed {
        position: relative;
    }

    .crossed::after {
            content: "";
            left: 50%;
            top: 50%;
            width: 1.6em;
            height: 2px;
            background-color: var(--color-secondary);
            transform: translateX(-50%) rotateZ(-45deg);
            position: absolute;
        }
</style>