<script lang="ts">
    import type { PageProps } from "./$types"
    import Accordion from "$components/accordions/FaqAccordion.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-primary">
    <div class="text-xl font-bold underline text-center">Infos zur Nutzung</div>
    <div class="my-4">
        <Accordion list={data.list} />
    </div>
</div>
