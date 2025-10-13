<script lang="ts">

    let { options }: { options: string[]} = $props();

    let selected: HTMLButtonElement | undefined = undefined;
    let optionButtons: HTMLButtonElement[];

    let show: boolean = $state(false);

    function onclick(): void {
        show = !show;
    }
</script>

<!-- größe des anzeige buttons so groß wie breite content selbst/optionen -->
<div class="relative inline-block">
    <button {onclick} class="cursor-pointer px-1 border-1 border-black rounded">Dropdown</button>
    <div class="absolute {show ? "block" : "hidden"} w-full bg-white rounded shadow-xl z-10">
        {#each options as option }
            <button class="block w-full cursor-pointer hover:bg-blue-500 hover:text-white">{option}</button>
        {/each}
    </div>
</div>