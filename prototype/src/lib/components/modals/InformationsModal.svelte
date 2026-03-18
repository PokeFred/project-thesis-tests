<script lang="ts">
    import Modal from "$components/modals/Modal.svelte"
    import Fullscreen from "$components/Fullscreen.svelte"
    import { asset } from "$utils/url"

    let modal: Modal
    export function openModal(): void { modal.openModal() }
</script>

<Modal bind:this={modal} buttonText={"Schließen"} onConfirm={(): void => {}}>
    <div class="w-full h-auto text-xl font-bold text-start">Infos zur Nutzung</div>
    <div class="mt-4 w-full h-auto grid grid-cols-1 gap-4">
        <hr />
        <div class="font-bold">Technische Voraussetzungen</div>
        <div>Du brauchst ein Smartphone mit Internet. Die Schnitzeljagd läuft direkt im Browser deines Smartphones. Du musst nichts herunterladen und dich nicht anmelden.</div>
        <hr />
        <div class="font-bold">Standortfunktion</div>
        <div>Die Standortfunktion (GPS) deines Smartphones muss eingeschaltet sein. Nur so erkennt das Spiel, dass du an einer Station angekommen bist. Dann werden die Rätsel freigeschaltet.</div>
        <hr />
        <div class="font-bold">Barrierefreiheit</div>
        <div>Die Stationen der Schnitzeljagd sind auch mit dem Rollstuhl erreichbar. Manche Wege führen jedoch über Kopfsteinpflaster oder unebene Wege.</div>
        <div>Du kannst auch die Wheelmap-Karte nutzen. Dort siehst du, welche Orte gut mit dem Rollstuhl zugänglich sind. Zum Beispiel sind die Reinoldikirche und die Thier-Galerie rollstuhlgerecht. Externer Link: Wheelmap - Finde rollstuhlgerechte Orte.</div>
        <hr />
        <div class="font-bold">Digitale Barrierefreiheit</div>
        <div>Wir bemühen uns, die App möglichst barrierearm zu gestalten.</div>
        <hr />
        <div class="font-bold">Gendergerechte Sprache</div>
        <div>In den Texten verwenden wir teils gendergerechte, teils historische Bezeichnungen, die die damaligen gesellschaftlichen Verhältnisse widerspiegeln. So möchten wir Vielfalt sichtbar machen und zugleich die Vergangenheit möglichst genau darstellen.</div>
        <hr />
    </div>
    <div class="mt-4 w-full h-auto text-xl font-bold text-start">Häufige Frage</div>
    <div class="mt-4 w-full h-auto grid grid-cols-1 gap-4">
        <hr />
        <div class="font-bold">Was macht die App?</div>
        <div>Die App führt dich durch die Stadt und vermittelt Wissen über die Geschichte des Einkaufens und seinen Wandel, speziell in Dortmund. Rätsel und kleine Spiele testen dabei dein Wissen und deine Fähigkeiten.</div>
        <hr />
        <div class="font-bold">Für wen ist die App geeignet?</div>
        <div>Für historisch Interessierte und Rätselbegeisterte. Für Jugendliche ab etwa 13 Jahren, Familien, Erwachsene und Senior*innen.</div>
        <hr />
        <div class="font-bold">Muss ich die Stationen in einer bestimmten Reihenfolge spielen?</div>
        <div>Nein. Du kannst die Stationen in beliebiger Reihenfolge besuchen. Die vorgeschlagene Route folgt jedoch einer historischen Chronologie.</div>
        <hr />
        <div class="font-bold">Warum wird ein Rätsel nicht freigeschaltet?</div>
        <div>Die Rätsel werden erst freigeschaltet, wenn du an der richtigen Station bist. Bitte prüfe, ob die Standortfunktion (GPS) auf deinem Smartphone eingeschaltet ist.</div>
        <hr />
        <div class="font-bold">Kann ich das Spiel unterbrechen und später weitermachen</div>
        <div>Ja. Du kannst das Spiel jederzeit pausieren und später fortsetzen.</div>
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
    </div>
</Modal>
