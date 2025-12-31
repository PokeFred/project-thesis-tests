<script lang="ts">
    import { onMount } from "svelte";
    import PuzzleController, { type CutoutData, type PuzzleData, type SlotGroup } from "./PuzzleController.svelte";
    import type { GameData } from "$components/puzzle/dragDrop";
    import { Icon } from "svelte-awesome";
    import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

    const { input }: { input: GameData } = $props();
    const gameInput: GameData = input 

    const path: string = gameInput.path;
    
    let container: HTMLDivElement;
    let puzzleController: PuzzleController;
    onMount(async ()=>{

        const puzzleData: PuzzleData = await (await fetch(`${path}/cutouts.json`)).json();
        const background: HTMLImageElement = await loadImage(path + "/Background.png");
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

    export const getSubmitData = () => puzzleController.Puzzle.complete();
    export const getSubmitScore = () => puzzleController.Puzzle.score();
</script>

<!-- <div bind:this={container} class="fixed top-0 left-0 w-full h-full"></div> -->
<div class="-m-4">
    <div bind:this={container} class="w-full h-[80vh]"></div>
</div>

<div class="flex justify-between py-20 border-b-2">
    <button><Icon data={faAngleLeft} scale={2}/></button>
    <button><Icon data={faAngleRight} scale={2}/></button>
</div>