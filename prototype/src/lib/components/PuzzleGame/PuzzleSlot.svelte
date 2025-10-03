<script lang="ts">
    import { type Piece } from "./Puzzle.svelte";
    const { piece }: { piece: Piece } = $props();
</script>

<path fill={piece.isPlaced() ? "none" : "black"} d={piece.d} bind:this={piece.puzzleSlot}/>