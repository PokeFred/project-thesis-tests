<script lang="ts">
    import type { PageProps } from "./$types"
    import Accordion from "$components/accordions/FaqAccordion.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-black border border-black rounded-xl p-4">
    <div class="text-xl font-bold underline text-center">FAQ</div>
    <Accordion list={data.list} />
</div>
