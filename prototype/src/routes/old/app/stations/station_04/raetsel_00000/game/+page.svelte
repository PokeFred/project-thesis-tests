<script lang="ts">
    // TODO: überall jedes quiz objekt als quiz speichern, damit man immer quiz.complete(); machen kann. easy copy paste
    // zudem klassen für die components in die components selber auslagern (?) (damit man in die components entweder andere component props weitergibt, oder primitive variablen)
    // in den klassen die public attribute zu private umformen. dafür dann für bindings function binding nutzen (?)
    import Modal from "$components/Modal.svelte"
    import { goto } from "$app/navigation"
    import { gameState } from "$lib/State.svelte";
    import MultipleChoiceComponent from "$components/MultipleChoiceGame/MultipleChoice.svelte";
    import MultipleChoice from "$components/MultipleChoiceGame/MultipleChoice";
    import type { Quiz } from "$components/Quiz";
    
    let showModal: () => void = $state(()=>{});

    const multipleChoice: MultipleChoice = new MultipleChoice(
        gameState.stationStates[3].quizStates[4],
        [
            { 
                answer: "Es gab einen Brunnen am Markt.",
                correct: true
            },
            {
                answer: "Die Hauptpfarrkirche lag am Marktplatz.",
                correct: true
            },
            {
                answer: "Der Markt war das Zentrum der Stadt.",
                correct: true
            },
            {
                answer: "Hinrichtungen von Verurteilten fanden auf dem Markt statt.",
                correct: false
            },
            {
                answer: "Der Markt lag an einem wichtigen Handelsweg.",
                correct: true
            },
            {
                answer: "Zutritt hatten nur Angehörige des Adels.",
                correct: false
            },
            {
                answer: "Das Rathaus lag direkt am Marktplatz.",
                correct: true
            },
            {
                answer: "Eine zweite Stadtmauer umgab den Markt.",
                correct: false
            }
        ]
    );

</script>

<MultipleChoiceComponent {multipleChoice}>
    <p class="mb-4 w-full h-auto text-sm">Was kennzeichnete den Markt in Dortmund im Mittelalter? Nur <strong>fünf</strong> von acht Antwortmöglichkeiten sind <strong>richtig</strong> – überlege genau!</p>
</MultipleChoiceComponent>



<Modal bind:show={showModal} confirmButtonText={"ja"} closeButtonText={"Nein"} onConfirm={()=> {
        multipleChoice.complete();
        goto("./end"); 
    }}>
    <p>Möchtest du dieses Rätsel wirklich beenden?</p>
    <!-- {#if matchingGame.options.length != matchingGame.selected.filter((e)=> e != undefined).length}
        <p>Es sind noch nicht alle Felder ausgefüllt.</p>
     {/if} -->
</Modal>
<div class="mt-2">
    <button onclick={showModal} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Rätsel beenden</button>
</div>
