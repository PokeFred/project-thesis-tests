<script lang="ts">
    import MatchingGameResult from "$components/Games/MatchingGame/MatchingGameResult.svelte";
    import type { Result } from "./index"

    let { data }: { data: Result } = $props()
</script>

<!-- <div>{JSON.stringify(data)}</div> -->

<MatchingGameResult result={
{
    leftHeader: "HANDWERK",
    rightHeader: "ZUNFT",
    pairs: [
        { left: "Metall-verarbeitung", right: "Schmied" },
        { left: "Getreide-verarbeitung", right: "Bäcker" },
        { left: "Fleisch-verarbeitung", right: "Fleischer" },
        { left: "Leder-verarbeitung", right: "Gerber" },
        { left: "Feinleder-verarbeitung", right: "Schuhmacher" },
        { left: "Gemischt-warenhandel", right: "Krämer" },
        { left: "Handel mit Butter, Öl, Speck etc.", right: "Fettkrämer" }
    ],
    answers: ["Schmied"]
}} 
/>