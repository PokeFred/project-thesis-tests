<script lang="ts">
    import { draggable, type DragEventData } from "@neodrag/svelte";
    import type Piece from "./Piece.svelte";

    const { src, alt, piece, puzzleGame, winCondition}: { src: string; alt: string; piece: Piece; puzzleGame: HTMLDivElement; winCondition: Function; } = $props();
    const SNAP_RANGE = 20;

    function inRange(data: DragEventData): boolean {
        const slotDistanceX = piece.position.x - (data.offsetX + data.currentNode.offsetLeft);
        const slotDistanceY = piece.position.y - (puzzleGame.clientHeight + data.offsetY - data.currentNode.clientHeight);
        return Math.abs(slotDistanceX) < SNAP_RANGE && Math.abs(slotDistanceY) < SNAP_RANGE;
    }

    function snap(data: any): void {
        piece.setCurrentPosition(piece.position.x - data.currentNode.offsetLeft, piece.position.y - data.currentNode.offsetTop);
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

<img
    {src}
    {alt}
    bind:this={piece.puzzlePiece}
    class:puzzle-placed={piece.isPlaced()}
    use:draggable={{
        position: piece.getCurrentPosition(), // zum binden der koordinaten, snap
        onDragEnd: onDragEnd,
        onDragStart: onDragStart,
    }}
/>

<style>
    .puzzle-placed {
        opacity: 0;
    }
</style>
