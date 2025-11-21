<script lang="ts">
    import GameHeader from "$components/Games/GameHeader.svelte";
    import PointSummary from "$components/Games/PointSummary.svelte";
    import { POINTS } from "$lib/State.svelte";
    import { quiz } from "../Quiz";

    const descriptions: string[] = [`Richtig platzierte Puzzleteile (${quiz.AnswersCorrect})`]
    const points: number[] = [quiz.AnswersCorrect * POINTS.ANSWER_CORRECT]

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

<!-- <PointSummary {descriptions} {points} /> -->

<section class="text-sm mb-4 text-green-500">
    <h4>Richtig:</h4>
    <ul>
        <li>Schwert (rechte Hand)</li>
        <li>Schild mit Löwen (linke Hand)</li>
        <li>Umhang (ohne Kapuze)</li>
        <li>einfaches Gewand</li>
        <li>einfache Stiefel</li>
        <li>einfache Stiefel</li>
    </ul>
</section>

<section class="text-sm mb-4 text-red-500">
    <h4>Falsch:</h4>
    <p>Schild mit Bären, Stab, Umhang mit Kapuze, Helm mit Nasenbein, Schriftrolle, Buch, Dolch, langes Gewand, barfuß/keine Stiefel.</p>
</section>

<!-- <p class="mb-4 w-full h-auto text-sm">
    Geschafft! Du hast den heiligen Reinoldus ausgestattet. Die Kaufleute der Reinoldi-Gilde
    wären sehr zufrieden mit Dir! In den Texten kannst Du etwas über die Reinoldi-Gilde und den
    Handel in Dortmund lernen.
</p> -->