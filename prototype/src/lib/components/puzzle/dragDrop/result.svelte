<script lang="ts">
    import PuzzleGameResult from "$components/Games/PuzzleGame/PuzzleGameResult.svelte";
    import type { Result, Saving } from "./index"

    let { result, saving }: { result: Result, saving: Saving } = $props()
</script>

<PuzzleGameResult result={
{
    placed: [{},{},{},{},{}],
    path:"/station_01/raetsel_02/game/",
    alt: "asdasd" 
}}/>

<!-- <div>{JSON.stringify(result)}</div> -->
<!-- <div>{JSON.stringify(saving)}</div> -->