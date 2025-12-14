<script lang="ts">
    import MultipleChoiceResult from "$components/Games/MultipleChoiceGame/MultipleChoiceResult.svelte"
    import type { Result, Saving } from "."

    let { result, saving }: { result: Result, saving: Saving } = $props()
</script>

<MultipleChoiceResult result={saving} />
