<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte";
    import type { GameInput, Hint, Question } from ".";
    import WordGuessing from "./WordGuessing.svelte";

    const { input }: { input: GameInput } = $props();
    const gameInput: GameInput = input

    // const gameInput: GameInput = {
    //     questions: [
    //         {
    //             solution: "Dille & Kamille",
    //             left: {
    //                 src: "https://placehold.co/600x400",
    //                 alt: "https://placehold.co/600x400",
    //                 caption: "Abbildung",
    //                 hints: {
    //                     normal: "P=D",
    //                     crossed: "n"
    //                 }
    //             } satisfies Hint,
    //             operator: "&",
    //             right: {
    //                 src: "https://placehold.co/600x400",
    //                 alt: "https://placehold.co/600x400",
    //                 caption: "Abbildung",
    //             } satisfies Hint
    //         },
    //         {
    //             solution: "Dille & Kamille",
    //             left: {
    //                 src: "https://placehold.co/600x400",
    //                 alt: "https://placehold.co/600x400",
    //                 caption: "Abbildung",
    //                 hints: {
    //                     normal: "P=D",
    //                     crossed: "n"
    //                 }
    //             } satisfies Hint,
    //             operator: "&",
    //             right: {
    //                 src: "https://placehold.co/600x400",
    //                 alt: "https://placehold.co/600x400",
    //                 caption: "Abbildung",
    //             } satisfies Hint
    //         }
    //     ]
    // }

    const solutions: string[] = gameInput.questions.map((question: Question) => question.solution);

    const wordGuessingGame: WordGuessing = new WordGuessing(solutions);

    export const getSubmitData = wordGuessingGame.complete.bind(wordGuessingGame);
    export const getSubmitScore = wordGuessingGame.score.bind(wordGuessingGame);
</script>

<div class="flex flex-col">
    {#each gameInput.questions as question, i }
        <div>
            <div class="flex">
                {#if question.left}
                    <figure>
                        <div class="h-lh">{question.left.hints?.normal} <span class="crossed">{question.left.hints?.crossed}</span></div>
                        <Fullscreen>
                            <img src={question.left.src} alt={question.left.alt}>
                        </Fullscreen>
                        <figcaption>{question.left.caption}</figcaption>
                    </figure>
                {/if}
                {#if question.operator}
                    <p class="self-center">{question.operator}</p>
                {/if}
                {#if question.right}
                    <figure>
                        <div class="h-lh">{question.right.hints?.normal} <span class="crossed">{question.right.hints?.crossed}</span></div>
                        <Fullscreen>
                            <img src={question.right.src} alt={question.right.alt}>
                        </Fullscreen>
                        <figcaption>{question.right.caption}</figcaption>
                    </figure>
                {/if}
            </div>
            <label>Eingabe:<input type="text" bind:value={wordGuessingGame.Inputs[i]} class="border-2 border-secondary"></label>
        </div>
    {/each}
</div>


<style>
    .crossed {
        position: relative;
    }

    .crossed::after {
            content: "";
            width: 100%;
            height: 2px;
            background-color: var(--color-secondary);
            transform: translateX(-100%) translateY(0.5lh) rotateZ(5deg);
            position: absolute;
        }
</style>