<script lang="ts">
    import Modal from "$components/Modal.svelte"
    import { goto } from "$app/navigation"
    import MultipleChoice from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte";
    import { quiz } from "../Quiz";
    import { Icon } from "svelte-awesome";
    import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
    import GameHeader from "$components/Games/GameHeader.svelte";

    quiz.reset();
    
    let showModal: () => void = $state(()=>{});

    const question: string = "Was kennzeichnete den Markt in Dortmund im Mittelalter? Nur fünf von acht Antwortmöglichkeiten sind richtig – überlege genau!";

    let station = {
        identifier: "Rätsel 1",
        completion: 0,
    }

    let data = {
        stitle: "ALTER MARKT",
    }
</script>

<GameHeader stitle={data.stitle} identifier={station.identifier} completion = {station.completion} question={question} />

<MultipleChoice multipleChoice={quiz}></MultipleChoice>

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