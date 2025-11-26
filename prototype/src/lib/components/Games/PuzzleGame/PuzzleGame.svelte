<script lang="ts">
    import { onMount } from "svelte";
    import type Puzzle from "./Puzzle.svelte";
    import PuzzleController, { type CutoutData, type PuzzleData, type SlotGroup } from "./PuzzleController.svelte";

    let { quiz }: { quiz: Puzzle } = $props();    

    async function loadImage(src: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }

    let container: HTMLDivElement;
    
    let puzzleController: PuzzleController;
    onMount(async ()=>{
        // TODO: Auslagern in Quiz.ts
        const path = "/station_01/raetsel_02/game";
        const backgroundSrc = "Anziehbild.png";
        // const path = "/station_04/raetsel_00/game";
        // const backgroundSrc = "Hintergrund.png";
        const puzzleData: PuzzleData = await (await fetch(`${path}/cutouts.json`)).json();

        const background: HTMLImageElement = await loadImage(path + "/" + backgroundSrc);
        const slotGroups: SlotGroup[] = await Promise.all(puzzleData.cutouts.map(async (cutout: CutoutData) => {
            const piece = await loadImage(path + "/" + cutout.src);
            const noise = cutout.noise ? await Promise.all( 
                cutout.noise.map((src: string) => loadImage(path + "/" + src))
            ) : undefined;
            
            return {
                path: cutout.d,
                piece: piece,
                noise: noise
            } satisfies SlotGroup;
        }));
        // TODO
        
        puzzleController = new PuzzleController(container, background, slotGroups);
    });
</script>

<!-- <div bind:this={container} class="fixed top-0 left-0 w-full h-full"></div> -->
<div class="border-2">
    <div bind:this={container} class="w-full h-[80dvh]"></div>
</div>