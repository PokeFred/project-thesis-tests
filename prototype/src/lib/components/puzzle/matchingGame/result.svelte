<script lang="ts">
    import type { ResultData, SavingData } from "."
    import ResultComponent from "$components/Games/MatchingGame/MatchingGameResult.svelte"

    let { result, saving }: { result: ResultData, saving: SavingData } = $props()

    const data = {
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
    }

    // TODO temp
    console.log({ result, saving })
</script>

<!-- <ResultComponent result={result} saving={saving} /> -->
