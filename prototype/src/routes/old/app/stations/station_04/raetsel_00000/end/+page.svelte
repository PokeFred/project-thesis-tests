<script lang="ts">
    import { POINTS } from "$lib/State.svelte";
    import { quiz } from "../Quiz"
</script>

<p class="mb-4 w-full h-auto text-sm">
    Super, Du hast alle Fragen beantwortet. Jetzt weißt Du, was für Anforderungen der Markt im
    Mittelalter erfüllen musste und was den Dortmunder Markt ausmachte. In den Texten dieser
    Station erfährst Du noch mehr über die Geschichte von Märkten und das Einkaufen auf dem
    Markt.
</p>

<!-- TODO: zu semantisch korrekten ul machen -->
<section>
    <h4>Punkteübersicht</h4>
    <div class="grid gap-1 grid-cols-[auto_auto]">
        {#each quiz.options as option, i}
            {#if quiz.selected[i]}
                <span class="w-full h-auto text-sm">{option.answer}</span>
                <span class="place-self-center text-center w-full h-auto text-sm">{quiz.selected[i] ? (option.correct ? `+${POINTS.ANSWER_CORRECT}` : POINTS.ANSWER_FALSE) : 0}</span>
            {/if}
        {/each}
    </div>
    <p class="mb-4 w-full h-auto text-sm">Insgesammt Verdiente Punkte: {quiz.getQuizState().getScore()}</p>
</section>

<!-- Accordion -->


<a href=".." data-sveltekit-preload-data data-sveltekit-preload-code class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Zurück zur Rätselübersicht</a>