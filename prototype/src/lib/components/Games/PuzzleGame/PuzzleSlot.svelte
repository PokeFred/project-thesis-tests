<script lang="ts">
    import { type PuzzlePiece } from "./Puzzle.svelte";
    const { piece }: { piece: PuzzlePiece } = $props();
</script>

<path fill={piece.isPlaced() ? "none" : "black"} d={piece.d} bind:this={piece.puzzleSlot}/>