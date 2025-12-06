<script lang="ts">
    import { onDestroy } from "svelte";

    let { options, onclick, selected = $bindable(), selectedIndex = $bindable() }: { options: string[]; onclick?: (option: string, index: number) => void; selected?: string; selectedIndex?: number } = $props();

    let show: boolean = $state(false);
    let selectedButton: HTMLButtonElement = $state(document.createElement("button"));
    let optionMenu: HTMLDivElement = $state(document.createElement("div"));
    let width: number = $derived(Math.max(optionMenu.clientWidth, selectedButton.clientWidth));

    function showMenu(): void {
        show = !show;
    }

    function selectOptionOnclick(option: string, index: number): void {
        selectedButton.textContent = option;
        selected = option;
        selectedIndex = index;
        onclick?.(option, index);
    }

    function closeOptionsOnWindowClick(event: PointerEvent): void {
        const target = (event.target as HTMLElement);
        if(!target.matches(".SelectComponent") || target !== selectedButton) {
            show = false;
        }
    }

    window.addEventListener("click",closeOptionsOnWindowClick);
    onDestroy(()=>window.removeEventListener("click", closeOptionsOnWindowClick));
</script>

<div class="relative inline-block" style:width={`${width}px`}>
    <button bind:this={selectedButton} onclick={showMenu} class="SelectComponent cursor-pointer w-full min-h-5 border-1 border-secondary rounded" style:width={`${width}px`}><span class="invisible">A</span></button>
    <div bind:this={optionMenu} class="absolute block max-h-30 overflow-y-scroll  {show ? "visible" : "invisible"} bg-white rounded shadow-xl z-10" >
        {#each options as option, i }
            <button onclick={()=>selectOptionOnclick(option, i)} class="block w-full cursor-pointer hover:bg-blue-500 hover:text-white" >{option}</button>
        {/each}
    </div>
</div>