<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte";
    import type { Result } from ".";
    import { POINTS } from "../Quiz";
    import type { Piece } from "./Puzzle.svelte";

    const { result, saving }: { result: { path: string, alt: string }, saving: { placed: any[] } } = $props()

    // TODO ?
    const _result: Result = {
        path: result.path,
        alt: result.alt,
        placed: [] // saving.placed
    }

    const correctPieces: number = _result.placed.reduce((sum: number, piece: Piece) => sum + (piece.Correct ? 1 : 0), 0);
    const totalPieces: number = _result.placed.length;
    const points: number = correctPieces * POINTS.ANSWER_CORRECT;
    const totalPoints: number = totalPieces * POINTS.ANSWER_CORRECT;
</script>

<div class="-mx-4">
    <div class="w-full h-auto">
        <figure>
            <Fullscreen>
                <img src={`${_result.path}/Background.png`} alt={_result.alt} class="justify-self-center align-middle">
            </Fullscreen>
            <figcaption></figcaption>
        </figure>
    </div>
</div>

<p class="flex justify-between items-center h-8 px-8 -mx-4 mt-7 bg-secondary text-primary text-[16px]">
    <span class="font-bold">Du hast {correctPieces} von {totalPieces} Teilen richtig</span>
    <span class="font-medium">{points}/{totalPoints}</span>
</p>