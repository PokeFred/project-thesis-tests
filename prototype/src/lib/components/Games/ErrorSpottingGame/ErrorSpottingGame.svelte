<script lang="ts">
    import { onMount } from "svelte";
    import Controller from "./Controller";

    let controller: Controller;

    let container: HTMLDivElement;

    onMount(async ()=>{
        const path: string = "/station_03/raetsel_03/game"

        const image: HTMLImageElement = await loadImage(path + "/fehler.png");

        controller = new Controller(container, image);
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

<div class="-m-4">
    <div bind:this={container} class="w-full h-[80vh]"></div>
</div>