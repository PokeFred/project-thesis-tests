<script lang="ts">
    import Puzzle, { type CutoutData, Piece } from "./Puzzle.svelte";
    import PuzzleSlot from "./PuzzleSlot.svelte";
    import PuzzlePiece from "./PuzzlePiece.svelte";
    import { gameState } from "$lib/State.svelte";

    let { path, backgroundSrc, alt, cutoutData, complete = $bindable() }: { path: string; backgroundSrc: string; alt: string; cutoutData: CutoutData[]; complete: () => void } = $props();
    const puzzle: Puzzle = new Puzzle(gameState.stationStates[3].quizStates[0], cutoutData.map((cutout: any) => new Piece(path, cutout)).sort(() => Math.random() - 0.5));
    complete = puzzle.complete.bind(puzzle);
    
    let naturalWidth: number = $state(0);
    let naturalHeight: number = $state(0);
    let clientWidth: number = $state(0);
    let clientHeight: number = $state(0);
    let scaleWidth = $derived(clientWidth / naturalWidth);
    let scaleHeight = $derived(clientHeight / naturalHeight);
</script>

<div class="puzzle-game inline-block relative select-none">
    <figure class="m-0">
        <!-- <figcaption></figcaption> -->
        <img draggable="false" src={`${path}/${backgroundSrc}`} {alt} bind:naturalWidth={naturalWidth} bind:naturalHeight={naturalHeight} bind:clientWidth={clientWidth} bind:clientHeight={clientHeight} />
    </figure>

    {#each puzzle.pieces as piece}
        <PuzzleSlot {piece} {scaleWidth} {scaleHeight}/>
    {/each}

    <div class="puzzle-piece-container flex justify-between rounded-xs border-1">
        {#each puzzle.pieces as piece}
            <PuzzlePiece
                src={piece.src}
                alt="icon"
                {piece}
                {scaleWidth}
                {scaleHeight}
                winCondition={puzzle.winCondition.bind(puzzle)}
            />
        {/each}
    </div>
</div>