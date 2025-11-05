<script lang="ts">
    import type { Piece, Position } from "./Puzzle.svelte";
    import type Puzzle from "./Puzzle.svelte";
    import PuzzlePieceComponent from "./PuzzlePiece.svelte"

    let { quiz, scaleWidth, scaleHeight }: { quiz: Puzzle, scaleWidth: number, scaleHeight: number } = $props();

    let container: HTMLDivElement;
    let containerScrollable: HTMLDivElement;

    // TODO: beides Auslagern in container component
    function prependContainerScrollable(piece: Piece): void {
        const node: HTMLImageElement = piece.PuzzlePiece!;
        if(container.contains(node)) {
            node.style.position = "static";
            containerScrollable.prepend(node);
            piece.CurrentPosition = {x: 0, y: 0};
        }
    }
    // TODO: beim start drag ist es noch bisschen verschoben
    function prependContainer(piece: Piece): void {
        const node: HTMLImageElement = piece.PuzzlePiece!;
        const boundingBoxIcon: DOMRect = node.getBoundingClientRect();
        const boundingBoxContainer: DOMRect = container.getBoundingClientRect();
        const mitte: Position = {x: boundingBoxIcon.left - boundingBoxContainer.left, y: boundingBoxIcon.top - boundingBoxContainer.top};

        if(containerScrollable.contains(node)) {
            node.style.left = mitte.x + "px";   
            node.style.position = "absolute";
            container.prepend(node);
        }        
    }
</script>

<div bind:this={container}>
    <div bind:this={containerScrollable} class="flex flex-row justify-between rounded-xs border-1 overflow-x-scroll">
        {#each quiz.PiecesMixed as piece: Piece}
            <PuzzlePieceComponent
                src={piece.Src}
                alt="icon"
                {piece}
                {scaleWidth}
                {scaleHeight}
                onDragStartProp={prependContainer}
                onDragEndProp={prependContainerScrollable}
            />
        {/each}
    </div>
</div>