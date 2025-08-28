<script lang="ts">
    import type { Answer } from "./Cloze.svelte";

    let { options, selected = $bindable()}: { options: Answer[]; selected: Answer | null} = $props();
    let selectElement: HTMLSelectElement;

    function onchange(): void {
        selected = options[selectElement.selectedIndex];
        console.log(options[selectElement.selectedIndex]);
    }
</script>

<select
    {onchange}
    bind:this={selectElement}
    class="appearance-none border rounded text-center"
>
    {#each options as option}
        <!-- <option bind:this={optionElement}>{option.answer}</option> -->
        <option>{option.answer}</option>
    {/each}
    <option disabled selected hidden></option>
</select>

<style>
</style>
