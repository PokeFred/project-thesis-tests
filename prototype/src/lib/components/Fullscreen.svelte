<!-- Fullscreen mithilfe der Fullscreen API mit pinch to zoom ist nicht gleichzeitig möglich. Dialog hat einen margin welches man nicht wegbekommt. Deswegen ein selbstgebautes Fullscreen mithilfe von div.  -->
<!-- TODO: Mikroruckler beim reinzoomen im fullscreen beseitigen -->
<script lang="ts">
    import { onDestroy, onMount, type Snippet } from "svelte";
    import { pushState, replaceState } from "$app/navigation";
    import { page } from "$app/state"; 

    let { children }: { children: Snippet } = $props();

    let button: HTMLButtonElement;
    let div: HTMLDivElement = $state(document.createElement("div"));
    let isFullscreen: boolean = $state(false);

    function backButtonNavigationListener(event: PopStateEvent): void {
        enableScrolling();
        isFullscreen = false;
    }    

    function enableScrolling(): void {
        document.body.style.overflow = "";
    }

    function disableScrolling(): void {
        document.body.style.overflow = "hidden";
    }

    function toggleFullscreen(): void {
        console.log(page.state)
        if(page.state.isFullscreen) {
            enableScrolling();
            history.back();
            pushState("", {isFullscreen: false});
        }
        else {
            disableScrolling();
            pushState("", {isFullscreen: true});
        }
        isFullscreen = page.state.isFullscreen;
    }

    onMount(()=>window.addEventListener("popstate", backButtonNavigationListener));
    onDestroy(()=>window.removeEventListener("popstate", backButtonNavigationListener));
</script>

{#if isFullscreen}
    <div bind:this={div} class="fullscreenDiv fixed w-screen h-screen top-0 left-0 bg-black z-10000">
        <button onclick={toggleFullscreen} class="w-full h-full object-contain">
            {@render children()}
        </button>
    </div>
{/if}

<button bind:this={button} onclick={toggleFullscreen}  class="block appearance-none">
    {@render children()}
</button>

<style>
    .fullscreenDiv :global(img)  {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
</style>