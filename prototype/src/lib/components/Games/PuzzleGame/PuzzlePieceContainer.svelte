<script lang="ts">
    import type { DragEventData } from "@neodrag/svelte";
    import type { Piece, Position } from "./Puzzle.svelte";
    import type Puzzle from "./Puzzle.svelte";
    import PuzzlePieceComponent from "./PuzzlePiece.svelte"

    let { quiz }: { quiz: Puzzle } = $props();

    let container: HTMLDivElement;
    let containerScrollable: HTMLDivElement;

    type PieceContainer = {
        piece: Piece,
        container: HTMLDivElement
    }


    let containerLayout: PieceContainer[] = $state(
         quiz.PiecesMixed.map((piece) => ({ piece, container: undefined! }))
    );

    containerLayout.forEach((container: PieceContainer, i: number) => container.piece = quiz.PiecesMixed[i]);

    function insertContainerScrollable(piece: Piece): void {
        const node: HTMLImageElement = piece.PuzzlePiece!;
        if(container.contains(node)) {
            node.style.position = "static";
            containerLayout.find((container: PieceContainer)=> container.piece === piece)?.container.appendChild((piece.PuzzlePiece as Node));
            piece.CurrentPosition = {x: 0, y: 0};
        }
    }
    // TODO: beim start drag ist es noch bisschen verschoben
    function prependContainer(piece: Piece, event: DragEventData): void {
        const NODE: HTMLImageElement = piece.PuzzlePiece!;
        const WINDOW: HTMLDivElement = quiz.Window.Window!;

        const BOUNDING_BOX_SLOT: DOMRect = piece.Slot.Slot!.getBoundingClientRect(); // Slot bounding box nehmen, da Icon bounding box buggy mit verschieben.
        const WINDOW_BOUNDING_BOX = WINDOW!.getBoundingClientRect();
        
        const LEFT_RELATIVE_TO_WINDOW = event.event.clientX - WINDOW_BOUNDING_BOX.left;
        const TOP_RELATIVE_TO_WINDOW = event.event.clientY - WINDOW_BOUNDING_BOX.top;
        
        const mitte: Position = {x: LEFT_RELATIVE_TO_WINDOW  -  (BOUNDING_BOX_SLOT.width / 2), y:  TOP_RELATIVE_TO_WINDOW - (BOUNDING_BOX_SLOT.height / 2)};
        
        if(containerScrollable.contains(NODE)) {
            NODE.style.position = "absolute";    
            container.prepend(NODE);
            NODE.style.left = mitte.x + "px";   
            NODE.style.top = mitte.y + "px";
        }        
    }
</script>

<div bind:this={container}>
    <div bind:this={containerScrollable} class="absolute flex flex-row w-full justify-between bottom-1 rounded-xs border-1 overflow-x-scroll bg-white/25">
        {#each quiz.PiecesMixed as piece: Piece, i}
            <div bind:this={containerLayout[i].container} class="shrink-0 w-20 h-20 mx-3 my-1">
                <PuzzlePieceComponent
                    src={piece.Src}
                    alt="icon"
                    {piece}
                    {quiz}
                    onDragStartProp={prependContainer}
                    onDragEndProp={insertContainerScrollable}
                />
            </div>
        {/each}
    </div>
</div>