<script lang="ts">
    import type { Snippet } from "svelte"
    import { Icon } from "svelte-awesome"
    import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"

    let { children, onConfirm }: { children: Snippet, onConfirm: () => void } = $props()

    let dialog: HTMLDialogElement

    export function openModal(): void {
        dialog.classList.remove("hidden")
        dialog.showModal()
    }

    function closeModal(): void {
        dialog.classList.add("hidden")
        dialog.close()
    }

    function handleConfirm() {
        closeModal()
        onConfirm()
    }
</script>

<dialog bind:this={dialog} class="mt-4 mx-auto rounded-xl grid grid-cols-1 gap-4 hidden p-4 backdrop:bg-slate-900/50">
    <div class="w-full h-auto flex justify-end items-center">
        <button onclick={closeModal} class="w-8 h-8 border border-black rounded-full cursor-pointer">
            <Icon data={faXmark} />
        </button>
    </div>
    <div class="w-full h-auto px-4">
        {@render children?.()}
    </div>
    <div class="w-full h-auto grid grid-cols-2 gap-4">
        <button onclick={closeModal} class="w-full h-auto text-xl text-white bg-blue-500 rounded-xl cursor-pointer px-8">Schließen</button>
        <button onclick={handleConfirm} class="w-full h-auto text-xl text-white bg-blue-500 rounded-xl cursor-pointer px-8">OK</button>
    </div>
</dialog>
