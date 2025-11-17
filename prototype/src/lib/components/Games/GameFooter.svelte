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

<button onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })} class="mb-[30px] ml-auto w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
    <Icon data={faAngleUp} class="w-6 h-6" />
</button>