<script lang="ts">
    import type { PageProps } from "./$types"
    import { type CutoutData } from "./Piece.svelte";
    import PuzzleGame from "./PuzzleGame.svelte";

    const { data }: PageProps = $props()
</script>

<PuzzleGame path={data.path} backgroundSrc={data.backgroundSrc} cutoutData={data.cutoutData as CutoutData[]} alt={"Puzzel Spiel"}  />