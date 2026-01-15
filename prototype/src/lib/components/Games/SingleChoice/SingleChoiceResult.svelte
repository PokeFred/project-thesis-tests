<script lang="ts">
    import { POINTS } from "../Quiz";

    let { result, saving  }: { result: any, saving: any } = $props();
    const options = result.answers;
</script>

<div class="flex flex-col divide-y-2 divide-secondary border-y-2 border-secondary">
    {#each options as option, i}
        <div>
            <div class="flex place-items-center w-full h-20">
                <div class="grow-0 shrink-0 w-[32px] h-[32px] ml-[9px] mr-[19px] place-self-center rounded-full border-2 border-secondary {i === saving.selected ? "bg-secondary" : "bg-inherit"}"></div>
                <span class="text-[18px] font-medium leading-6">{option.text}</span>
            </div>
        </div>
    {/each}
</div>

<p class="flex justify-between items-center h-8 px-8 -mx-4 mt-7 bg-secondary text-primary text-[16px]">
    <span class="font-bold">Du hast {options[saving.selected].isCorrect ? "richtig" : "falsch"} getippt</span>
    <span class="font-medium">{options[saving.selected].isCorrect ? POINTS.ANSWER_CORRECT : POINTS.NOT_ANSWERED}/{POINTS.ANSWER_CORRECT}</span>
</p>