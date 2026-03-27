<script lang="ts">
    import type { PageProps } from "./$types"
    import { sendTo } from "$utils/url"
    import { onMount } from "svelte";
    import Game from "$utils/game"
    import EndModal from "$components/EndModal.svelte";


    let { data }: PageProps = $props()

    let endModal: EndModal
    
    onMount((): void => {
        if (Game.isFinished()) {
            endModal.openModal()
        }
    })
</script>

<EndModal bind:this={endModal} />

<div class="w-full h-auto text-primary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="font-medium text-[16px] leading-6 tracking-[1.28px] uppercase">STATIONEN</span>
    </div>
    <div class="mt-2 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.stations as station}
            <button onclick={(): Promise<void> => sendTo(`/s/${station.id}`)} class="w-full h-auto text-secondary bg-primary rounded-full grid grid-cols-[auto_60px] gap-4 cursor-pointer px-6 py-2 active:scale-95">
                <span class="font-medium text-[20px] leading-6 text-left">{station.title}</span>
                <span class="text-right text-[16px] leading-6">{station.score.current}/{station.score.max}</span>
            </button>
        {/each}
    </div>
</div>
