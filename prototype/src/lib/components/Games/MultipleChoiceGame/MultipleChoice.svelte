<script lang="ts">
    import type { Snippet } from "svelte";
    import type MultipleChoice from "./MultipleChoice"
    let { multipleChoice, children } : { multipleChoice: MultipleChoice, children?: Snippet } = $props();
</script>

<div>
    {@render children?.()}
    <div class="flex flex-col border-y-2 border-[#37005A] divide-y-2 divide-[#37005A]">
        {#each multipleChoice.Options as option, i }
            <label class="flex h-[80px] text-[18px] py-2 items-center font-medium"><input bind:checked={multipleChoice.Selected[i]} type="checkbox" class="appearance-none touch-manipulation shrink-0 grow-0 w-[32px] h-[32px] ml-[9px] mr-[25px] border-2 border-[#37005A] rounded-full">{option.answer}</label>
        {/each}
    </div>
</div>

<style>
    input[type="checkbox"] {
        background-color: inherit;
    }

    input[type="checkbox"]:checked {
        background-color: #37005A;
    }
</style>