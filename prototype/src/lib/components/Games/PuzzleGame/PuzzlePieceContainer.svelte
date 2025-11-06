<script lang="ts">
    import type { Piece, Position } from "./Puzzle.svelte";
    import type Puzzle from "./Puzzle.svelte";
    import PuzzlePieceComponent from "./PuzzlePiece.svelte"

    let { quiz, scaleWidth, scaleHeight }: { quiz: Puzzle, scaleWidth: number, scaleHeight: number } = $props();

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

    // TODO: beides Auslagern in container component
    function prependContainerScrollable(piece: Piece): void {
        const node: HTMLImageElement = piece.PuzzlePiece!;
        if(container.contains(node)) {
            node.style.position = "static";
            containerLayout.find((container: PieceContainer)=> container.piece === piece)?.container.appendChild((piece.PuzzlePiece as Node));
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
    <div bind:this={containerScrollable} class="flex flex-row w-full justify-between rounded-xs border-1 overflow-x-scroll">
        {#each quiz.PiecesMixed as piece: Piece, i}
            <div bind:this={containerLayout[i].container} class="shrink-0 w-20 h-20 m-1">
                <PuzzlePieceComponent
                    src={piece.Src}
                    alt="icon"
                    {piece}
                    {scaleWidth}
                    {scaleHeight}
                    onDragStartProp={prependContainer}
                    onDragEndProp={prependContainerScrollable}
                />
            </div>
        {/each}
    </div>
</div>