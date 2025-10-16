<script lang="ts">
    import type { PageProps } from "./$types"
    import Modal from "$components/Modal.svelte"
    import { goto } from "$app/navigation"
    import { gameState } from "$lib/State.svelte";
    import AnswerBox from "$components/MatchingGame/AnswerBox.svelte"
    import MatchingGame from "$components/MatchingGame/MatchingGame.svelte";


    // TODO: ladescreen, wenn nicht alle bilder geladen wurden
    let showModal: () => void = $state(()=>{});

    const { data }: PageProps = $props()

    const handwerk: string[] = [
        "Metallverarbeitung",
        "Getreideverarbeitung",
        "Fleischverarbeitung",
        "Lederverarbeitung",
        "Feinlederverarbeitung",
        "Gemischtwarenhandel",
        "Handel mit Butter, Öl, Speck etc."
    ];

    const matchingGame: MatchingGame = new MatchingGame(
        gameState.stationStates[3].quizStates[3],
        [
            [
                { answer: "Schmied",        correct: true  },
                { answer: "Fleischer",      correct: false },
                { answer: "Bäcker",         correct: false },
                { answer: "Bader",          correct: false },
                { answer: "Tuchmacher",     correct: false },
                { answer: "Gerber",         correct: false },
                { answer: "Schuhmacher",    correct: false },
                { answer: "Krämer",         correct: false },
                { answer: "Fettkrämer",     correct: false },
                { answer: "Abdecker",       correct: false },
            ],
            [
                { answer: "Schmied",        correct: false },
                { answer: "Fleischer",      correct: false },
                { answer: "Bäcker",         correct: true  },
                { answer: "Bader",          correct: false },
                { answer: "Tuchmacher",     correct: false },
                { answer: "Gerber",         correct: false },
                { answer: "Schuhmacher",    correct: false },
                { answer: "Krämer",         correct: false },
                { answer: "Fettkrämer",     correct: false },
                { answer: "Abdecker",       correct: false },
            ],
            [
                { answer: "Schmied",        correct: false },
                { answer: "Fleischer",      correct: true },
                { answer: "Bäcker",         correct: false },
                { answer: "Bader",          correct: false },
                { answer: "Tuchmacher",     correct: false },
                { answer: "Gerber",         correct: false },
                { answer: "Schuhmacher",    correct: false },
                { answer: "Krämer",         correct: false },
                { answer: "Fettkrämer",     correct: false },
                { answer: "Abdecker",       correct: false },
            ],
            [
                { answer: "Schmied",        correct: false },
                { answer: "Fleischer",      correct: false },
                { answer: "Bäcker",         correct: false },
                { answer: "Bader",          correct: false },
                { answer: "Tuchmacher",     correct: false },
                { answer: "Gerber",         correct: true  },
                { answer: "Schuhmacher",    correct: false },
                { answer: "Krämer",         correct: false },
                { answer: "Fettkrämer",     correct: false },
                { answer: "Abdecker",       correct: false },
            ],
            [
                { answer: "Schmied",        correct: false },
                { answer: "Fleischer",      correct: false },
                { answer: "Bäcker",         correct: false },
                { answer: "Bader",          correct: false },
                { answer: "Tuchmacher",     correct: false },
                { answer: "Gerber",         correct: false },
                { answer: "Schuhmacher",    correct: true  },
                { answer: "Krämer",         correct: false },
                { answer: "Fettkrämer",     correct: false },
                { answer: "Abdecker",       correct: false },
            ],
            [
                { answer: "Schmied",        correct: false },
                { answer: "Fleischer",      correct: false },
                { answer: "Bäcker",         correct: false },
                { answer: "Bader",          correct: false },
                { answer: "Tuchmacher",     correct: false },
                { answer: "Gerber",         correct: false },
                { answer: "Schuhmacher",    correct: false },
                { answer: "Krämer",         correct: true  },
                { answer: "Fettkrämer",     correct: false },
                { answer: "Abdecker",       correct: false },
            ],
            [
                { answer: "Schmied",        correct: false },
                { answer: "Fleischer",      correct: false },
                { answer: "Bäcker",         correct: false },
                { answer: "Bader",          correct: false },
                { answer: "Tuchmacher",     correct: false },
                { answer: "Gerber",         correct: false },
                { answer: "Schuhmacher",    correct: false },
                { answer: "Krämer",         correct: false },
                { answer: "Fettkrämer",     correct: true  },
                { answer: "Abdecker",       correct: false },
            ],
        ],
    );

</script>


<div class="grid grid-cols-2 gap-2 px-1">
    <h4>Handwerk</h4>
    <h4 class="justify-self-end">Zünfte</h4>

    {#each handwerk as bezeichnung, i}
        <p class="border-1 rounded">{bezeichnung}</p>
        <div class="justify-self-end">
            <AnswerBox {matchingGame} index={i}/>
        </div>
    {/each}
</div>

<Modal bind:show={showModal} confirmButtonText={"ja"} closeButtonText={"Nein"} onConfirm={()=> {
        matchingGame.complete();
        goto("./end"); 
    }}>
    <p>Möchtest du dieses Rätsel wirklich beenden?</p>
    {#if matchingGame.options.length != matchingGame.selected.filter((e)=> e != undefined).length}
        <p>Es sind noch nicht alle Felder ausgefüllt.</p>
     {/if}
</Modal>
<div class="mt-2">
    <button onclick={showModal} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Rätsel beenden</button>
</div>
