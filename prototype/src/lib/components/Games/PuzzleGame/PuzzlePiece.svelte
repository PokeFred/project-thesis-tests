<script lang="ts">
    import { draggable, type DragEventData } from "@neodrag/svelte";
    import { type Piece } from "./Puzzle.svelte";

    const { src, alt, piece, scaleWidth, scaleHeight, onDragStartProp, onDragEndProp }: { src: string; alt: string; piece: Piece; scaleWidth: number; scaleHeight: number; onDragStartProp: (piece: Piece)=>void; onDragEndProp: (piece: Piece)=>void } = $props();
    const SNAP_RANGE = 20;

    let slotBbox: DOMRect = $state({height: 0, width: 0, x: 0, y: 0, bottom: 0, left: 0, right: 0, top: 0, toJSON: ()=>{}});
    let naturalWidth: number = $state(0);
    let naturalHeight: number = $state(0);

    $effect(() => {
        if(piece.Slot.Slot) {
            slotBbox = piece.Slot.Slot?.getBBox();
        }
    });

    function inRange(data: DragEventData): boolean {
        const OFFSET_LEFT_RELATIVE_TO_GAME: number = data.offsetX + data.currentNode.offsetLeft;
        const OFFSET_TOP_RELATIVE_TO_GAME: number = data.offsetY + data.currentNode.offsetTop;

        const SLOT_DISTANCE_X = ((slotBbox.x * scaleWidth) - (OFFSET_LEFT_RELATIVE_TO_GAME));
        const SLOT_DISTANCE_Y = ((slotBbox.y * scaleHeight) - (OFFSET_TOP_RELATIVE_TO_GAME));        
        
        return Math.abs(SLOT_DISTANCE_X) < SNAP_RANGE && Math.abs(SLOT_DISTANCE_Y) < SNAP_RANGE;
    }

    function snap(data: any): void {
        piece.CurrentPosition = {x: (slotBbox.x * scaleWidth) - data.currentNode.offsetLeft, y: (slotBbox.y * scaleHeight) - data.currentNode.offsetTop}
    }

    function onDragStart(data: DragEventData): void {
        piece.removeFromSlot();
        onDragStartProp(piece);
    }

    function onDragEnd(data: DragEventData): void {
        if (inRange(data)) {
            snap(data);
            piece.placeInSlot();
        } else {
            piece.removeFromSlot();
            onDragEndProp(piece); // TODO: für non PuzzlePiece teile machen. (Piece)
        }
    }
</script>

<img
    {src}
    {alt}
    bind:this={piece.PuzzlePiece}
    bind:naturalWidth={naturalWidth}
    bind:naturalHeight={naturalHeight}
    draggable="false"
    use:draggable={{
        position: piece.CurrentPosition, // zum binden der koordinaten, snap
        onDragStart: onDragStart,
        onDragEnd: onDragEnd,
        bounds: ".puzzle-game",
    }}
    style:width={`${slotBbox.width * scaleWidth}px`}
    style:height={`${slotBbox.height * scaleHeight}px`}
    class="touch-none m-1"
/>

<!-- style:width={`${slotBbox.width * scaleWidth}px`}
    style:height={`${slotBbox.height * scaleHeight}px`} -->

<!-- style:width={piece instanceof PuzzlePiece ? `${slotBbox.width * scaleWidth}px` : `${naturalWidth * scaleWidth}px`}
    style:height={piece instanceof PuzzlePiece ? `${slotBbox.height * scaleHeight}px` : `${naturalHeight * scaleWidth}px`} -->

<style>
    .puzzle-placed {
        opacity: 0;
    }
</style>