<script lang="ts">
    import PuzzleGame from "$components/PuzzleGame/PuzzleGame.svelte";
    import type { PageProps } from "./$types"

    const { data }: PageProps = $props()

    let complete: () => void = $state(()=>{})

</script>

<PuzzleGame path={data.path} backgroundSrc={data.backgroundSrc} puzzleData={data.puzzleData} alt={"Puzzel Spiel"} bind:complete={complete}  />