<script lang="ts">
    import type { Snippet } from "svelte";
    import type MultipleChoice from "./MultipleChoice"
    let { multipleChoice, children } : { multipleChoice: MultipleChoice, children: Snippet } = $props();
</script>

<div>
    {@render children()}
    <div class="flex flex-col">
        {#each multipleChoice.options as option, i }
            <label><input bind:checked={multipleChoice.selected[i]} type="checkbox" class="mr-1">{option.answer}</label>
        {/each}
    </div>
</div>