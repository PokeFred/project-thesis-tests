<script lang="ts">
    import { startGame, isRunning } from "$stores"
    import Modal from "$components/modals/StartModal.svelte"
    import { navigateTo } from "$utils/url"

    let modal: Modal

    function showModal(): void {
        if (isRunning()) {
            return navigateTo("/s")
        }

        modal.openModal()
    }

    function confirmModal(): void {
        if (!isRunning()) {
            startGame()
        }

        navigateTo("/s")
    }
</script>

<Modal bind:this={modal} onConfirm={confirmModal} />

<div class="w-full h-auto text-[20px] leading-6 font-medium text-primary grid grid-cols-1 gap-4">
    <div class="font-bold">Entdecke Dortmunds Einkaufsgeschichte!</div>
    <hr class="border" />
    <div>Wie hat man vor 700 Jahren eingekauft? Und wie veränderte ein Kaufhaus das Leben in der Stadt ?</div>
    <div>Komm mit: Vom Markt im Mittelalter über prunkvolle Warenhäuser bis zum Online-Shopping. Unterwegs findest du Orte in der Stadt, löst Rätsel und sammelst Punkte.</div>
    <hr class="border" />
    <div>Starte jetzt - und entdecke Dortmund auf eine neue Art!</div>
    <button onclick={showModal} class="w-full h-auto text-[20px] text-left leading-6 text-secondary bg-primary rounded-full cursor-pointer px-6 py-2 active:scale-95">Starten</button>
</div>
