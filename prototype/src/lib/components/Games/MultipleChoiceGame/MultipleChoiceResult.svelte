<script lang="ts">
    import { Icon } from "svelte-awesome";
    import { faXmark } from "@fortawesome/free-solid-svg-icons";
    import ShowMore from "$components/ShowMore.svelte";
    import MultipleChoice, { type Answer } from "./MultipleChoice";
    import Fullscreen from "$components/Fullscreen.svelte";
    import type { GameOutput, Result } from ".";
    import type { Content, Inline } from "../Content";
    import { POINTS } from "../Quiz";

    let { result, saving  }: { result: any, saving: Result } = $props();

    // TODO was macht das ?
    const toggles: (()=>void)[] = new Array(saving.answers.length);

    const multipleChoiceResult = saving.answers.map((obj, i: number) => {
        return {
            answer: obj.answer.answer,
            correct: obj.answer.correct,
            selected: obj.selected,
            description: [{
                tag: "p",
                children: [{tag: "text", text: "Aus config laden."} as Inline]
            } as Content]
        }
    });;    
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
