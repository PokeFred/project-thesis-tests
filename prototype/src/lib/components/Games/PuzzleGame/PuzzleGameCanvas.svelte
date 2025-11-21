<script lang="ts">
    // TODO: Trennung zwischen canvas drawing und game logik
    // Game logik bleibt gleich mit allen koordinaten.
    // Nur auf canvas wird gescaled/gescrolled
    // Event koordinaten umrechnen in game koordinaten.
    import { onMount } from "svelte";
    import type Puzzle from "./Puzzle.svelte";
    import type { Piece } from "./Puzzle.svelte";
    import { SVG } from '@svgdotjs/svg.js';
    import Canvas from "./Canvas.svelte";

    let { quiz }: { quiz: Puzzle } = $props();    

    async function loadImage(src: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }

    const paths: string[] = quiz.Pieces.map((piece: Piece) => piece.Slot.D);

    let container: HTMLDivElement;
    
    let canvas: Canvas;
    onMount(async ()=>{
        const background: HTMLImageElement = await loadImage(quiz.Background.src);
        const images: HTMLImageElement[] = await Promise.all( 
            quiz.Pieces.map((piece: Piece) => loadImage(piece.Src))
        );
        
        canvas = new Canvas(container);
        canvas.drawAll(background, paths, images);
    });
</script>

<div bind:this={container} class="fixed top-0 left-0 w-full h-full"></div>