<script lang="ts">
    import type Piece from "./Piece.svelte";
    const { piece, scaleWidth, scaleHeight }: { piece: Piece, scaleWidth: number, scaleHeight: number } = $props();
</script>

<div
    bind:this={piece.puzzleSlot}
    class:puzzle-not-placed={!piece.isPlaced()}
    style="
            width: {piece.width * scaleWidth}px;
            height: {piece.height * scaleHeight}px;
            top: {piece.position.y * scaleHeight}px;
            left: {piece.position.x * scaleWidth}px;
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
