<script lang="ts">
    import MultipleChoiceResult from "$components/Games/MultipleChoiceGame/MultipleChoiceResult.svelte";
    import type { Result } from "$components/Games/MultipleChoiceGame"

    let { data }: { data: Result } = $props()
</script>

<MultipleChoiceResult result={data}/>