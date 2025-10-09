<script lang="ts">
    import type { PageProps } from "./$types"
    import PuzzleGame from "$components/PuzzleGame/PuzzleGame.svelte"
    import Modal from "$components/Modal.svelte"
    import { goto } from "$app/navigation"
    import { gameState } from "$lib/State.svelte";

    // TODO: ladescreen, wenn nicht alle bilder geladen wurden
    let showModal: () => void = $state(()=>{});
    let complete: () => void = $state(()=>{});

    const { data }: PageProps = $props()
</script>

<PuzzleGame path={data.path} backgroundSrc={data.backgroundSrc} puzzleData={data.puzzleData} alt={"Puzzel Spiel"} bind:complete={complete} quizState={gameState.stationStates[3].quizStates[0]} />

<Modal bind:show={showModal} confirmButtonText={"ja"} closeButtonText={"Nein"} onConfirm={()=> {
        complete();
        goto("./end"); 
    }}>
    <p>Möchtest du dieses Rätsel wirklich beenden?</p>
    <!-- {#if }
        <p>Es sind noch nicht alle Felder ausgefüllt.</p>
    {/if} -->
</Modal>
<div class="mt-2">
    <button onclick={showModal} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Rätsel beenden</button>
</div>
