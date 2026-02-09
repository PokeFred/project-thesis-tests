<script lang="ts">
    import Modal from "$components/modals/_Modal.svelte"

    let { onConfirm }: { onConfirm: () => void } = $props()

    let modal: Modal
    export function openModal(): void { modal.openModal() }
</script>

<Modal bind:this={modal} buttonText={"Spiel beenden"} onConfirm={onConfirm}>
    <div>Möchtest du das Rätsel wirklich beenden?</div>
    <div>Es sind noch nicht alle Felder ausgefüllt.</div>
</Modal>
