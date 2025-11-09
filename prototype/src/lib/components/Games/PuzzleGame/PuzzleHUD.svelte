<script lang="ts">
    import { onDestroy, onMount, type Snippet } from "svelte";

    let { children } : { children: Snippet } = $props();

    let visualViewport : VisualViewport | null;

    let left: number = $state(0);
    let top: number = $state(0);
    let width: number = $state(window.innerWidth);
    let height: number = $state(window.innerHeight);
    let scale: number = $state(1);

    let test: HTMLDivElement;
    let test2: HTMLDivElement;

    function updateVisualViewport(): void {
        if(visualViewport) {
            left = visualViewport.offsetLeft;
            top = visualViewport.offsetTop;
            width = visualViewport.width;
            height = visualViewport.height;
            scale = visualViewport.scale;

            test.style.transformOrigin = "top left";
            // test.style.transform = `translate(${left}px, ${top}px) scale(${1 / scale})`
            // test.style.transform = `scale(${1 / scale})`
            test.style.transform = `scale(${1 / scale})`
            // test2.style.transformOrigin = "bottom left"
            // test2.style.transform = `scale(${scale})`


            // const container: HTMLDivElement | null = document.querySelector(".test-container")
            // container!.style.transformOrigin = "bottom left";
            // container!.style.transform = `scale(${1 / scale})`;
        }
        requestAnimationFrame(updateVisualViewport);
    }

    onMount(()=>{
        visualViewport = window.visualViewport;
        requestAnimationFrame(updateVisualViewport);
        // visualViewport!.addEventListener("resize", updateVisualViewport);
        // visualViewport!.addEventListener("scroll", updateVisualViewport);
        // window.addEventListener("resize", updateVisualViewport);  
    });
    onDestroy(()=>{
        // visualViewport!.removeEventListener("resize", updateVisualViewport);
        // visualViewport!.removeEventListener("scroll", updateVisualViewport);
    });
</script>

<!-- <div bind:this={test} class="fixed will-change-auto" style:left={`${left}px`} style:top={`${top}px`} style:width={`${width}px`} style:height={`${height}px`}> -->
<div bind:this={test} class="fixed will-change-auto" style:left={`${left}px`} style:top={`${top}px`} style:width={`${window.innerWidth}px`} style:height={`${window.innerHeight}px`}>
    <div bind:this={test2} class="relative w-full h-full">
        {@render children?.()}
    </div>
</div>