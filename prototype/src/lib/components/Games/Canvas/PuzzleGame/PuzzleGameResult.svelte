<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte";
    import type { ResultData, SavingData } from "$components/puzzle/dragDrop";
    import { POINTS } from "../../Quiz";

    const { result, saving }: { result: ResultData, saving: SavingData } = $props()

    const correctPieces: number = saving.correct;
    const totalPieces: number = saving.total;
    const points: number = correctPieces * POINTS.ANSWER_CORRECT;
    const totalPoints: number = totalPieces * POINTS.ANSWER_CORRECT;
</script>

<div class="-mx-4">
    <div class="w-full h-auto">
        <figure class="justify-self-center align-middle">
            <Fullscreen>
                <img src={`${result.img}`} alt={result.caption} class="justify-self-center align-middle">
            </Fullscreen>
            <figcaption></figcaption>
        </figure>
    </div>
</div>

<p class="flex justify-between items-center min-h-8 px-8 -mx-4 mt-7 bg-secondary text-primary text-[16px]">
    <span class="font-bold">Du hast {correctPieces} von {totalPieces} {result.scoreDescription !== undefined ? result.scoreDescription : "Teilen richtig"}</span>
    <span class="font-medium">{points}/{totalPoints}</span>
</p>