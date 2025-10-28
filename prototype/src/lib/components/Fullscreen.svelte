<!-- Fullscreen mithilfe der Fullscreen API mit pinch to zoom ist nicht gleichzeitig möglich. Dialog hat einen margin welches man nicht wegbekommt. Deswegen ein selbstgebautes Fullscreen mithilfe von div.  -->
<script lang="ts">
    import { type Snippet } from "svelte";
    import { pushState } from "$app/navigation";
    import { page } from "$app/state"; 

    let { children }: { children: Snippet } = $props();

    let button: HTMLButtonElement;
    let div: HTMLDivElement = $state(document.createElement("div"));

    window.addEventListener("popstate", () => {
        if (page.state.isFullscreen) {
            enableScrolling();
        }
    });

    function enableScrolling(): void {
        document.body.style.overflow = "";
    }

    function disableScrolling(): void {
        document.body.style.overflow = "hidden";
    }

    function toggleFullscreen(): void {
        if(page.state.isFullscreen) {
            enableScrolling();
            history.back();
            pushState("", {isFullscreen: false});
        }
        else {
            disableScrolling();
            pushState("", {isFullscreen: true, statePushed: true});
        }
    }
</script>

{#if page.state.isFullscreen}
    <div bind:this={div} class="fullscreenDiv fixed w-screen h-screen top-0 left-0 bg-black z-10000">
        <button onclick={toggleFullscreen} class="w-full h-full object-contain">
            {@render children()}
        </button>
    </div>
{/if}

<button bind:this={button} onclick={toggleFullscreen}  class="block appearance-none touch-none">
    {@render children()}
</button>

<style>
    .fullscreenDiv :global(img)  {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
</style>