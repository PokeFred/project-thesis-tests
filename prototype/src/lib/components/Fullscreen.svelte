<!-- Fullscreen mithilfe der Fullscreen API mit pinch to zoom ist nicht gleichzeitig möglich. Deswegen ein selbstgebautes Fullscreen.  -->
<script lang="ts">
    import { type Snippet } from "svelte";

    let { children }: { children: Snippet} = $props();

    let isFullscreen: boolean = $state(false);
    let button: HTMLButtonElement;
    let dialog: HTMLDialogElement;

    function enableScrolling(): void {
        document.body.style.overflow = "";
    }

    function disableScrolling(): void {
        document.body.style.overflow = "hidden";
    }

    function fullscreen(): void {
        if(isFullscreen) {
            dialog.showModal();
            disableScrolling();
        }
        else {
            dialog.close();
            enableScrolling();
        }
        isFullscreen = !isFullscreen;
    }
</script>

<!-- TODO: margin an den seiten wegbekommen; Keine scrollbar beim bild -->
<dialog bind:this={dialog} class="fixed place-self-center bg-black backdrop:bg-black">
    <button onclick={fullscreen}>
        {@render children()}
    </button>
</dialog>

<button bind:this={button} onclick={fullscreen}  class="block appearance-none touch-none">
    {@render children()}
</button>