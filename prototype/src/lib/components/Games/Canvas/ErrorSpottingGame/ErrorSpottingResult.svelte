<script lang="ts">
    import type { ResultData, SavingData } from "$components/puzzle/errorSpotting"
    import { onMount } from "svelte";
    import Controller from "./Controller";
    import { POINTS } from "$components/Games/Quiz";

    const { result, saving }: { result: ResultData, saving: SavingData } = $props()

    const ACHIEVED_POINTS: number = saving.correct * POINTS.ANSWER_CORRECT;
    const TOTAL_POINTS: number = saving.total * POINTS.ANSWER_CORRECT;

    let controller: Controller;

    let container: HTMLDivElement;
    onMount(async ()=>{
        const image: HTMLImageElement = await loadImage(result.path + "/fehler.png");
        const errorPaths: string[][] = await (await fetch(`${result.path}/paths.json`)).json();

        controller = new Controller(container, image, errorPaths, true);
    });

    async function loadImage(src: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }
</script>

<div class="border-x-2">
    <div bind:this={container} class="w-full h-[80vh]"></div>
</div>

<p class="flex justify-between items-center min-h-8 px-8 -mx-4 mt-7 bg-secondary text-primary text-[16px]">
    <span class="font-bold">Du hast {saving.correct} von {saving.total} Unterschieden erkannt</span>
    <span class="font-medium pl-4">{ACHIEVED_POINTS}/{TOTAL_POINTS}</span>
</p>