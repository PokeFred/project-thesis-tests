<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte";
    import type { GameInput, Hint, Question } from ".";
    import WordGuessing from "./WordGuessing.svelte";

    // const { input }: { input: GameInput } = $props();

    // TODO Cedric
    const input: {questions: Question[]} = {
        questions: [
            {
                hints: [
                    {
                        tag: "img",
                        src: "https://placehold.co/600x400",
                        alt: "test",
                        caption: ""
                    },
                    {
                        tag: "text",
                        text: {
                            // crossed: "sel",
                            crossed: "schaft",
                            // normal: " + chen"
                        }
                    },
                    {
                        tag: "text",
                        text: {
                            normal: "+"
                        }
                    },  
                    {
                        tag: "text",
                        text: {
                            normal: "&"
                        }
                    },
                    {
                        tag: "text",
                        text: {
                            normal: "+"
                        }
                    },
                    {
                        tag: "img",
                        src: "https://placehold.co/600x400",
                        alt: "test",
                        caption: ""
                    }
                ],
                solution: "Tewes"
            }
        ]
    }

    const solutions: string[] = input.questions.map((question: Question) => question.solution);

    const wordGuessingGame: WordGuessing = new WordGuessing(solutions);

    export const getSubmitData = wordGuessingGame.complete.bind(wordGuessingGame);
    export const getSubmitScore = wordGuessingGame.score.bind(wordGuessingGame);
</script>

<div class="flex flex-col border-y-2 py-20">
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
                                <figcaption>{hint.caption}</figcaption>
                            </figure>
                        {:else if hint.tag === "text"}
                            <p class="self-center">{#if hint.text.crossed}<span class="crossed">{hint.text.crossed}</span>{/if}{hint.text.normal}</p>
                        {/if}
                    </div>
                {/each}
            </div>
            <label class="block h-12 mt-10"><input type="text" placeholder="Tippe hier deine Lösung ein" bind:value={wordGuessingGame.Inputs[i]} class="inline-block w-full h-full pl-1.5 border-b-2 font-medium border-secondary placeholder-secondary/50"></label>
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