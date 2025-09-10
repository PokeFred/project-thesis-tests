<script lang="ts">
    import { draggable, type DragEventData } from "@neodrag/svelte";
    import type Piece from "./Piece.svelte";

    const { src, alt, piece, scaleWidth, scaleHeight, winCondition}: { src: string; alt: string; piece: Piece; scaleWidth: number; scaleHeight: number; winCondition: Function; } = $props();
    const SNAP_RANGE = 20;

    function inRange(data: DragEventData): boolean {
        const OFFSET_LEFT_RELATIVE_TO_GAME: number = data.offsetX + data.currentNode.offsetLeft;
        const OFFSET_TOP_RELATIVE_TO_GAME: number = data.offsetY + data.currentNode.offsetTop;

        const SLOT_DISTANCE_X = ((piece.position.x * scaleWidth) - (OFFSET_LEFT_RELATIVE_TO_GAME));
        const SLOT_DISTANCE_Y = ((piece.position.y * scaleHeight) - (OFFSET_TOP_RELATIVE_TO_GAME));        
        
        return Math.abs(SLOT_DISTANCE_X) < SNAP_RANGE && Math.abs(SLOT_DISTANCE_Y) < SNAP_RANGE;
    }

    function snap(data: any): void {
        piece.setCurrentPosition((piece.position.x * scaleWidth) - data.currentNode.offsetLeft, (piece.position.y * scaleHeight) - data.currentNode.offsetTop);
    }

    function onDragEnd(data: DragEventData): void {
        if (inRange(data)) {
            snap(data);
            piece.setPlaced(true);
        } else {
            piece.setPlaced(false);
        }

        if (winCondition()) {
            console.log("GEWONNEN");
        }
    }

    function onDragStart(data: DragEventData): void {
        piece.setPlaced(false);
    }
</script>
<!-- TODO: Fix dragging bug -->
<img
    {src}
    {alt}
    bind:this={piece.puzzlePiece}
    class:puzzle-placed={piece.isPlaced()}
    use:draggable={{
        position: piece.getCurrentPosition(), // zum binden der koordinaten, snap
        onDragEnd: onDragEnd,
        onDragStart: onDragStart,
        bounds: ".puzzle-game",
        applyUserSelectHack: false
    }}
    style="
            width: {piece.width * scaleWidth}px;
            height: {piece.height * scaleHeight}px;
            top: {piece.position.y * scaleHeight}px;
            left: {piece.position.x * scaleWidth}px;
        "
    class="m-1"
/>

<style>
    .puzzle-placed {
        opacity: 0;
    }
</style>
