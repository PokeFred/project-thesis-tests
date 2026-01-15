<script lang="ts">
    import type { Result, Saving } from "."

    let { result, saving }: { result: Result, saving: Saving } = $props()
</script>

<div class="flex flex-col divide-y-2 divide-secondary border-y-2 border-secondary">
    {#each saving.answers as element}
        <div>
            <div class="flex w-full mt-6.25 mb-2.5">
                <div class="grow-0 shrink-0 w-8 h-8 ml-2.25 mr-4.75 rounded-full border-2 border-secondary {element.isCorrect ? "bg-secondary" : "bg-inherit"}"></div>
                <div class="flex items-center w-full pl-4 font-bold text-[16px] text-primary bg-secondary rounded-full">Du hast {element.isCorrect ? "RICHTIG" : "FALSCH"} getippt</div>
            </div>
            <div class="ml-16.5 font-bold text-[18px]">
                <span>{element.text}</span>
                <div class="my-4"></div>
            </div>
        </div>
    {/each}
</div>
