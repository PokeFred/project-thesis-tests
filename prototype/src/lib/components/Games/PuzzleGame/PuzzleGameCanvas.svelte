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
    import Konva from "konva";
    import { resolve } from "$app/paths";

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

    


    // function animationLoop(): void {
    //     canvas.drawAll(background, paths, images);
    //     requestAnimationFrame(animationLoop);
    // }

    

    // function loadPaths(ctx: CanvasRenderingContext2D): void {
    //     quiz.Pieces.forEach((piece: Piece)=>{
    //         const path = new Path2D(piece.Slot.D);
    //         ctx.fill(path);
    //         console.log(SVG().path(piece.Slot.D).bbox())
    //     });
    // }

    

    // onMount(()=>{
        // background.onload = ()=> {
        //     canvas.initCanvas(cv, window.innerWidth, window.innerHeight);
        //     requestAnimationFrame(animationLoop);
        // }
    // });

    let container: HTMLDivElement;
    
    let canvas: Canvas;
    onMount(async ()=>{
        const background: HTMLImageElement = await loadImage(quiz.Background.src);
        const images: HTMLImageElement[] = await Promise.all( 
            quiz.Pieces.map((piece: Piece) => loadImage(piece.Src))
        );
        
        canvas = new Canvas(container, window.innerWidth, window.innerHeight);
        canvas.drawAll(background, paths, images);
    });
</script>

<div bind:this={container} class="fixed top-0 left-0"></div>