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
<div>
    <button onclick={showModal}>Rätsel beenden</button>
</div>