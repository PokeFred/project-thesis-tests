<script lang="ts">
    import Modal from "$components/modals/Modal.svelte"
    import Fullscreen from "$components/Fullscreen.svelte"
    import { asset } from "$utils/url"

    let modal: Modal
    export function openModal(): void { modal.openModal() }
</script>

<Modal bind:this={modal} buttonText={"Schließen"} onConfirm={(): void => {}}>
    <div class="w-full h-auto text-xl font-bold text-start">Anleitung</div>
    <div class="mt-4 w-full h-auto grid grid-cols-1 gap-4">
        <hr />
        <div class="font-bold">Willkommen zur digitalen Stadtrundgang rund ums Einkaufen!</div>
        <div>Wo und wie wurde früher eingekauft? Wie hat sich das Einkaufen - und damit der Alltag der Menschen - über die Jahrhunderte in Dortmund verändert?</div>
        <div>Diese App nimmt dich mit auf eine Reise durch die Dortmunder Einkaufsgeschichte: vom Markt über Warenhäuser und Einkaufsstraßen bis hin zur modernen Shopping-Mall.</div>
        <hr />
        <div class="font-bold">Kurz erklärt:</div>
        <ul class="list-disc pl-6">
            <li>Geh zu einer Station in der Innenstadt.</li>
            <li>Die Rätsel werden freigeschaltet, sobald du am richtigen Ort bist.</li>
            <li>Beantworte Fragen, löse Rätsel und sammle Punkte.</li>
            <li>Lies Hintergrundtexte oder höre dir die Audios an, wenn du mehr erfahren möchtest.</li>
            <li>Du kannst die Route frei wählen und jederzeit pausieren.</li>
        </ul>
        <hr />
        <div class="font-bold">Route und Dauer:</div>
        <div>Die Route umfasst 8 Stationen in der Innenstadt sowie eine Station am Hafen. Für die Innenstadt-Route solltest du etwa 1,5 Stunden einplanen. Mit der Hafenstation dauert die Route insgesamt ca. 2-2,5 Stunden.</div>
        <hr />
        <div class="font-bold">Übersichtskarten:</div>
        <div>Auf den Karten siehst du, wo sich die Stationen der digitalen Stadtführung befinden und wie die Route durch die Stadt führt.</div>
        <Fullscreen>
            <img src={asset("/map_big.webp")} alt="" class="w-full rounded-xl" />
        </Fullscreen>
        <Fullscreen>
            <img src={asset("/map_small.webp")} alt="" class="w-full rounded-xl" />
        </Fullscreen>
        <hr />
        <div class="font-bold">Wenig Zeit? Kein Problem.</div>
        <div>Du kannst die digitale Stadtführung auch in Teilen durchführen oder dir nur einzelne Stationen aussuchen. In der Übersicht siehst du, welche Station wie viele Punkte bringt. So kannst du dir deine eigene Route zusammenstellen.</div>
        <hr />
        <div class="font-bold">Punkteübersicht:</div>
        <table class="w-fit">
            <thead>
                <tr>
                    <td class="px-2">Nr.</td>
                    <td class="px-2">Ort</td>
                    <td class="px-2">Rätsel</td>
                    <td class="px-2">Punkte</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="px-2">1</td>
                    <td class="px-2">Alter Markt</td>
                    <td class="px-2">3</td>
                    <td class="px-2">61</td>
                </tr>
                <tr>
                    <td class="px-2">2</td>
                    <td class="px-2">Westenhellweg</td>
                    <td class="px-2">1</td>
                    <td class="px-2">13</td>
                </tr>
                <tr>
                    <td class="px-2">3</td>
                    <td class="px-2">Hansastraße</td>
                    <td class="px-2">3</td>
                    <td class="px-2">46</td>
                </tr>
                <tr>
                    <td class="px-2">4</td>
                    <td class="px-2">Reinoldistraße</td>
                    <td class="px-2">2</td>
                    <td class="px-2">13</td>
                </tr>
                <tr>
                    <td class="px-2">5</td>
                    <td class="px-2">Hafen</td>
                    <td class="px-2">3</td>
                    <td class="px-2">31</td>
                </tr>
                <tr>
                    <td class="px-2">6</td>
                    <td class="px-2">Freiherr-vom-Stein-Platz</td>
                    <td class="px-2">1</td>
                    <td class="px-2">16</td>
                </tr>
                <tr>
                    <td class="px-2">7</td>
                    <td class="px-2">Kampstraße</td>
                    <td class="px-2">1</td>
                    <td class="px-2">7</td>
                </tr>
                <tr>
                    <td class="px-2">8</td>
                    <td class="px-2">Westenhellweg</td>
                    <td class="px-2">1</td>
                    <td class="px-2">10</td>
                </tr>
                <tr>
                    <td class="px-2">9</td>
                    <td class="px-2">Thier-Galerie</td>
                    <td class="px-2">2</td>
                    <td class="px-2">10</td>
                </tr>
                <tr>
                    <td class="px-2">10</td>
                    <td class="px-2">„Heute: Dein Einkauf“</td>
                    <td class="px-2">-</td>
                    <td class="px-2">0</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4" class="text-left">Gesamt: 207 Punkte</td>
                </tr>
            </tfoot>
        </table>
        <hr />
        <div class="font-bold">Rätsel, Texte und Reihenfolge:</div>
        <div>An jeder Station erwarten dich Rätsel, Aufgaben oder Quizfragen. Die Rätsel werden erst freigeschaltet, wenn du am richtigen Ort angekommen bist. Wenn ein Rätsel nicht freigeschaltet wird, überprüfe bitte, ob die Standortfunktion (GPS) aktiviert ist.</div>
        <div>Außerdem kannst du mehr über die Geschichte des Einkaufens erfahren, mit besonderem Blick auf Dortmund.</div>
        <div>Die Texte kannst du:</div>
        <ul class="list-disc pl-6">
            <li>entweder vor Ort lesen</li>
            <li>oder ganz entspannt von zu Hause aus, auch ohne die Stationen abzulaufen</li>
            <li>dir per Audio anhören</li>
        </ul>
        <div>Manchmal geben dir die Texte Hinweise zu einzelnen Aufgaben. Das kann helfen, ist aber kein Muss. Alle Rätsel sind auch ohne das Lesen der Texte lösbar.</div>
        <div>Die Stationen in der App sind chronologisch angeordnet (Alter Markt = Station 1, Thier-Galerie= Station 9). Die Texte folgen einer Erzählung vom Mittelalter bis heute. Auch die Route ergibt - mit Ausnahme der Hafenstation - einen gut begehbaren Rundgang. Du kannst die Reihenfolge aber auch selbst bestimmen.</div>
        <hr />
        <div class="font-bold">Punkte & Spielweise:</div>
        <div>Für jede richtige Antwort erhältst du 3 Punkte. Falsche Antworten ergeben 0 Punkte. Je nach Rätseltyp gibt es mehrere richtige Antworten.</div>
        <div>Für das Freischalten der Rätsel erhältst du zusätzlich 1 Punkt. </div>
        <div>Insgesamt kannst du bis zu 207 Punkte erreichen. Die Punkte aller Stationen werden zusammengerechnet. Du kannst jederzeit sehen, wie viele Punkte du erreicht hast.</div>
        <div>Es gibt kein Zeitlimit.</div>
        <div>Am Ende erwartet dich eine freiwillige Reflexionsstation, die dazu einlädt, über das eigene Einkaufsverhalten nachzudenken.</div>
        <hr />
        <div class="font-bold">Gut zu wissen:</div>
        <ul class="list-disc pl-6">
            <li>Die App ist kostenlos</li>
            <li>Sie läuft direkt im Browser</li>
            <li>Es ist keine Anmeldung nötig</li>
            <li>Du kannst jederzeit starten, pausieren oder das Spiel erneut starten (Hinweis: Beim erneuten starten geht der Punktestand verloren und Stationen müssen nochmal gespielt werden.)</li>
        </ul>
        <hr />
    </div>
</Modal>
