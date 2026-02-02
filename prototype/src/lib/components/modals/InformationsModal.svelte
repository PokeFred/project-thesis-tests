<script lang="ts">
    import Modal from "$components/modals/Modal.svelte"

    let modal: Modal
    export function openModal(): void { modal.openModal() }
</script>

<Modal bind:this={modal} buttonText={"Schließen"} onConfirm={(): void => {}}>
    <div class="w-full h-auto text-xl font-bold text-start">Infos zur Nutzung</div>
</Modal>
