<script lang="ts">
    import type MultipleChoice from "./MultipleChoice"

    let { multipleChoice } : { multipleChoice: MultipleChoice } = $props()
</script>

<div>
    <div class="flex flex-col border-y-2 border-secondary divide-y-2 divide-secondary">
        {#each multipleChoice.Options as option, i }
            <label class="flex h-[80px] text-[18px] py-2 items-center font-medium"><input bind:checked={multipleChoice.Selected[i]} type="checkbox" class="appearance-none touch-manipulation shrink-0 grow-0 w-[32px] h-[32px] ml-[9px] mr-[25px] border-2 border-secondary rounded-full">{option.answer}</label>
        {/each}
    </div>
</div>

<style>
    input[type="checkbox"] {
        background-color: inherit;
    }

    input[type="checkbox"]:checked {
        background-color: var(--color-secondary);
    }
</style>
