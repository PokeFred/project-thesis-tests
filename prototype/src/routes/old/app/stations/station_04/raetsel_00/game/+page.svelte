<script lang="ts">
    import Modal from "$components/Modal.svelte"
    import { goto } from "$app/navigation"
    import { background, slotGroups, quiz } from "../Quiz"
    import PuzzleGameCanvas from "$components/Games/PuzzleGame/PuzzleGame.svelte";
    import GameFooter from "$components/Games/GameFooter.svelte";
    import GameHeader from "$components/Games/GameHeader.svelte";

    quiz.reset();

    // TODO: ladescreen, wenn nicht alle bilder geladen wurden
    let showModal: () => void = $state(()=>{});

    const data = {
        stitle: "ASD",
        completion: 0,
        identifier: "asd",
        text: "Text..."
    }
</script>

<GameHeader stitle={data.stitle} completion={data.completion} identifier={data.identifier} text={data.text} />

<PuzzleGameCanvas {background} {slotGroups} {quiz}/>

<GameFooter {quiz}>
    <p>Möchtest du dieses Rätsel wirklich beenden?</p>
    {#if !quiz.Pieces.every((piece) => piece.Placed)}
        <p>Es sind noch nicht alle Felder ausgefüllt.</p>
    {/if}
</GameFooter>