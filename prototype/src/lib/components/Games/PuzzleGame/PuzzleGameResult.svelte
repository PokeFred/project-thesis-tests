<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte";
    import type { Result } from ".";
    import { POINTS } from "../Quiz";
    import type { Piece } from "./Puzzle.svelte";

    const { result }: { result: Result } = $props();
    const correctPieces: number = result.placed.reduce((sum: number, piece: Piece) => sum + (piece.Correct ? 1 : 0), 0);
    const totalPieces: number = result.placed.length;
    const points: number = correctPieces * POINTS.ANSWER_CORRECT;
    const totalPoints: number = totalPieces * POINTS.ANSWER_CORRECT;
</script>

<div class="-mx-4">
    <div class="w-full h-auto">
        <figure>
            <Fullscreen>
                <img src={`${result.path}/Background.png`} alt={result.alt} class="justify-self-center align-middle">
            </Fullscreen>
            <figcaption></figcaption>
        </figure>
    </div>
</div>

<p class="flex justify-between items-center h-8 px-8 -mx-4 mt-7 bg-secondary text-primary font-bold">
    <span>Du hast {correctPieces} von {totalPieces} Teilen richtig</span>
    <span>{points}/{totalPoints}</span>
</p>