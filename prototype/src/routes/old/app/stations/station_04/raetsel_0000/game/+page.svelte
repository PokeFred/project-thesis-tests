<script lang="ts">
    import Modal from "$components/Modal.svelte"
    import { goto } from "$app/navigation"
    import AnswerBox from "$components/MatchingGame/AnswerBox.svelte"
    import { quiz, handwerk } from "../Quiz";

    // TODO: ladescreen, wenn nicht alle bilder geladen wurden
    let showModal: () => void = $state(()=>{});    
</script>


<div class="grid grid-cols-2 gap-2 px-1">
    <h4>Handwerk</h4>
    <h4 class="justify-self-end">Zünfte</h4>

    {#each handwerk as bezeichnung, i}
        <span class="border-1 rounded">{bezeichnung}</span>
        <div class="justify-self-end">
            <AnswerBox matchingGame={quiz} index={i}/>
        </div>
    {/each}
</div>

<Modal bind:show={showModal} confirmButtonText={"ja"} closeButtonText={"Nein"} onConfirm={()=> {
        quiz.complete();
        goto("./end"); 
    }}>
    <p>Möchtest du dieses Rätsel wirklich beenden?</p>
    {#if quiz.options.length != quiz.selected.filter((e)=> e != undefined).length}
        <p>Es sind noch nicht alle Felder ausgefüllt.</p>
     {/if}
</Modal>
<div class="mt-2">
    <button onclick={showModal} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Rätsel beenden</button>
</div>
