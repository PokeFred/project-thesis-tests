<script lang="ts">
    import Modal from "$components/Modal.svelte"
    import { goto } from "$app/navigation"
    import { quiz } from "../Quiz"
    import PuzzleGameCanvas from "$components/Games/PuzzleGame/PuzzleGame.svelte";

    quiz.reset();

    // TODO: ladescreen, wenn nicht alle bilder geladen wurden
    let showModal: () => void = $state(()=>{});
</script>

<PuzzleGameCanvas {quiz}/>

<Modal bind:show={showModal} confirmButtonText={"ja"} closeButtonText={"Nein"} onConfirm={()=> {
        quiz.complete();
        goto("./end"); 
    }}>
    <p>Möchtest du dieses Rätsel wirklich beenden?</p>
    {#if !quiz.Pieces.every((piece) => piece.Placed)}
        <p>Es sind noch nicht alle Felder ausgefüllt.</p>
    {/if}
</Modal>
<div class="mt-2">
    <button onclick={showModal} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Rätsel beenden</button>
</div>
