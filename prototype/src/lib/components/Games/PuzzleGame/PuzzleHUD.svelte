<!-- https://web.dev/articles/animations-guide?hl=de -->
<!-- TODO: fix fullscreen wenn reingezoomed -->
<script lang="ts">
    import { onDestroy, onMount, type Snippet } from "svelte";
    import type Puzzle from "./Puzzle.svelte";

    let { children, quiz } : { children: Snippet; quiz: Puzzle } = $props();

    let visualViewport : VisualViewport | null;

    // matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())
    function updateVisualViewport(): void {
        quiz.Hud.Container!.style.transform = `matrix(${1 / visualViewport!.scale}, 0, 0, ${1 / visualViewport!.scale}, ${visualViewport!.offsetLeft},  ${visualViewport!.offsetTop})`
        requestAnimationFrame(updateVisualViewport);
    }

    onMount(()=>{
        visualViewport = window.visualViewport;
        requestAnimationFrame(updateVisualViewport);
    });
</script>

<div bind:this={quiz.Hud.Container} class="fixed top-0 left-0 w-dvw h-dvh origin-top-left will-change-transform" style:visibility={quiz.Fullscreen ? `visible ` :`hidden`}>
    {@render children?.()}
</div>