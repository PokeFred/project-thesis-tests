<script lang="ts">
    import { onMount } from "svelte";
    import PuzzleController, { type CutoutData, type PuzzleData, type SlotGroup } from "./PuzzleController.svelte";
    import type { GameData } from "$components/puzzle/dragDrop";
    import { getBasePath } from "$utils/url"

    const { input }: { input: GameData } = $props();
    const gameInput: GameData = input 

    const path: string = gameInput.path;
    
    let container: HTMLDivElement;
    let puzzleController: PuzzleController;
    onMount(async ()=>{

        const puzzleData: PuzzleData = await (await fetch(`${getBasePath()}${path}/cutouts.json`)).json();
        const background: HTMLImageElement = await loadImage(getBasePath() + path + "/Background.webp");
        const slotGroups: SlotGroup[] = await Promise.all(puzzleData.cutouts.map(async (cutout: CutoutData) => {
            const piece = await loadImage(path + "/" + cutout.src);
            const noise = cutout.noise ? await Promise.all( 
                cutout.noise.map((src: string) => loadImage(getBasePath() + path + "/" + src))
            ) : undefined;
            
            return {
                path: cutout.d,
                piece: piece,
                noise: noise,
                group: cutout.group
            } satisfies SlotGroup;
        }));

        puzzleController = new PuzzleController(container, background, slotGroups);
    });


    async function loadImage(src: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }

    export const isComplete = () => puzzleController.Puzzle.isComplete();
    export const getSubmitData = () => puzzleController.Puzzle.complete();
    export const getSubmitScore = () => puzzleController.Puzzle.score();
</script>

<div class="pb-10 border-b-2">
    <div class="mx-2 border-x-2">
        <div bind:this={container} class="w-full h-[85vh]"></div>
    </div>
</div>