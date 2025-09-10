<script lang="ts">
    import Piece, { type CutoutData } from "./Piece.svelte";
    import PuzzleSlot from "./PuzzleSlot.svelte";
    import PuzzlePiece from "./PuzzlePiece.svelte";

    const { path, backgroundSrc, alt, cutoutData }: { path: string; backgroundSrc: string; alt: string; cutoutData:CutoutData[] } = $props();
    const pieces: Piece[] = cutoutData.map((cutout: any) => new Piece(path, cutout)).sort(() => Math.random() - 0.5);

    
    let puzzleGame: HTMLDivElement;
    
    let naturalWidth: number = $state(0);
    let naturalHeight: number = $state(0);
    let clientWidth: number = $state(0);
    let clientHeight: number = $state(0);
    let scaleWidth = $derived(clientWidth / naturalWidth);
    let scaleHeight = $derived(clientHeight / naturalHeight);

    function winCondition() {
        return pieces.every((e) => e.isPlaced() === true);
    }
</script>

<div class="puzzle-game" bind:this={puzzleGame}>
    <figure>
        <!-- <figcaption></figcaption> -->
        <img draggable="false" src={`${path}/${backgroundSrc}`} {alt} bind:naturalWidth={naturalWidth} bind:naturalHeight={naturalHeight} bind:clientWidth={clientWidth} bind:clientHeight={clientHeight} />
    </figure>

    {#each pieces as piece}
        <PuzzleSlot {piece} {scaleWidth} {scaleHeight}/>
    {/each}

    <div class="puzzle-piece-container flex justify-between">
        {#each pieces as piece}
            <PuzzlePiece
                src={piece.src}
                alt="icon"
                {piece}
                {scaleWidth}
                {scaleHeight}
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
