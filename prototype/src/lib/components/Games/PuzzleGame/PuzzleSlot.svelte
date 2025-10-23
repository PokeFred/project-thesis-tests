<script lang="ts">
    import { type PuzzlePiece } from "./Puzzle.svelte";
    const { piece }: { piece: PuzzlePiece } = $props();
</script>

<path fill={piece.Placed ? "none" : "black"} d={piece.D} bind:this={piece.PuzzleSlot}/>