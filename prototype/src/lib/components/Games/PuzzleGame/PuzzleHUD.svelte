<!-- https://web.dev/articles/animations-guide?hl=de -->
<!-- TODO: fix fullscreen wenn reingezoomed -->
<script lang="ts">
    import { onDestroy, onMount, type Snippet } from "svelte";
    import type Puzzle from "./Puzzle.svelte";

    let { children, quiz } : { children: Snippet; quiz: Puzzle } = $props();

    let visualViewport : VisualViewport | null;

    function updateVisualViewport(): void {
        if(visualViewport) {
            quiz.Hud.Container!.style.transform = `translate(${visualViewport.offsetLeft}px, ${visualViewport.offsetTop}px)  scale(${1 / visualViewport.scale})`
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

<div bind:this={quiz.Hud.Container} class="fixed top-0 left-0 origin-top-left will-change-transform" style:width={`${visualViewport ? visualViewport.width : window.innerWidth}px`} style:height={`${visualViewport ? visualViewport.height : window.innerHeight}px`} style:visibility={quiz.Fullscreen ? `visible ` :`hidden`}>
    <div class="relative w-full h-full">
        {@render children?.()}
    </div>
</div>