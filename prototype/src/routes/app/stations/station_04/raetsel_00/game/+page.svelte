<script lang="ts">
    import type { PageProps } from "./$types"
    import { type CutoutData } from "$lib/Components/PuzzleGame/Piece.svelte"
    import PuzzleGame from "$lib/Components/PuzzleGame/PuzzleGame.svelte"
    import Modal from "$lib/Components/Modal.svelte";
    import { goto } from "$app/navigation";

    // TODO: ladescreen, wenn nicht alle bilder geladen wurden
    let showModal: () => void = $state(()=>{});

    const { data }: PageProps = $props()
</script>

<PuzzleGame path={data.path} backgroundSrc={data.backgroundSrc} cutoutData={data.cutoutData as CutoutData[]} alt={"Puzzel Spiel"}  />

<Modal bind:show={showModal} confirmButtonText={"ja"} closeButtonText={"Nein"} onConfirm={()=> {
        // calculateScore();
        goto("./end"); 
    }}>
    <p>Möchtest du das Rätsel wirklich beenden?</p>
    <!-- {#if }
        <p>Es sind noch nicht alle Felder ausgefüllt.</p>
    {/if} -->
</Modal>
<div class="mt-2">
    <button onclick={showModal} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Rätsel beenden</button>
</div>