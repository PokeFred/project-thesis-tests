<script lang="ts">
    import Puzzle from "./Puzzle.svelte";
    import PuzzleSlot from "./PuzzleSlot.svelte";
    import PuzzlePieceComponent from "./PuzzlePiece.svelte";

    let { quiz }: { quiz: Puzzle } = $props();
    
    let naturalWidth: number = $state(0);
    let naturalHeight: number = $state(0);
    let clientWidth: number = $state(0);
    let clientHeight: number = $state(0);
    let scaleWidth = $derived(clientWidth / naturalWidth);
    let scaleHeight = $derived(clientHeight / naturalHeight);
</script>

<div class="puzzle-game inline-block relative select-none">
    <figure class="m-0 relative max-w-fit">
        <!-- <figcaption></figcaption> -->
        <img draggable="false" src={quiz.Background.src} alt="Puzzelspiel" bind:naturalWidth={naturalWidth} bind:naturalHeight={naturalHeight} bind:clientWidth={clientWidth} bind:clientHeight={clientHeight} />
    
        <svg viewBox={quiz.Background.viewbox} class="absolute top-0 left-0">
            {#each quiz.Pieces as piece}
                <PuzzleSlot {piece} />
            {/each}
        </svg>
    </figure>

    
    <div class="puzzle-piece-container flex flex-wrap justify-between rounded-xs border-1">
        {#each quiz.PiecesMixed as piece: Piece}
            <PuzzlePieceComponent
                src={piece.Src}
                alt="icon"
                {piece}
                {scaleWidth}
                {scaleHeight}
                winCondition={quiz.winCondition.bind(quiz)}
            />
        {/each}
    </div>
</div>