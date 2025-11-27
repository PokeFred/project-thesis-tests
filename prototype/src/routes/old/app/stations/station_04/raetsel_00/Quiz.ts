import { gameState } from "$lib/State.svelte";
import Puzzle from "$components/Games/PuzzleGame/Puzzle.svelte";
import type { CutoutData, PuzzleData, SlotGroup } from "$components/Games/PuzzleGame/PuzzleController.svelte";

const path = "/station_04/raetsel_00/game";
const backgroundSrc = "Hintergrund.png";
const puzzleData: PuzzleData = await (await fetch(`${path}/cutouts.json`)).json();

export const background: HTMLImageElement = await loadImage(path + "/" + backgroundSrc);
export const slotGroups: SlotGroup[] = await Promise.all(puzzleData.cutouts.map(async (cutout: CutoutData) => {
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

export const quiz: Puzzle = new Puzzle(slotGroups);

async function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
}