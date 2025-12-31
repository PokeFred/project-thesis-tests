<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte";
    import type { ResultData, SavingData } from "$components/puzzle/errorSpotting";
    // TODO
    const { result, saving }: { result: ResultData, saving: SavingData } = $props();

</script>

<figure>
    <Fullscreen>
        <img src={""} alt={""}>
    </Fullscreen>
    <figcaption></figcaption>
</figure>