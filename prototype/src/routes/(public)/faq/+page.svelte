<script lang="ts">
    import type { PageProps } from "./$types"
    import Accordion from "$components/accordions/FaqAccordion.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="text-xl font-bold underline text-center">Frequently Asked Questions</div>
    <div class="my-4">
        <Accordion list={data.list} />
    </div>
    <!-- svelte-ignore a11y_invalid_attribute -->
    <div>Für weitere Fragen, Anmerkungen oder Ergänzungen, die hier nicht aufgeführt sind, schreiben Sie uns bitte eine E-Mail an <a href="#">???</a>.</div>
</div>
