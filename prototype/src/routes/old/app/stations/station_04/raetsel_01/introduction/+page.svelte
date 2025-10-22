<script lang="ts">
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
    import { faXmark } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="relative w-full h-auto">
    <button onclick={(): Promise<void> => goto("..")} class="absolute w-8 h-8 border border-black rounded-lg flex justify-center items-center cursor-pointer">
        <Icon data={faAngleLeft} />
    </button>
    <h3 class="text-lg underline place-self-center">Rätsel 01</h3>
</div>

<p class="my-4 w-full h-auto text-sm">
    Das Warenhaus Althoff war mit seinen 5000 m² Verkaufsfläche und etwa 500
    Mitarbeitenden das größte Warenhaus außerhalb Berlins.
</p>

<p class="my-4 w-full h-auto text-sm">
    Wenn Du mehr über die Innenausstattung und die im Kaufhaus angebotenen Waren
    erfahren möchtest, löse den folgenden Lückentext. Jeweils ein Begriff ist
    der richtige und muss in die freie Lücke eingesetzt werden.
</p>

<section class="my-4 w-full h-auto text-sm">
    <h2 class="underline">Punkteverteilung:</h2>
    <ul>
        <li><Icon data={faSquareCheck} class="text-green-500 mr-2"/>+10 Punkte für die richtige Antwort</li>
        <li><Icon data={faXmark} class="text-red-500 mr-2"/>-3 Punkte für benutzen Hinweis</li>
        <li><Icon data={faXmark} class="text-red-500 mr-2"/>-5 Punkte für falsche Antwort</li>
        <li>0 Punkte, wenn Lücke freigelassen wird</li>
    </ul>
</section>

<a href="./game" data-sveltekit-preload-data data-sveltekit-preload-code class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Rätsel Starten</a>