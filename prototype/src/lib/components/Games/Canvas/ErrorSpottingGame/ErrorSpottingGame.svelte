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

        controller = new Controller(container, image, errorPaths);
    });

    async function loadImage(src: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }

    // TODO Simon
    export function getSubmitData(): SavingData { return { selected: "" } }
    export function getSubmitScore(): number { return 0 }
</script>

<figure class="mb-10">
    <Fullscreen>
        <img src={`${input.path}/original.png`} alt="Originalbild"> <!-- alt === result.caption ? -->
    </Fullscreen>
    <figcaption>Originalbild</figcaption> <!-- figcaption === result.caption ? -->
</figure>

<div class="-m-4">
    <div bind:this={container} class="w-full h-[80vh]"></div>
</div>
