<script lang="ts">
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet} = $props();

    // let fullscreen: boolean = $state(false);
    let button: HTMLButtonElement;

    function fullscreen(): void {
        if(document.fullscreenElement) {
            document.exitFullscreen();
            return;
        }
        button.requestFullscreen();
        // div.style.transform = `scale(0.5)`
        // div.style.transform = `scale(1)`
    }
    
    
</script>

<!-- TODO: pinch to zoom wenn man fullscreen ist -->

<!-- <button onclick={()=>div.requestFullscreen()}>TEST</button> -->
<!-- justify-center content-center -->
<button bind:this={button} onclick={fullscreen} class="block appearance-none touch-pinch-zoom">
    {@render children()}
</button>