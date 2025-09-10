<script lang="ts">
    import { draggable, type DragEventData } from "@neodrag/svelte";
    import type Piece from "./Piece.svelte";

    const { src, alt, piece, puzzleGame, winCondition}: { src: string; alt: string; piece: Piece; puzzleGame: HTMLDivElement; winCondition: Function; } = $props();
    const SNAP_RANGE = 20;

    function inRange(data: DragEventData): boolean {
        const OFFSET_LEFT_RELATIVE_TO_GAME: number = data.offsetX + data.currentNode.offsetLeft;
        const OFFSET_TOP_RELATIVE_TO_GAME: number = data.offsetY + data.currentNode.offsetTop;

        const SLOT_DISTANCE_X = (piece.position.x) - (OFFSET_LEFT_RELATIVE_TO_GAME);
        const SLOT_DISTANCE_Y = (piece.position.y) - (OFFSET_TOP_RELATIVE_TO_GAME);
        
        return Math.abs(SLOT_DISTANCE_X) < SNAP_RANGE && Math.abs(SLOT_DISTANCE_Y) < SNAP_RANGE;
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
