<script lang="ts">
    import type { DragEventData } from "@neodrag/svelte";
    import type { Piece, Position } from "./Puzzle.svelte";
    import type Puzzle from "./Puzzle.svelte";
    import PuzzlePieceComponent from "./PuzzlePiece.svelte"
    import { Icon } from "svelte-awesome";
    import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown"
    import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

    type PieceContainer = {
        piece: Piece,
        container: HTMLDivElement
    }

    let { quiz }: { quiz: Puzzle } = $props();

    let container: HTMLDivElement;
    let containerScrollable: HTMLDivElement;

    let toggleButton: HTMLButtonElement;
    let visible: boolean = $state(true);

    function toggleContainer(): void {
        if(visible){
            containerScrollable.style.display = "none";
        }
        else{
            containerScrollable.style.display = "flex";
        }
        visible = !visible;
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
        const WINDOW: HTMLDivElement = quiz.ImageWindow.Window!;

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
    <div class="test-container absolute bottom-0">
        <div class="relative">
            <button bind:this={toggleButton} onclick={toggleContainer} class="rounded-xs bg-white/25"><Icon data={visible ? faArrowDown : faArrowUp}/></button>
            <div bind:this={containerScrollable} class="flex flex-row w-full justify-between rounded-xs border-1 overflow-x-scroll overflow-y-clip bg-white/25 backdrop-blur-sm">
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
    </div>
</div>