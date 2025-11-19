<script lang="ts">
    import { goto } from "$app/navigation";
    import Modal from "$components/Modal.svelte";
    import type { Quiz } from "./Quiz";
    import type { Snippet } from "svelte";

    let { quiz, children }: { quiz: Quiz; children: Snippet } = $props();

    let showModal: () => void = $state(()=>{});
</script>

<Modal bind:show={showModal} confirmButtonText={"ja"} closeButtonText={"Nein"} onConfirm={()=> {
        quiz.complete();
        goto("../end"); 
    }}>
    {@render children?.()}
</Modal>

<button onclick={showModal} class="inline-block w-full h-[46px] mt-[30px] text-left font-medium text-primary bg-secondary rounded-full cursor-pointer px-[27px] active:scale-95">Ergebnis Anzeigen</button>