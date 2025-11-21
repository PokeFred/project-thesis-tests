<script lang="ts">
    import { type Piece } from "./Puzzle.svelte";
    const { piece }: { piece: Piece } = $props();
</script>

<path fill={piece.Slot.Selected ? "none" : "black"} d={piece.Slot.D} bind:this={piece.Slot.Slot}/>