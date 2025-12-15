<script lang="ts">
    import { type AccordionData } from "$components/accordions/Accordion";
    import Accordion from "$components/accordions/Accordion.svelte";
    import  type { GameResultAccordion } from "$components/accordions/GameResultAccordion";
    import GameResultAccordionComponent from "$components/accordions/GameResultAccordion.svelte";
    import type { Result } from ".";
    import { POINTS } from "../Quiz";

    const { result }: { result: Result } = $props();

    // TODO: REMOVE
    const gameResultAccordion: GameResultAccordion = [
            {
                type: "question",
                question: "Abdecker:",
                answers: [
                    {
                        type: "paragraph",
                        content: `So wurden Personen genannt, die mit der Beseitigung und Verwertung (abdecken=abhäuten)
                                  von Tierkadavern beschäftigt waren. Einige Teile des Kadavers konnten verwertet werden.
                                  Daraus entstanden Produkte wie Fette, Leim, Knochenmehl, Seife, Salmiak, Bleichmittel und
                                  Viehfutter. Das Gewerbe galt lange Zeit als „unehrlich“. Das bedeutet, dass die Abdecker
                                  sozial ausgegrenzt wurden. Sie mussten außerhalb der Stadt wohnen.`,
                    },
                ]
            },
            {
                type: "question",
                question: "Bader:",
                answers: [
                    {
                        type: "paragraph",
                        content: `Bader waren – oft in Konkurrenz oder Zusammenarbeit mit den sogenannten Barbieren – bis
                                  ins 19. Jahrhundert für die Körperpflege der Bevölkerung zuständig. Sie betrieben
                                  Badestuben, die nicht nur Orte der Reinigung, sondern auch der Geselligkeit waren. Darüber
                                  hinaus behandelten Bader kleinere Wunden und alltägliche Beschwerden, zogen Zähne oder
                                  legten Schröpfköpfe an. Ihre Tätigkeit lag damit im Schnittfeld zwischen Handwerk, Medizin
                                  und öffentlicher Hygiene.`,
                    },
                ]
            },
            {
                type: "question",
                question: "Gerber:",
                answers: [
                    {
                        type: "paragraph",
                        content: `Gerber verarbeiteten rohe Tierhäute zu haltbarem Leder, das anschließend von
                                  Schuhmachern, Sattlern oder Täschnern weiterverarbeitet wurde. Das Handwerk war wegen
                                  der starken Gerüche und der Nutzung von Gerbflüssigkeiten wie Kalk, Urin oder Lohe
                                  (zerkleinerte Baumrinde) wenig angesehen. Gerbereien lagen deshalb oft am Stadtrand oder
                                  an Flussufern, wo es Wasser zum Spülen der Häute gab. In vielen Städten entstanden
                                  sogenannte Gerbergassen, in denen sich mehrere Werkstätten konzentrierten.`,
                    },
                    {
                        type: "image",
                        src: "/station_01/raetsel_02/image_01.jpg",
                        alt: `Die Gerberstraße in Dortmund. Ausgrabungen im Jahr 2005 förderten zwei Gerbergruben und zwei Brunnen zu
                              Tage. In den Brunnen wurden die Tierhäute gereinigt. Die Gerbergasse lag vor der ehemaligen Stadtmauer (heute
                              am Wall erkennbar). Weißt Du, wo die Straße ist? (Foto: Sophie Ullrich)`,
                        caption: `Die Gerberstraße in Dortmund. Ausgrabungen im Jahr 2005 förderten zwei Gerbergruben und zwei Brunnen zu
                                  Tage. In den Brunnen wurden die Tierhäute gereinigt. Die Gerbergasse lag vor der ehemaligen Stadtmauer (heute
                                  am Wall erkennbar). Weißt Du, wo die Straße ist? (Foto: Sophie Ullrich)`
                    }
                ]
            },
        ];
</script>

<table class="w-full table-fixed border-collapse border-secondary text-left">
    <thead class="font-bold">
        <tr>
            <th class="border-r pl-3 py-2.5">{result.leftHeader}</th>
            <th class="border-l pl-3 py-2.5">{result.rightHeader}</th>
        </tr>
    </thead>
    <tbody class="font-medium">
        {#each result.pairs as pair, i}
            {@const correct = pair.right === result.answers[i]}
            <tr class="border-t-2 h-20">
                <td class="border-r h-20 pl-3">{pair.left}</td>
                <td class="border-l h-20 pl-3">{pair.right}</td>
            </tr>   
            <tr class="w-200px">
                <td colspan="2">
                    <div class="relative flex justify-between items-center bg-secondary text-primary font-bold h-7.5 mb-3.5 -mx-4 px-8">
                        <div>Du hast {correct ? "RICHTIG" : "FALSCH"} getippt</div>
                        <div>{correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE}/{POINTS.ANSWER_CORRECT}</div>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<!-- TODO: REMOVE FROM HERE -->
<div class="mt-15 font-medium">
    <Accordion title={"Willst du wissen, was diese Berufe gemacht haben?"} data={[
    {
        type:"seperator"
    },
    {
        type: "question",
        question: "Abdecker",
        answer: [
            {
                type: "paragraph",
                content: `So wurden Personen genannt, die mit der Beseitigung und Verwertung (abdecken=abhäuten)
                            von Tierkadavern beschäftigt waren. Einige Teile des Kadavers konnten verwertet werden.
                            Daraus entstanden Produkte wie Fette, Leim, Knochenmehl, Seife, Salmiak, Bleichmittel und
                            Viehfutter. Das Gewerbe galt lange Zeit als „unehrlich“. Das bedeutet, dass die Abdecker
                            sozial ausgegrenzt wurden. Sie mussten außerhalb der Stadt wohnen.`
            }
        ]
    },
    {
        type:"seperator"
    },
    {
        type: "question",
        question: "Bader",
        answer: [
            {
                type: "paragraph",
                content: `Bader waren – oft in Konkurrenz oder Zusammenarbeit mit den sogenannten Barbieren – bis
                            ins 19. Jahrhundert für die Körperpflege der Bevölkerung zuständig. Sie betrieben
                            Badestuben, die nicht nur Orte der Reinigung, sondern auch der Geselligkeit waren. Darüber
                            hinaus behandelten Bader kleinere Wunden und alltägliche Beschwerden, zogen Zähne oder
                            legten Schröpfköpfe an. Ihre Tätigkeit lag damit im Schnittfeld zwischen Handwerk, Medizin
                            und öffentlicher Hygiene.`
            }
        ]
    },
    {
        type:"seperator"
    },
    {
        type: "question",
        question: "Gerber",
        answer: [
            {
                type: "paragraph",
                content: `Gerber verarbeiteten rohe Tierhäute zu haltbarem Leder, das anschließend von
                            Schuhmachern, Sattlern oder Täschnern weiterverarbeitet wurde. Das Handwerk war wegen
                            der starken Gerüche und der Nutzung von Gerbflüssigkeiten wie Kalk, Urin oder Lohe
                            (zerkleinerte Baumrinde) wenig angesehen. Gerbereien lagen deshalb oft am Stadtrand oder
                            an Flussufern, wo es Wasser zum Spülen der Häute gab. In vielen Städten entstanden
                            sogenannte Gerbergassen, in denen sich mehrere Werkstätten konzentrierten.`
            },

        ]
    },
    {
        type:"seperator"
    },

    ]}/>
</div>