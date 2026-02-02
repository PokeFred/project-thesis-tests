<script lang="ts">
    import type { Snippet } from "svelte"
    import Icon from "svelte-awesome"
    import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"

    let { children, buttonText, onConfirm }: { children: Snippet, buttonText: string, onConfirm: () => void } = $props()

    let modal: HTMLDialogElement
    export function openModal(): void {
        modal.showModal()
    }

    export function closeModal(): void {
        modal.close()
    }

    function handleConfirm() {
        closeModal()
        onConfirm()
    }
</script>

<dialog bind:this={modal} class="mt-4 mx-auto w-full max-w-md h-fit bg-primary border-2 border-secondary rounded-xl backdrop:secondary/50 backdrop:backdrop-blur-sm">
    <div class="w-full h-auto grid grid-cols-1 gap-4 p-4">
        <button onclick={closeModal} class="ml-auto w-10 h-10 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faXmark} class="w-6 h-6" />
        </button>
        <div class="mt-2 w-full h-auto text-left text-secondary grid grid-cols-1 gap-2 px-4">
            {@render children()}
        </div>
        <div class="w-full h-auto grid grid-cols-1 gap-4">
            <button onclick={handleConfirm} class="w-full h-auto text-lg font-semibold text-left text-primary bg-secondary rounded-full cursor-pointer px-6 py-1 active:scale-95">{buttonText}</button>
        </div>
    </div>
</dialog>

<style>
    :modal {
        padding: 0px 0px;
    }
</style>
