<script lang="ts">
    let { children, show = $bindable(), confirmButtonText, closeButtonText, onConfirm = () => {}} : { children: Function, show: Function, confirmButtonText?: string, closeButtonText?: string, onConfirm?: () => void }= $props()
    let dialog: HTMLDialogElement;

    show = function show(): void {
        dialog.showModal();
    }

    function hide(): void {
        dialog.close();
    }
</script>



<dialog bind:this={dialog} class="max-w-sm m-4 p-4 place-self-center border-2 rounded-2xl">
    {@render children()}
    {#if confirmButtonText && onConfirm}
        <button onclick={onConfirm}>{confirmButtonText}</button>
    {/if}
    {#if closeButtonText}
        <button onclick={hide}>{closeButtonText}</button>
    {/if}
</dialog>