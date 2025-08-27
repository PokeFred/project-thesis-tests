<script lang="ts">
    import Piece, { type CutoutData } from "./Piece.svelte";
    import PuzzleSlot from "./PuzzleSlot.svelte";
    import PuzzlePiece from "./PuzzlePiece.svelte";

    const { path, imgSrc, alt, cutoutData }: { path: string; imgSrc: string; alt: string; cutoutData:CutoutData[] } = $props();
    const pieces: Piece[] = cutoutData.map((cutout: any) => new Piece(path, cutout))
    
    let puzzleGame: HTMLDivElement;

    function winCondition() {
        return pieces.every((e) => e.isPlaced() === true);
    }
</script>

<div class="puzzle-game" bind:this={puzzleGame}>
    <figure>
        <!-- <figcaption></figcaption> -->
        <img src={`${path}/${imgSrc}`} {alt} />
    </figure>

    {#each pieces as piece}
        <PuzzleSlot {piece} />
    {/each}

    <div class="puzzle-piece-container">
        {#each pieces as piece}
            <PuzzlePiece
                src={piece.src}
                alt="icon"
                {piece}
                {puzzleGame}
                {winCondition}
            />
        {/each}
    </div>
</div>

<style>
    .puzzle-piece-container {
        border: 1px solid black;
    }

    .puzzle-game {
        display: inline-block;
        position: relative;
    }

    figure {
        margin: 0px;
    }
</style>
