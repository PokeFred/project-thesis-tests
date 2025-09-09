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
    <div class="flex flex-nowrap justify-end mt-4">
        {#if confirmButtonText && onConfirm}
            <button onclick={onConfirm} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">{confirmButtonText}</button>
        {/if}
        {#if closeButtonText}
            <button onclick={hide} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">{closeButtonText}</button>
        {/if}
    </div>
</dialog>