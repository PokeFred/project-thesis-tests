<script lang="ts">
    import type Puzzle from "./Puzzle.svelte";
    import PuzzlePieceComponent from "./PuzzlePiece.svelte"

    let { quiz, scaleWidth, scaleHeight }: { quiz: Puzzle, scaleWidth: number, scaleHeight: number } = $props();
</script>

<div class="puzzle-piece-container">
    <div class="puzzle-piece-container-scrollable flex flex-row justify-between rounded-xs border-1 overflow-x-scroll">
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