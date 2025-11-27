<script lang="ts">
    import PuzzleGame from "$components/Games/PuzzleGame/PuzzleGame.svelte";
    import { background, slotGroups, quiz } from "../Quiz";
    import GameHeader from "$components/Games/GameHeader.svelte";
    import GameFooter from "$components/Games/GameFooter.svelte";

    quiz.reset();

    // TODO: ladescreen, wenn nicht alle bilder geladen wurden

    const text: string[] = [
        `Der heilige Reinoldus ist Stadtpatron Dortmunds und Namensgeber der Reinoldigilde.`,
        `Statte ihn mit den richtigen Gegenständen aus. Aber Achtung: Nur fünf Gegenstände sind
         richtig! Tipp: Schau doch mal in die Reinoldi Kirche, ob Du Reinoldus entdecken kannst.
         Wichtig: Bitte mache ein Foto von Reinoldus und löse das Rätsel außerhalb der Kirche,
         damit niemand gestört wird.`
    ]

    const data = {
        stitle: "ALTER MARKT",
        identifier: "Rätsel 3",
        completion: 0
    }
</script>

<GameHeader stitle={data.stitle} identifier={data.identifier} completion={data.completion} {text}/>

<PuzzleGame {background} {slotGroups} {quiz}  />

<GameFooter {quiz}>
    <p>Möchtest du dieses Rätsel wirklich beenden?</p>
    {#if !quiz.Pieces.every((piece) => piece.Placed)}
        <p>Es sind noch nicht alle Felder ausgefüllt.</p>
    {/if}
</GameFooter>