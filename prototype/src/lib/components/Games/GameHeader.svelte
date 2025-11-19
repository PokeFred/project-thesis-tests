<!-- TODO: header und footer tag? -->
<script lang="ts">
    import { goto } from "$app/navigation";
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
    import { Icon } from "svelte-awesome";

    let { stitle, identifier, completion, text }: { stitle: string; identifier: string; completion: number; text: string[] | string } = $props();
</script>

<div class="w-full h-auto flex justify-between items-center px-6 mb-[23px] mt-[6px]">
        <span class="text-lg font-semibold">{stitle}</span>
        <button onclick={() => goto("/app/stations")} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faAngleLeft} class="w-6 h-6" />
        </button>
    </div>

<div class="w-full h-[46px] text-primary bg-secondary rounded-full flex justify-between px-6 py-2">
    <span class="text-lg font-bold text-left">{identifier}</span>
    <div class="h-7 flex justify-center items-center">
        <div class="w-[49px] h-fit bg-primary border rounded-full pr-[1px] mr-[6px]">
            <div class="w-[{completion}%] h-4 bg-secondary border rounded-full"></div>
        </div>
        <span class="text-lg font-bold text-right">%</span>
    </div>
</div>

{#if typeof text === "string"}
    <p class="font-bold mx-[9px] mb-[58px] mt-[61px]">{text}</p>
{:else}
    {#each text as t, i }
        {#if i == 0}
            <p class="font-bold mx-[9px] mb-[58px] mt-[61px]">{t}</p>
        {:else}
            <p class="font-bold mx-[9px] my-[58px]">{t}</p>
        {/if}
    {/each}
{/if}
