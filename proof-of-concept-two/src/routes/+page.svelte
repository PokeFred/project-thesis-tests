<script lang="ts">
    import { draggable, type DragOptions } from "@neodrag/svelte";
    import type { PageProps } from "./$types";
    import {Piece} from "./Piece"

    let { data }: PageProps = $props();

    const SNAP = 20;

    let pieces: Piece[] = data.cutoutData.map((e: any) => {
        return new Piece(e, null, null, { x: 0, y: 0 });
    });

    function testWinCon() {
        return pieces.every((e) => e.isPlaced == true);
    }

    let puzzleImage: HTMLDivElement;
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
            width: {piece.cutoutData.width}px;
            height: {piece.cutoutData.height}px;
            top: {piece.cutoutData.y}px;
            left: {piece.cutoutData.x}px;
            
        "
            class="puzzle-blackbox"
            bind:this={piece.blackBox}
        ></div>
    {/each}

    <div class="puzzle-piece-container">
        {#each pieces as piece, i}
            <img
                src="./images/Auswahl_{i}.png"
                alt="icon"
                class="puzzle-piece"
                bind:this={piece.puzzlePiece}
                use:draggable={{
                    position: piece.currentPosition, // zum binden der koordinaten
                    onDragEnd(data) {
                        // console.log(data.offsetX, puzzleImage.clientHeight + data.offsetY - data.currentNode.clientHeight)

                        if (Math.abs(piece.cutoutData.x - (data.offsetX + data.currentNode.offsetLeft)) < SNAP && Math.abs(piece.cutoutData.y -( puzzleImage.clientHeight + data.offsetY - data.currentNode.clientHeight)) < SNAP) {
                            piece.currentPosition.x = piece.cutoutData.x - data.currentNode.offsetLeft;
                            piece.currentPosition.y = piece.cutoutData.y - data.currentNode.offsetTop;

                            // piece.blackBox!.hidden = true;
                            // piece.puzzlePiece!.hidden = true;
                            piece.blackBox!.style.opacity = "0";
                            piece.puzzlePiece!.style.opacity = "0";
                            piece.isPlaced = true;
                        } else {
                            piece.currentPosition.x = data.offsetX;
                            piece.currentPosition.y = data.offsetY;
                            piece.isPlaced = false;
                        }

                        if (testWinCon()) {
                            console.log("GEWONNEN");
                        }
                    },
                    onDragStart(data) {
                        if (piece.isPlaced) {
                            // piece.blackBox!.hidden = false;
                            // piece.puzzlePiece!.hidden = false;
                            piece.blackBox!.style.opacity = "1";
                            piece.puzzlePiece!.style.opacity = "1";
                        }
                        piece.isPlaced = false;
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
    /* .puzzle-piece {  */

    /* } */
    .puzzle-image {
        display: inline-block;
        position: relative;
    }
    figure {
        margin: 0px;
    }
</style>
