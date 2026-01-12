<!-- Fullscreen mithilfe der Fullscreen API mit pinch to zoom ist nicht gleichzeitig möglich. Dialog hat einen margin welches man nicht wegbekommt. Deswegen ein selbstgebautes Fullscreen mithilfe von div.  -->
<!-- TODO: Mikroruckler beim reinzoomen im fullscreen beseitigen -->
<script lang="ts">
    import { onDestroy, onMount, type Snippet } from "svelte";
    import { pushState, replaceState } from "$app/navigation";
    import { page } from "$app/state"; 

    let { children, fullscreen = $bindable() }: { children: Snippet; fullscreen?: boolean } = $props();

    let childrenButton: HTMLButtonElement = $state(document.createElement("button"));
    let fullscreenDiv: HTMLDivElement = $state(document.createElement("div"));
    let normalDiv: HTMLDivElement = $state(document.createElement("div"));

    function backButtonNavigationListener(event: PopStateEvent): void {
        normalDiv.appendChild(childrenButton);
        enableScrolling();
        fullscreen = false;
    }    

    function enableScrolling(): void {
        document.body.style.overflow = "";
    }

    function disableScrolling(): void {
        document.body.style.overflow = "hidden";
    }

    function toggleFullscreen(): void {
        if(page.state.isFullscreen) {
            normalDiv.appendChild(childrenButton);
            enableScrolling();
            history.back();
            pushState("", {isFullscreen: false});
        }
        else {
            fullscreenDiv.appendChild(childrenButton);
            disableScrolling();
            pushState("", {isFullscreen: true});
        }
        fullscreen = page.state.isFullscreen;
    }

    onMount(()=>window.addEventListener("popstate", backButtonNavigationListener));
    onDestroy(()=>window.removeEventListener("popstate", backButtonNavigationListener));
</script>

<div bind:this={fullscreenDiv} class="fullscreenDiv {fullscreen ? "fixed" : "hidden"} w-screen h-screen top-0 left-0 bg-primary z-10000"></div>

<div bind:this={normalDiv} class="w-fit h-fit place-self-center">
    <button bind:this={childrenButton} onclick={toggleFullscreen} class="block w-full h-full object-contain">
        {@render children()}
    </button>
</div>

<style>
    .fullscreenDiv :global(img)  {
        display: block;
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
</style>