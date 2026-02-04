<script lang="ts">
    import type { ResultData, SavingData } from "."
    import ResultComponent from "$components/Games/WordGuessingGame/WordGuessingResult.svelte"

    let { result, saving }: { result: ResultData, saving: SavingData } = $props()

    // TODO cedric: station 5 rätsel 3 result
    // im introduction bild nicht vergessen
    // result = {
    //     questions: [
    //         {
    //             solution: "Rosendahl",
    //         }
    //     ]
    // }

    // TODO cedric: station 7 rätsel 2 result
    // result = {
    //     questions: [
    //         {
    //             solution: "10"
    //         }
    //     ]
    // }
    
    // TODO cedric: station 9 rätsel 1 result
    // result = {
    //     questions: [
    //         {
    //             solution: "14"
    //         }
    //     ]
    // }

    // TODO cedric: station 9 rätsel 2 result
    // result = {
    //     questions: [
    //         {
    //             solution: "6"
    //         }
    //     ]
    // }

    // TODO cedric: station 9 rätsel 3 result
    // const input: Input =  {
    //     questions: [
    //         {
    //             solution: "2"
    //         }
    //     ]
    // }
</script>

<ResultComponent result={result} saving={saving} />
