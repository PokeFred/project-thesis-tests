<script lang="ts">
    import Puzzle, { type CutoutData, type PuzzleData, Piece, PuzzlePiece } from "./Puzzle.svelte";
    import PuzzleSlot from "./PuzzleSlot.svelte";
    import PuzzlePieceComponent from "./PuzzlePiece.svelte";
    import { gameState, QuizState } from "$lib/State.svelte";

    let { path, backgroundSrc, alt, puzzleData, complete = $bindable(), quizState }: { path: string; backgroundSrc: string; alt: string; puzzleData: PuzzleData; complete: () => void; quizState: QuizState } = $props();
    const puzzle: Puzzle = new Puzzle(quizState, puzzleData.cutouts.map((cutout: CutoutData) => new PuzzlePiece(path, cutout)), puzzleData.noise?.map((noiseSrc: string) => new Piece(path, noiseSrc)));
    complete = puzzle.complete.bind(puzzle);
    
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
        <img draggable="false" src={`${path}/${backgroundSrc}`} {alt} bind:naturalWidth={naturalWidth} bind:naturalHeight={naturalHeight} bind:clientWidth={clientWidth} bind:clientHeight={clientHeight} />
    
        <svg viewBox={puzzleData.viewBox} class="absolute top-0 left-0">
            {#each puzzle.pieces as piece}
                <PuzzleSlot {piece} />
            {/each}
        </svg>
    </figure>

    
    <div class="puzzle-piece-container flex flex-wrap justify-between rounded-xs border-1">
        {#each puzzle.piecesMixed as piece: Piece}
            <PuzzlePieceComponent
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