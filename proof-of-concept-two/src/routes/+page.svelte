<script lang="ts">
    import type { PageProps } from "./$types"
    import { draggable } from "@neodrag/svelte"
    import Piece from "./Piece"

    let { data }: PageProps = $props()
    const SNAP: number = 20
    let puzzleImage: HTMLDivElement
    let pieces: Piece[] = data.cutoutData.map((e: any) => new Piece(e, null, null, { x: 0, y: 0 }))

    function testWinCon() {
        return pieces.every((e) => e.getPlaced() === true)
    }
</script>

<div class="puzzle-image" bind:this={puzzleImage}>
    <figure >
    <!-- <figcaption></figcaption> -->
        <img src="./images/Image.png" alt="icon" />
    </figure>

    {#each pieces as piece}
        <!-- Black box -->
        <div
            style="
            width: {piece.getCutoutData().width}px;
            height: {piece.getCutoutData().height}px;
            top: {piece.getCutoutData().y}px;
            left: {piece.getCutoutData().x}px;
            
        "
            class="puzzle-blackbox"
            bind:this={piece.BlackBox()}
        ></div>
    {/each}

    <div class="puzzle-piece-container">
        {#each pieces as piece, i}
            <img
                src="./images/Auswahl_{i}.png"
                alt="icon"
                class="puzzle-piece"
                bind:this={piece.getPuzzlePiece()}
                use:draggable={{
                    position: piece.getCurrentPosition(), // zum binden der koordinaten
                    onDragEnd(data: any) {
                        // console.log(data.offsetX, puzzleImage.clientHeight + data.offsetY - data.currentNode.clientHeight)

                        if (Math.abs(piece.getCutoutData().x - (data.offsetX + data.currentNode.offsetLeft)) < SNAP && Math.abs(piece.getCutoutData().y -( puzzleImage.clientHeight + data.offsetY - data.currentNode.clientHeight)) < SNAP) {
                            piece.getCurrentPosition().x = piece.getCutoutData().x - data.currentNode.offsetLeft
                            piece.getCurrentPosition().y = piece.getCutoutData().y - data.currentNode.offsetTop

                            // piece.blackBox!.hidden = true
                            // piece.puzzlePiece!.hidden = true
                            piece.getBlackBox()!.style.opacity = "0"
                            piece.getPuzzlePiece()!.style.opacity = "0"
                            piece.setPlaced(true)
                        } else {
                            piece.setCurrentPosition(data.offsetX, data.offsetY)
                            piece.setPlaced(false)
                        }

                        if (testWinCon()) {
                            console.log("GEWONNEN")
                        }
                    },
                    onDragStart(data: any) {
                        if (piece.getPlaced()) {
                            // piece.blackBox!.hidden = false
                            // piece.puzzlePiece!.hidden = false
                            piece.getBlackBox()!.style.opacity = "1"
                            piece.getPuzzlePiece()!.style.opacity = "1"
                        }
                        piece.setPlaced(false)
                    },
                }}
            />
        {/each}
    </div>
</div>

<style>
    .puzzle-blackbox {
        position: absolute;
        background-color: black;
    }

    .puzzle-piece-container {
        border: 1px solid black;
    }

    .puzzle-image {
        display: inline-block;
        position: relative;
    }

    figure {
        margin: 0px;
    }
</style>
