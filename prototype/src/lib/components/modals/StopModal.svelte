<script lang="ts">
    import Modal from "$components/modals/Modal.svelte"

    let { onConfirm }: { onConfirm: () => void } = $props()

    let modal: Modal
    export function openModal(): void { modal.openModal() }
</script>

<Modal bind:this={modal} buttonText={"Spiel beenden"} onConfirm={onConfirm}>
    <div>Wenn du das Spiel beendest, verlierst du deinen Punktestand und alle deine Erfolge werden gelöscht.</div>
</Modal>
