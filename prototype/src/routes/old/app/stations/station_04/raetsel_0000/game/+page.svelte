<script lang="ts">
    import AnswerBox from "$components/Games/MatchingGame/AnswerBox.svelte"
    import { quiz, handwerk } from "../Quiz";
    import GameHeader from "$components/Games/GameHeader.svelte";
    import GameFooter from "$components/Games/GameFooter.svelte";

    // TODO: ladescreen, wenn nicht alle bilder geladen wurden
    
    const text: string[] = [
        `Ordne den Zünften das richtige Handwerk zu. Aber Achtung: es gibt nur sieben richtige
         Paare! Es wurden drei Zünfte dazu gemischt. Schaffst Du es, die richtigen Paare zu
         finden?`,
        `Zünfte: Schmied, Fleischer, Bäcker, Bader, Tuchmacher, Gerber, Schuhmacher, Krämer,
         Fettkrämer, Abdecker`,
        `Handwerk: Metallverarbeitung, Getreideverarbeitung, Fleischverarbeitung,
         Lederverarbeitung, Feinlederverarbeitung, Gemischtwarenhandel, Handel mit Butter, Öl,
         Speck etc.`
    ]
    
    const data={
        stitle: "ALTER MARKT",
        identifier: "Rätsel 2"
    }
</script>

<GameHeader stitle={data.stitle} identifier={data.identifier} completion={0} text={text} />

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

<GameFooter {quiz}>
    <p>Möchtest du dieses Rätsel wirklich beenden?</p>
    {#if quiz.Options.length != quiz.Selected.filter((e)=> e != undefined).length}
        <p>Es sind noch nicht alle Felder ausgefüllt.</p>
     {/if}
</GameFooter>