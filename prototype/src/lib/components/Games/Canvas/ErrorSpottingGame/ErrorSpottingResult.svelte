<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte"
    import type { ResultData, SavingData } from "$components/puzzle/errorSpotting"

    // TODO Simon
    const { result, saving }: { result: ResultData, saving: SavingData } = $props()

    // Notizen wie die Types aussehen
    // type ResultData = { img: string, caption: string }
    // type SavingData = { selected: string }
    console.log({ result, saving })
</script>

<figure>
    <Fullscreen>
        <img src={result.img} alt={"Originalbild"}>
    </Fullscreen>
    <figcaption>Originalbild</figcaption>
</figure>
