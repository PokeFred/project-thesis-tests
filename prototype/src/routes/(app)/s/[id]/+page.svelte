<script lang="ts">
    import type { PageProps } from "./$types"
    import Accordion from "./ChapterAccordion.svelte"
    import type { Chapter } from "./ChapterAccordion"
    import BackButton from "$components/BackButton.svelte"
    import { sendTo } from "$utils/url"

    let { data }: PageProps = $props()

    async function redirectToPuzzle(puzzle: any): Promise<void> {
        if (!puzzle.done) return sendTo(`/p/${puzzle.id}`)
        if (puzzle.type !== "gps-puzzle") return sendTo(`/p/${puzzle.id}/result`)
    }
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center pl-6 pr-4">
        <span class="text-lg font-semibold uppercase">{data.stitle}</span>
        <BackButton path={"/s"} />
    </div>
    <div class="mt-4 mb-8 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.puzzles as puzzle}
            <button onclick={(): Promise<void> => redirectToPuzzle(puzzle)} class="w-full h-auto text-primary bg-secondary rounded-full grid grid-cols-[auto_60px] gap-4 px-6 py-2 {puzzle.locked ? "opacity-50 cursor-default" : "cursor-pointer active:scale-95"}" disabled={puzzle.locked}>
                <span class="text-lg font-bold text-left">{puzzle.title}</span>
                <span class="text-right">{puzzle.score.current}/{puzzle.score.max}</span>
            </button>
        {/each}
    </div>
    {#if data.stitle === "Heute: Dein Einkauf"}
        <div class="w-full h-auto text-lg font-bold text-[20px] text-left leading-6 px-2 mb-5">Reflexionsfragen</div>
        <div class="px-2">
            <div class="font-bold">1. Dein Alltag</div>
            <ul class="list-disc pl-6">
                <li>Wo kaufst du lieber ein: online oder vor Ort ? Warum ?</li>
                <li>Was hast du dir zuletzt spontan gekauft ? Was hat dich dazu gebracht ?</li>
                <li>Gibt es etwas, das du oft kaufst, obwohl du es eigentlich nicht brauchst ?</li>
            </ul>
            <br />
            <div class="font-bold">2. Gewohnheiten & Bequemlichkeit</div>
            <ul class="list-disc pl-6">
                <li>Welche Vorteile hat Online-Shopping für dich persönlich ?</li>
                <li>Welche Nachteile nimmst du dabei in Kauf ?</li>
                <li>Achtest du beim Einkaufen auf Nachhaltigkeit, Herkunft oder Produktionsbedingungen ? Wann und wann eher nicht ?</li>
            </ul>
            <br />
            <div class="font-bold">3. Werte & Widersprüche</div>
            <ul class="list-disc pl-6">
                <li>Gibt es einen Unterschied zwischen dem, was dir wichtig ist, und dem, was du tatsächlich kaufst ?</li>
                <li>Wo fällt es dir leicht, bewusst einzukaufen, und wo schwer ?</li>
                <li>Denkst du beim Einkaufen manchmal darüber nach, welche Folgen deine Entscheidungen für Umwelt oder Klima haben ?</li>
                <li>Was würdest du an deinem Einkaufsverhalten gerne ändern, wenn es einfacher wäre ?</li>
            </ul>
            <br />
            <div class="font-bold">4. Blick nach vorn</div>
            <ul class="list-disc pl-6">
                <li>Glaubst du, die Innenstädte der Zukunft sehen ganz anders aus als heute ? Wie ?</li>
                <li>Kannst du dir vorstellen, dass Einkaufen sich künftig vollständig in den digitalen Raum verlagert - auch bei Lebensmitteln, Kleidung oder Alltagsdingen ?</li>
                <li>Glaubst du, dass bestimmte Aspekte des Einkaufens wieder wichtiger werden könnten, etwa persönlicher Kontakt, Beratung oder Begegnung ?</li>
            </ul>
        </div>
        <div class="mb-8"></div>
    {/if}
    <Accordion title={data.title} chapters={data.chapters} />
</div>
