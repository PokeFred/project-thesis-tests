<script lang="ts">
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
</script>

<div class="w-full h-auto flex justify-between items-center">
    <button onclick={(): Promise<void> => goto("..")} class="w-8 h-8 border border-black rounded-lg flex justify-center items-center cursor-pointer">
        <Icon data={faAngleLeft} />
    </button>
    <div class="text-lg underline">Rätsel 01</div>
    <div></div>
</div>

<p class="my-2">
    Das Warenhaus Althoff war mit seinen 5000 m² Verkaufsfläche und etwa 500
    Mitarbeitenden das größte Warenhaus außerhalb Berlins.
</p>

<p class="my-2">
    Wenn Du mehr über die Innenausstattung und die im Kaufhaus angebotenen Waren
    erfahren möchtest, löse den folgenden Lückentext. Jeweils ein Begriff ist
    der richtige und muss in die freie Lücke eingesetzt werden.
</p>

<section class="my-2">
    <h2>Punkteverteilung:</h2>
    <ul>
        <li>+10 Punkte für die richtige Antwort</li>
        <li>-3 Punkte für benutzen Hinweis</li>
        <li>-5 Punkte für falsche Antwort</li>
        <li>-3 Punkte für benutzen Hinweis</li>
        <li>0 Punkte, wenn Lücke freigelassen wird</li>
    </ul>
</section>

<a href="./game" data-sveltekit-preload-data data-sveltekit-preload-code>Rätsel Starten</a>