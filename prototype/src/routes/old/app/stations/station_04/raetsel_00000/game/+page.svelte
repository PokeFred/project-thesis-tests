<script lang="ts">
    import Modal from "$components/Modal.svelte"
    import { goto } from "$app/navigation"
    import MultipleChoice from "$components/Games/MultipleChoiceGame/MultipleChoice.svelte";
    import { quiz } from "../Quiz";
    import { Icon } from "svelte-awesome";
    import { faAngleLeft, faAngleUp } from "@fortawesome/free-solid-svg-icons";

    quiz.reset();
    
    let showModal: () => void = $state(()=>{});

    let station = {
        identifier: "Rätsel 1",
        completion: 0,
    }

    let data = {
        stitle: "ALTER MARKT",
    }
</script>

<div class="w-full h-auto flex justify-between items-center px-6 mb-[23px] mt-[6px]">
        <span class="text-lg font-semibold">{data.stitle}</span>
        <button onclick={() => goto("/app/stations")} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faAngleLeft} class="w-6 h-6" />
        </button>
    </div>

<div class="w-full h-[46px] text-primary bg-secondary rounded-full flex justify-between px-6 py-2">
    <span class="text-lg font-bold text-left">{station.identifier}</span>
    <div class="h-7 flex justify-center items-center">
        <div class="w-[49px] h-fit bg-primary border rounded-full pr-[1px] mr-[6px]">
            <div class="w-[{station.completion}%] h-4 bg-secondary border rounded-full"></div>
        </div>
        <span class="text-lg font-bold text-right">%</span>
    </div>
</div>

<p class="font-bold mx-[9px] mb-[58px] mt-[61px]">Was kennzeichnete den Markt in Dortmund im Mittelalter? Nur fünf von acht Antwortmöglichkeiten sind richtig – überlege genau!</p>

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