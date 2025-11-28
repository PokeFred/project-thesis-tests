<script lang="ts">
    import { Icon } from "svelte-awesome";
    import { faXmark } from "@fortawesome/free-solid-svg-icons";
    import ShowMore from "$components/ShowMore.svelte";
    import MultipleChoice, { type Answer, type Description } from "./MultipleChoice";
    import Fullscreen from "$components/Fullscreen.svelte";

    let { quiz }: { quiz: MultipleChoice } = $props();

    const toggles: (()=>{})[] = new Array(quiz.Options.length);

    const multipleChoiceResult = quiz.Options.map((answer: Answer, i: number) => {
        return {
            answer: answer.answer,
            correct: answer.correct,
            selected: quiz.Selected[i],
            description: quiz.Descriptions[i]
        }
    });;    
</script>

<div class="flex flex-col divide-y-2 divide-secondary border-y-2 border-secondary">
    {#each multipleChoiceResult as result, i}
        <div>
            <div class="flex w-full mt-[25px] mb-[10px]">
                <div class="grow-0 shrink-0 w-[32px] h-[32px] ml-[9px] mr-[19px] rounded-full border-2 border-secondary {result.selected ? "bg-secondary" : "bg-inherit"}"></div>
                <div class="flex items-center w-full pl-4 font-bold text-[16px] text-primary bg-secondary rounded-full">Du hast {result.correct == result.selected ? "RICHTIG" : "FALSCH"} getippt</div>
            </div>
            <div class="ml-[66px] font-bold text-[18px]">
                <span>{result.answer}</span>
                <div class="my-4">
                    <ShowMore bind:toggle={toggles[i]}>
                            {#each result.description as description}
                                {#if description.tag === "p"}
                                    <p>{description.text}</p>
                                {:else if description.tag === "img"}
                                    <figure>
                                        <Fullscreen>
                                            <img src={description.src} alt={description.alt}>
                                        </Fullscreen>
                                        <figcaption>{description.caption}</figcaption>
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