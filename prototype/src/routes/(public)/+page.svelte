<script lang="ts">
    import { startGame } from "$stores"
    import Modal from "./ConfirmModal.svelte"

    let modal: Modal

    async function confirmModal(): Promise<void> {
        startGame()
        window.location.href = "/app"
    }
</script>

<Modal bind:this={modal} onConfirm={confirmModal}>
    <div class="text-center">Akzeptieren und starten...</div>
</Modal>

<div class="w-full h-auto text-secondary">
    <img src="https://placehold.co/600x400.png" alt="" class="w-full h-auto rounded-xl" />
    <div class="mt-3 mx-auto w-fit h-auto">
        <button onclick={(): void => modal.openModal()} class="w-full h-auto text-xl text-primary bg-secondary rounded-xl cursor-pointer px-8 active:scale-95">Spiel starten</button>
    </div>
    <div class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fuga quas. In soluta incidunt magni quae ut, neque voluptatibus fuga aut omnis distinctio quam ea nesciunt! Ipsa omnis itaque recusandae.</div>
</div>
