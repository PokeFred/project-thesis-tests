<script lang="ts">
    import { Icon } from "svelte-awesome";
    import { faXmark } from "@fortawesome/free-solid-svg-icons";
    import ShowMore from "$components/ShowMore.svelte";
    import Fullscreen from "$components/Fullscreen.svelte";
    import type { Content, Inline } from "../Content";
    import { POINTS } from "../Quiz";
    import type { ResultData, SavingData } from "$components/puzzle/multipleChoice"

    let { result, saving  }: { result: ResultData, saving: SavingData } = $props();

    const toggles: (()=>void)[] = new Array(saving.answers.length);

    let multipleChoiceResult = result.answers.map((obj: any, i: number) => {
        return {
            answer: obj.text,
            correct: obj.isCorrect,
            selected: saving.answers.filter((e: any): boolean => e.id === obj.id)[0].selected,
            description: obj.description
        }
    });
</script>

<div class="flex flex-col divide-y-2 divide-secondary border-y-2 border-secondary">
    {#each multipleChoiceResult as result, i}
        <div>
            <div class="flex w-full h-8 mt-6 mb-[10px]">
                <div class="grow-0 shrink-0 w-[32px] h-[32px] ml-[9px] mr-[19px] rounded-full border-2 border-secondary {result.selected ? "bg-secondary" : "bg-inherit"}"></div>
                <div class="flex items-center justify-between w-full -mr-4 pl-4 pr-8 text-[16px] text-primary bg-secondary rounded-l-full">
                    <span class="font-bold tracking-[0.96px]">Du hast {result.correct == result.selected ? "RICHTIG" : "FALSCH"} getippt</span>
                    <span class="font-medium">{result.selected == result.correct ? POINTS.ANSWER_CORRECT : 0}/{POINTS.ANSWER_CORRECT}</span>
                </div>
            </div>
            <div class="ml-[66px] font-medium text-[18px] leading-6">
                <span>{result.answer}</span>
                <div class="my-4">
                    <ShowMore bind:toggle={toggles[i]}>
                            {#each result.description as description}
                                {#if description.tag === "p"}
                                    {#each description.children as child}
                                        {#if child.tag === "text"}
                                            <p>{child.text}</p>
                                        {/if}
                                    {/each}
                                {:else if description.tag === "img"}
                                    <figure class="my-10">
                                        <Fullscreen>
                                            <img src={description.src} alt={description.alt}>
                                        </Fullscreen>
                                        {#if description.caption}
                                            <figcaption class="flex flex-col mx-4.5 mt-3 font-medium">
                                                <span class="mb-2 text-[16px] leading-4">{description.caption?.caption}</span>
                                                <span class="uppercase text-[12px] leading-4.5 tracking-[0.72pt]">{description.caption?.src}</span>
                                            </figcaption>
                                        {/if}
                                    </figure>
                                {/if}
                            {/each}
                        <button class="block w-[32px] h-[32px] ml-auto mr-[9px] my-[35px] bg-secondary rounded-full cursor-pointer touch-manipulation" onclick={toggles[i]}><Icon data={faXmark} class="w-6/12 h-auto text-primary" /></button>
                    </ShowMore>
                </div>
            </div>
        </div>
    {/each}
</div>
