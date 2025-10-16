<script lang="ts">
    import type { Question } from "./Accordion"
    import Accordion from "./Accordion.svelte"

    const questions: Question[] = [
        { identifier: "question_01", question: "Frage 1 ?", answer: "Antwort 1." },
        { identifier: "question_01", question: "Frage 2 ?", answer: "Antwort 2." },
        { identifier: "question_01", question: "Frage 3 ?", answer: "Antwort 3." }
    ]
</script>

<div class="w-full h-auto text-black border border-black rounded-xl p-4">
    <div class="text-xl font-bold underline text-center">FAQ</div>
    <Accordion questions={questions} />
</div>
