<script lang="ts">

    let { options }: { options: string[]} = $props();

    let show: boolean = $state(false);
    let selected: HTMLButtonElement = $state(document.createElement("button"));
    let optionMenu: HTMLDivElement = $state(document.createElement("div"));
    let width: number = $derived(Math.max(optionMenu.clientWidth, selected.clientWidth));

    function showMenu(): void {
        show = !show;
    }

    function selectOption(option: string): any{
        selected.textContent = option;
    }
</script>

<!-- w-[{width}px] -->
<div class="relative inline-block" style:width={`${width}px`}>
    <button bind:this={selected} onclick={showMenu} class="cursor-pointer w-full min-h-5 border-1 border-black rounded" style:width={`${width}px`}><span class="invisible">A</span></button>
    <div bind:this={optionMenu} class="absolute block {show ? "visible" : "invisible"} bg-white rounded shadow-xl z-10" >
        {#each options as option }
            <button onclick={()=>selectOption(option)} class="block w-full cursor-pointer hover:bg-blue-500 hover:text-white" >{option}</button>
        {/each}
    </div>
</div>