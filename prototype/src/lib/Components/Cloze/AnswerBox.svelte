<script lang="ts">
    import type Cloze from "./Cloze.svelte";

    const { cloze, index }: { cloze: Cloze, index: number } = $props();
    const options = cloze.options[index];
    let selectElement: HTMLSelectElement;
    let lastSelected: number;

    function onchange(e: Event): void {
        // Hint selected
        if(selectElement.selectedIndex == options.length + 1) {
            if(lastSelected == undefined) {
                selectElement.selectedIndex = -1;
            }
            else {
                selectElement.selectedIndex = lastSelected;
            }
            showModalHint();
        }

        cloze.selected[index] = options[selectElement.selectedIndex];
        lastSelected = selectElement.selectedIndex;
        console.log(options[selectElement.selectedIndex]);
    }

    let dialog: HTMLDialogElement;

    function showModalHint(): void {
        dialog.showModal();
    }

    function hideModalHint(): void {
        dialog.close();
    }

    function unlockHint(): void {
        cloze.hints[index].markUnlocked();
    }
</script>

<dialog bind:this={dialog}>
    {#if cloze.hints[index].isUnlocked()}
        <p>{cloze.hints[index].hint}</p>
    {:else}
        <p>Hinweis anzeigen?</p>
        <button onclick={unlockHint}>Anzeigen</button>
    {/if}
    <button onclick={hideModalHint}>Schließen</button>
</dialog>

<select
    {onchange}
    bind:this={selectElement}
    class="appearance-none border rounded text-center"
>
    {#each options as option}
        <option>{option.answer}</option>
    {/each}
    <option disabled selected hidden></option>
    <option class="text-blue-800 bg-gray-200">Hinweis</option>
</select>