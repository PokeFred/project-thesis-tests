<script lang="ts">
    import { onDestroy } from "svelte";
    import { Icon } from "svelte-awesome";
    import angleDown from 'svelte-awesome/icons/angleDown';

    let { options, onclick, selected = $bindable(), selectedIndex = $bindable(), placeholder }: { options: string[]; onclick?: (option: string, index: number) => void; selected?: string; selectedIndex?: number; placeholder?: string } = $props();

    let show: boolean = $state(false);
    let selectedButton: HTMLButtonElement = $state(document.createElement("button"));
    let optionMenu: HTMLDivElement = $state(document.createElement("div"));
    let width: number = $derived(Math.max(optionMenu.clientWidth, selectedButton.clientWidth));

    function showMenu(): void {
        show = !show;
    }

    function selectOptionOnclick(option: string, index: number): void {
        placeholder = option;
        selected = option;
        selectedIndex = index;
        onclick?.(option, index);
    }

    function closeOptionsOnWindowClick(event: PointerEvent): void {
        const target = (event.target as HTMLElement);
        if(!selectedButton.contains(target)) {
            show = false;
        }
    }

    window.addEventListener("click",closeOptionsOnWindowClick);
    onDestroy(()=>window.removeEventListener("click", closeOptionsOnWindowClick));
</script>

<div class="relative inline-block w-full h-full">
    <button bind:this={selectedButton} onclick={showMenu} class="SelectComponent flex justify-between items-center w-full h-full pl-3 pr-5 cursor-pointer"><span class="{selectedIndex !== undefined ? "" :"text-secondary/50"}">{placeholder}</span><Icon data={angleDown} scale={2}/></button>
    <div bind:this={optionMenu} class="absolute block w-full {show ? "visible" : "invisible"} bg-secondary z-10" >
        {#each options as option, i }
            <button onclick={()=>selectOptionOnclick(option, i)} class="block w-full cursor-pointer text-primary font-medium" ><div class="mx-4 py-2.5 pl-1 text-left border-t-primary {i > 0 ? "border-t-2" : ""}">{option}</div></button>
        {/each}
    </div>
</div>