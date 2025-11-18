<script lang="ts">
    import { Icon } from "svelte-awesome";
    import { faXmark } from "@fortawesome/free-solid-svg-icons";
    import ShowMore from "$components/ShowMore.svelte";
    import MultipleChoice, { type Answer, type Description } from "./MultipleChoice";

    let { quiz }: { quiz: MultipleChoice } = $props();

    let toggle: ()=>void;
    
    const descriptions: Description[][] = [
        [
            {
                tag: "p",
                text: `Der Brunnen war zentral für die Wasserversorgung – und ein beliebter
                    Treffpunkt zum Austausch aller Art. Eine Tafel erinnert heute an den früheren Brunnen.
                    Findest Du sie?`
            },
            {
                tag: "img",
                src: `/station_01/raetsel_01/image_01.jpg`,
                alt: "Foto: Sophie Ullrich",
                caption: "Foto: Sophie Ullrich"
            }
        ]
        
    ]

    const multipleChoiceResult = quiz.Options.map((answer: Answer, i: number) => {
        return {
            answer: answer.answer,
            correct: answer.correct,
            selected: quiz.Selected[i],
            description: descriptions[i]
        }
    });;

    // TODO: evtl. auslagern in MultipleChoice.ts oder Quiz.ts
    
</script>

<div class="flex flex-col divide-y-2 divide-secondary border-y-2 border-secondary">
    <div>
        <div class="flex w-full mt-[25px] mb-[10px]">
            <div class="grow-0 shrink-0 w-[32px] h-[32px] ml-[9px] mr-[19px] bg-secondary rounded-full"></div>
            <div class="flex items-center w-full pl-4 font-bold text-[16px] text-primary bg-secondary rounded-full">RICHTIG</div>
        </div>
        <div class="ml-[66px] font-bold text-[18px]">
            <span>Es gab einen Brunnen am Markt.</span>
            <div class="my-4">
                <ShowMore bind:toggle={toggle}>
                    {#each multipleChoiceResult as result}
                        {#each result.description as description}
                            {#if description.tag === "p"}
                                <p>{description.text}</p>
                            {:else if description.tag === "img"}
                                <figure>
                                    <img src={description.src} alt={description.alt}>
                                    <figcaption>{description.caption}</figcaption>
                                </figure>
                            {/if}
                        {/each}
                    {/each}
                    <button class="block w-[32px] h-[32px] ml-auto mr-[9px] my-[35px] bg-secondary rounded-full cursor-pointer" onclick={toggle}><Icon data={faXmark} class="w-6/12 h-auto text-primary" /></button>
                </ShowMore>
            </div>
        </div>
    </div>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
</div>