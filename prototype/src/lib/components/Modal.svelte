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

<dialog bind:this={dialog} class="max-w-sm m-4 p-4 place-self-center border-2 rounded-2xl bg-primary">
    {@render children()}
    <div class="flex flex-nowrap justify-end mt-4">
        {#if confirmButtonText && onConfirm}
            <button onclick={onConfirm} class="min-w-20 h-[46px] mr-2 text-primary bg-secondary rounded-full">{confirmButtonText}</button>
        {/if}
        {#if closeButtonText}
            <button onclick={hide} class="min-w-20 h-[46px] text-primary bg-secondary rounded-full">{closeButtonText}</button>
        {/if}
    </div>
</dialog>

<!-- <div class="w-full h-[46px] text-primary bg-secondary rounded-full flex justify-between px-6 py-2"></div> -->