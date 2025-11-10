<script lang="ts">
    import type { PageProps } from "./$types"
    import Accordion from "$components/accordions/FaqAccordion.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="text-xl font-bold underline text-center">Impressum</div>
    <div class="mt-2">
        <Accordion list={data.list} />
    </div>
</div>
