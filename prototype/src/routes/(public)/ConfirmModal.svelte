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

<dialog bind:this={dialog} class="mt-4 mx-auto w-full max-w-md h-fit border border-black rounded-xl backdrop:bg-slate-900/50 backdrop:backdrop-blur-sm">
    <div class="w-full h-auto grid grid-cols-1 gap-4 p-4">
        <!--
        <div class="w-full h-auto flex justify-end items-center">
            <button onclick={closeModal} class="w-8 h-8 border border-black rounded-full cursor-pointer">
                <Icon data={faXmark} />
            </button>
        </div>
        -->
        <div class="w-full h-auto text-left px-4">
            {@render children?.()}
        </div>
        <div class="mx-auto w-full max-w-xs h-auto text-center grid grid-cols-2 gap-4">
            <button onclick={closeModal} class="w-full h-auto text-xl text-white text-center bg-red-600 rounded-xl cursor-pointer">Abbrechen</button>
            <button onclick={handleConfirm} class="w-full h-auto text-xl text-white bg-green-600 rounded-xl cursor-pointer">Starten</button>
        </div>
    </div>
</dialog>

<style>
    :modal {
        padding: 0px 0px;
    }
</style>
