<script lang="ts">
    import { onMount } from "svelte";
    import Controller from "./Controller";
    import type { GameData, SavingData } from "$components/puzzle/errorSpotting";
    import Fullscreen from "$components/Fullscreen.svelte";

    const { input }: { input: GameData } = $props();

    let controller: Controller;

    let container: HTMLDivElement;
    onMount(async ()=>{
        const image: HTMLImageElement = await loadImage(input.path + "/fehler.png");
        const errorPaths: string[] = await (await fetch(`${input.path}/paths.json`)).json();

        controller = new Controller(container, image, errorPaths, false);
    });

    async function loadImage(src: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }

    export const getSubmitData = () => controller.ErrorSpotting.complete();
    export const getSubmitScore = () => controller.ErrorSpotting.score();
</script>

<div class="mx-2 border-x-2">
    <div bind:this={container} class="w-full h-[80vh]"></div>
</div>