<script lang="ts">
    let { onConfirm }: { onConfirm: () => void } = $props()

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
        <div class="mt-2 w-full h-auto text-left px-4">
            <div>Möchtest du dieses Rätsel wirklich beenden?</div>
            <div>Es sind noch nicht alle Felder ausgefüllt.</div>
        </div>
        <div class="mx-auto w-full max-w-xs h-auto text-center grid grid-cols-2 gap-4">
            <button onclick={closeModal} class="w-full h-auto text-xl text-white text-center bg-red-600 rounded-xl cursor-pointer">Nein</button>
            <button onclick={handleConfirm} class="w-full h-auto text-xl text-white bg-green-600 rounded-xl cursor-pointer">Ja</button>
        </div>
    </div>
</dialog>

<style>
    :modal {
        padding: 0px 0px;
    }
</style>
