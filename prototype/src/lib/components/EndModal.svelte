<script lang="ts">
    import { onMount } from "svelte";
    import Modal from "$components/modals/Modal.svelte"
    import { getScore } from "$stores"


    let modal: Modal;
    onMount(() => {
        modal.openModal();
    });
    export function openModal(): void { modal.openModal() }
</script>


<Modal bind:this={modal} onConfirm={(): void => {}}>
    <h4 class="w-full h-auto my-4.5 text-[20px] font-bold leading-6">Ziel erreicht!</h4>
    <p class="mb-4.5 text-[20px] font-medium leading-6">Du hast alle Stationen der Stadtführung gemeistert und dabei Dortmunds Einkaufsspuren entdeckt.</p>
    <div class="mb-4.5 py-6 text-[24px] font-bold leading-6 border-y-2">
        <div>Deine Punktzahl:</div>
        <div>{getScore()} Punkte</div>
    </div>
    <div class="mb-4.5 text-[20px] font-medium leading-6">
        <div>0-70 Punkte:</div>
        <div>Du bist Konsum-Einsteiger*in</div>
    </div>
    <div class="mb-4.5 text-[20px] font-medium leading-6">
        <div>71-140 Punkte:</div>
        <div>Du bist Einkaufsprofi</div>
    </div>
    <div class="mb-4.5 text-[20px] font-medium leading-6">
        <div>141-207 Punkte:</div>
        <div>Du bist Dortmund-Kenner*in</div>
    </div>
    <div class="mb-12 text-[20px] font-bold leading-6">Danke fürs Mitspielen!</div>
</Modal>