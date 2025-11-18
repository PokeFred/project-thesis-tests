<script lang="ts">
    import { goto } from "$app/navigation";
    import Modal from "$components/Modal.svelte";
    import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
    import { Icon } from "svelte-awesome";
    import type { Quiz } from "./Quiz";

    let { quiz }: { quiz: Quiz } = $props();

    let showModal: () => void = $state(()=>{});
</script>

<Modal bind:show={showModal} confirmButtonText={"ja"} closeButtonText={"Nein"} onConfirm={()=> {
        quiz.complete();
        goto("../end"); 
    }}>
    <p>Möchtest du dieses Rätsel wirklich beenden?</p>
</Modal>

<button onclick={showModal} class="inline-block w-full h-[46px] my-[30px] text-left font-medium text-primary bg-secondary rounded-full cursor-pointer px-[27px] active:scale-95">Ergebnis Anzeigen</button>