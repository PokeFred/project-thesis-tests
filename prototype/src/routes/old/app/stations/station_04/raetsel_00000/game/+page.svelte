<script lang="ts">
    import Modal from "$components/Modal.svelte"
    import { goto } from "$app/navigation"
    import MultipleChoice from "$components/MultipleChoiceGame/MultipleChoice.svelte";
    import { quiz } from "../Quiz";
    
    let showModal: () => void = $state(()=>{});
</script>

<MultipleChoice multipleChoice={quiz}>
    <p class="mb-4 w-full h-auto text-sm">Was kennzeichnete den Markt in Dortmund im Mittelalter? Nur <strong>fünf</strong> von acht Antwortmöglichkeiten sind <strong>richtig</strong> – überlege genau!</p>
</MultipleChoice>

<Modal bind:show={showModal} confirmButtonText={"ja"} closeButtonText={"Nein"} onConfirm={()=> {
        quiz.complete();
        goto("./end"); 
    }}>
    <p>Möchtest du dieses Rätsel wirklich beenden?</p>
</Modal>
<div class="mt-2">
    <button onclick={showModal} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Rätsel beenden</button>
</div>
