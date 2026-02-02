<script lang="ts">
    import Modal from "$components/modals/Modal.svelte"

    let { onConfirm }: { onConfirm: () => void } = $props()

    let modal: Modal
    export function openModal(): void { modal.openModal() }
</script>

<Modal bind:this={modal} buttonText={"Spiel beenden"} onConfirm={onConfirm}>
    <div>Damit dein Fortschritt gespeichert wird, kann die App deine Ergebnisse lokal auf deinem Gerät sichern.</div>
    <div>Es werden keine Daten übertragen oder geteilt.</div>
    <!-- <button onclick={(): Promise<void> => goto("/privacy")} class="w-full h-auto text-lg font-semibold text-left text-primary bg-secondary rounded-full cursor-pointer px-6 py-1 active:scale-95">Datenschutz</button> -->
</Modal>
