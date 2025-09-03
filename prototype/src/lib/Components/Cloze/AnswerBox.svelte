<script lang="ts">
    import type Cloze from "./Cloze.svelte";

    const { cloze, index }: { cloze: Cloze, index: number } = $props();
    const options = cloze.options[index];
    let selectElement: HTMLSelectElement;

    function onchange(): void {
        cloze.selected[index] = options[selectElement.selectedIndex];
        console.log(options[selectElement.selectedIndex]);
    }
</script>

<select
    {onchange}    
    bind:this={selectElement}
    class="appearance-none border rounded text-center"
>
    {#each options as option}
        <option>{option.answer}</option>
    {/each}
    <option disabled selected hidden></option>
</select>