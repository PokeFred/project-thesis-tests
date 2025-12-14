<script lang="ts">
    import PointSummary from "$components/Games/PointSummary.svelte";
    import { Icon } from "svelte-awesome";
    import { quiz } from "../Quiz";
    import { POINTS } from "$components/Games/Quiz"
    import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
    import GameHeader from "$components/Games/GameHeader.svelte";

    const selected = quiz.Selected.filter((answer)=> answer ? true : false);
    const descriptions: string[] = selected.map((answer)=> answer.answer);
    const points: number[] = selected.map((answer)=> answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);

    const data = {
        stitle: "ASD",
        completion: 0,
        identifier: "asd",
        text: [
            `Super, Du hast alle Lücken ausgefüllt! Jetzt kannst Du Dir vielleicht
             vorstellen, wie das Warenhaus Althoff früher ausgesehen hat und wie
             beeindruckend es auf die Menschen der damaligen Zeit gewirkt haben muss.`,
            `Die Bilder zeigen das sich über zwei Etagen erstreckende, prachtvoll
             ausgestattete Teppichlager – dort wurden übrigens regelmäßig Märchen für
             Kinder aufgeführt –, den beeindruckenden Erfrischungsraum sowie das Gebäude
             von außen. Hast Du Dir die Räume so oder so ähnlich vorgestellt? Das
             Warenhaus Althoff wurde zur Erlebniswelt, die für alle etwas zu bieten
             hatte!`
        ]
    }
</script>


<GameHeader stitle={data.stitle} completion={data.completion} identifier={data.identifier} text={data.text} />

<PointSummary {descriptions} {points}/>

<button onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })} class="my-8 ml-auto mr-3.5 w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer touch-manipulation active:scale-95">
    <Icon data={faAngleUp} class="w-6 h-6" />
</button>