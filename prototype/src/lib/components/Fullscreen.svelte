<!-- Fullscreen mithilfe der Fullscreen API mit pinch to zoom ist nicht gleichzeitig möglich. Dialog hat einen margin welches man nicht wegbekommt. Deswegen ein selbstgebautes Fullscreen mithilfe von div.  -->
<script lang="ts">
    import { type Snippet } from "svelte";

    let { children }: { children: Snippet} = $props();

    let isFullscreen: boolean = $state(false);
    let button: HTMLButtonElement;
    let div: HTMLDivElement;

    function enableScrolling(): void {
        document.body.style.overflow = "";
    }

    function disableScrolling(): void {
        document.body.style.overflow = "hidden";
    }

    function fullscreen(): void {
        if(isFullscreen) {
            div.style.visibility = "visible"
            disableScrolling();
        }
        else {
            div.style.visibility = "hidden"
            enableScrolling();
        }
        isFullscreen = !isFullscreen;
    }
</script>

<div bind:this={div} class="fullscreenDiv fixed w-screen h-screen top-0 left-0 bg-black z-10000 invisible">
    <button onclick={fullscreen} class="w-full h-full object-contain">
        {@render children()}
    </button>
</div>

<button bind:this={button} onclick={fullscreen}  class="block appearance-none touch-none">
    {@render children()}
</button>

<style>
    .fullscreenDiv :global(img)  {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
</style>