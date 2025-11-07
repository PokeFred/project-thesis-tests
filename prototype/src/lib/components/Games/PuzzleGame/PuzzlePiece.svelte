<script lang="ts">
    import { draggable, type DragEventData } from "@neodrag/svelte";
    import Puzzle, { type Piece } from "./Puzzle.svelte";

    const { src, alt, piece, quiz, onDragStartProp, onDragEndProp }: { src: string; alt: string; quiz: Puzzle; piece: Piece; onDragStartProp: (piece: Piece, event: DragEventData)=>void; onDragEndProp: (piece: Piece)=>void } = $props();
    const SNAP_RANGE = 20;

    let slotBbox: DOMRect = $state({height: 0, width: 0, x: 0, y: 0, bottom: 0, left: 0, right: 0, top: 0, toJSON: ()=>{}});

    $effect(() => {
        if(piece.Slot.Slot) {
            slotBbox = piece.Slot.Slot?.getBBox();
        }
    });

    function inRange(data: DragEventData): boolean {
        const LEFT_RELATIVE_TO_GAME: number = data.offsetX + data.currentNode.offsetLeft;
        const TOP_RELATIVE_TO_GAME: number = data.offsetY + data.currentNode.offsetTop;

        const SLOT_DISTANCE_X = ((slotBbox.x * quiz.Window.ScaleWidth) - (LEFT_RELATIVE_TO_GAME));
        const SLOT_DISTANCE_Y = ((slotBbox.y * quiz.Window.ScaleHeight) - (TOP_RELATIVE_TO_GAME));              
        
        return Math.abs(SLOT_DISTANCE_X) < SNAP_RANGE && Math.abs(SLOT_DISTANCE_Y) < SNAP_RANGE;
    }

    function snap(data: any): void {
        piece.CurrentPosition = {x: (slotBbox.x * quiz.Window.ScaleWidth) - data.currentNode.offsetLeft, y: (slotBbox.y *  quiz.Window.ScaleHeight) - data.currentNode.offsetTop}
    }

    function onDragStart(data: DragEventData): void {
        piece.Dragging = true;
        piece.removeFromSlot();
        onDragStartProp(piece, data);
        piece.PuzzlePiece!.style.zIndex = "10";
    }

    function onDragEnd(data: DragEventData): void {
        piece.Dragging = false;
        if (inRange(data) && !piece.Slot.Selected) {
            snap(data);
            piece.placeInSlot();
        } else {
            piece.removeFromSlot();
            onDragEndProp(piece);
        }
        piece.PuzzlePiece!.style.zIndex = "0";
    }
</script>

<img
    {src}
    {alt}
    bind:this={piece.PuzzlePiece}
    draggable="false"
    use:draggable={{
        position: piece.CurrentPosition, // zum binden der koordinaten, snap
        onDragStart: onDragStart,
        onDragEnd: onDragEnd,
        // bounds: ".puzzle-game", // TODO: evtl wieder einbinden
    }}
    style:width={piece.Dragging || piece.Placed ? `${slotBbox.width *  quiz.Window.ScaleWidth}px` : "100%" }
    style:height={piece.Dragging || piece.Placed ? `${slotBbox.height *  quiz.Window.ScaleHeight}px` : "100%"}
    class="touch-none object-contain"
/>

