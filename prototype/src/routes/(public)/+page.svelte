<script lang="ts">
    import { goto } from "$app/navigation"
    import game from "$stores"
    import Modal from "./ConfirmModal.svelte"

    let modal: Modal

    function confirmModal(): void {
        startGame()
        goto("/app")
    }

    function startGame(): void {
        $game = {
            isRunning: true,
            score: 0,
            puzzles: []
        }
    }
</script>

<Modal bind:this={modal} onConfirm={confirmModal}>
    <div class="text-center">Akzeptieren und starten...</div>
</Modal>

<div class="w-full h-auto text-black border border-black rounded-xl p-4">
    <img src="https://placehold.co/600x400.png" alt="" class="w-full h-auto rounded-xl" />
    <div class="mt-3 mx-auto w-fit h-auto">
        <button onclick={(): void => modal.openModal()} class="w-full h-auto text-xl text-white bg-blue-500 rounded-xl cursor-pointer px-8">Spiel starten</button>
    </div>
    <div class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fuga quas. In soluta incidunt magni quae ut, neque voluptatibus fuga aut omnis distinctio quam ea nesciunt! Ipsa omnis itaque recusandae.</div>
</div>
