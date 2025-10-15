<script lang="ts">
    import { onDestroy } from "svelte";

    let { options, onchange = $bindable() }: { options: string[], onchange: (option: string, index: number)=>boolean } = $props();

    let show: boolean = $state(false);
    let selected: HTMLButtonElement = $state(document.createElement("button"));
    let optionMenu: HTMLDivElement = $state(document.createElement("div"));
    let width: number = $derived(Math.max(optionMenu.clientWidth, selected.clientWidth));

    function showMenu(): void {
        show = !show;
    }

    function selectOptionOnclick(option: string, index: number): void {
        if(onchange(option, index)) {
            selected.textContent = option;
        }
    }

    function closeOptionsOnWindowClick(event: PointerEvent): void {
        const target = (event.target as HTMLElement);
        if(!target.matches(".SelectComponent") || target !== selected) {
            show = false;
        }
    }

    window.addEventListener("click",closeOptionsOnWindowClick);
    onDestroy(()=>window.removeEventListener("click", closeOptionsOnWindowClick));
</script>

<div class="relative inline-block" style:width={`${width}px`}>
    <button bind:this={selected} onclick={showMenu} class="SelectComponent cursor-pointer w-full min-h-5 border-1 border-black rounded" style:width={`${width}px`}><span class="invisible">A</span></button>
    <div bind:this={optionMenu} class="absolute block {show ? "visible" : "invisible"} bg-white rounded shadow-xl z-10" >
        {#each options as option, i }
            <button onclick={()=>selectOptionOnclick(option, i)} class="block w-full cursor-pointer hover:bg-blue-500 hover:text-white" >{option}</button>
        {/each}
    </div>
</div>