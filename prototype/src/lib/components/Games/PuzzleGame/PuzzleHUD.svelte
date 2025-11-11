<!-- https://web.dev/articles/animations-guide?hl=de -->
<script lang="ts">
    import { onDestroy, onMount, type Snippet } from "svelte";

    let { children } : { children: Snippet } = $props();

    let visualViewport : VisualViewport | null;
    let test: HTMLDivElement;

    function updateVisualViewport(): void {
        if(visualViewport) {
            test.style.transform = `translate(${visualViewport.offsetLeft}px, ${visualViewport.offsetTop}px)  scale(${1 / visualViewport.scale})`
        }
    }

    onMount(()=>{
        visualViewport = window.visualViewport;
        visualViewport!.addEventListener("resize", updateVisualViewport);
        visualViewport!.addEventListener("scroll", updateVisualViewport);
    });
    onDestroy(()=>{
        visualViewport!.removeEventListener("resize", updateVisualViewport);
        visualViewport!.removeEventListener("scroll", updateVisualViewport);
    });
</script>

<div bind:this={test} class="fixed top-0 left-0 origin-top-left will-change-transform" style:width={`${window.innerWidth}px`} style:height={`${window.innerHeight}px`}>
    <div class="relative w-full h-full">
        {@render children?.()}
    </div>
</div>