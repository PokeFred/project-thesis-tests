<script lang="ts">
    import MultipleChoiceResult from "$components/Games/MultipleChoiceGame/MultipleChoiceResult.svelte";
    import type { Result } from "."

    let { data }: { data: Result } = $props()
    console.log(data)
</script>


<div class="flex flex-col divide-y-2 divide-secondary border-y-2 border-secondary">
    {#each data.answers as element, i}
        <div>
            <div class="flex w-full mt-[25px] mb-[10px]">
                <div class="grow-0 shrink-0 w-[32px] h-[32px] ml-[9px] mr-[19px] rounded-full border-2 border-secondary {element.isCorrect ? "bg-secondary" : "bg-inherit"}"></div>
                <div class="flex items-center w-full pl-4 font-bold text-[16px] text-primary bg-secondary rounded-full">Du hast {element.isCorrect ? "RICHTIG" : "FALSCH"} getippt</div>
            </div>
            <div class="ml-[66px] font-bold text-[18px]">
                <span>{element.text}</span>
                <div class="my-4"></div>
            </div>
        </div>
    {/each}
</div>