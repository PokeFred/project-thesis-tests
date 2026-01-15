<script lang="ts">
    import { startGame, isRunning } from "$stores"
    import Modal from "./ConfirmModal.svelte"

    let modal: Modal

    async function confirmModal(): Promise<void> {
        if (!isRunning()) startGame()
        window.location.href = "/s"
    }
</script>

<Modal bind:this={modal} onConfirm={confirmModal}>
    <div>Damit dein Fortschritt gespeichert wird, kann die App deine Ergebnisse lokal auf deinem Gerät sichern.</div>
    <div>Es werden keine Daten übertragen oder geteilt.</div>
</Modal>

<div class="w-full h-auto text-lg font-bold text-primary grid grid-cols-1 gap-4">
    <div>Entdecke Dortmunds Einkaufsgeschichte!</div>
    <hr />
    <div>Wie hat man vor 700 Jahren eingekauft? Und wie veränderte ein Kaufhaus das Leben in der Stadt ?</div>
    <div>Komm mit: Vom Markt im Mittelalter über prunkvolle Warenhäuser bis zum Online-Shopping. Unterwegs findest du Orte in der Stadt, löst Rätsel und sammelst Punkte.</div>
    <hr />
    <div>Starte jetzt - und entdecke Dortmund auf eine neue Art!</div>
    <button onclick={(): void => modal.openModal()} class="w-full h-auto text-lg text-left text-secondary bg-primary rounded-full cursor-pointer px-6 py-2 active:scale-95">Starten</button>
</div>
