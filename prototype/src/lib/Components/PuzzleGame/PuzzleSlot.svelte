<script lang="ts">
    import type Piece from "./Piece.svelte";
    const { piece }: { piece: Piece } = $props();
</script>

<div
    bind:this={piece.puzzleSlot}
    class:puzzle-not-placed={!piece.isPlaced()}
    style="
            width: {piece.width}px;
            height: {piece.height}px;
            top: {piece.position.y}px;
            left: {piece.position.x}px;
        "
></div>

<style>
    div {
        position: absolute;
    }
    .puzzle-not-placed {
        background-color: black;
    }
</style>
