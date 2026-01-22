<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte";
    import type { ResultData, SavingData } from "$components/puzzle/wordGuessing"
    import type { Question } from ".";

    // let { result, saving }: { result: ResultData, saving: SavingData } = $props();

    // TODO: Cedric
    const result: {questions: Question[]} = {
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
                            crossed: "test",
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
                solution: "Tewes",
                solutionText: "Lösung: Freundschaft (-schaft) + & + Bauer = Freund & Bauer"
            }
        ]
    }
</script>


<div class="flex flex-col border-t-2 pt-21">
    {#each result.questions as question, i }
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
            <label class="block h-12 mt-10 mb-6"><input type="text" disabled={true} value={question.solution} class="inline-block w-full h-full pl-2 border-b-2 font-medium text-[18px] leading-6 border-secondary placeholder-secondary/60"></label>
            <p class="flex justify-between items-center h-8 px-8 -mx-4 mt-7 mb-6 bg-secondary text-primary text-[16px] font-bold leading-6 tracking-[0.96px]">Du hast richtig gerätselt</p>
            <p class="pl-1.5 font-medium text-[18px] leading-6">{question.solutionText}</p>
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