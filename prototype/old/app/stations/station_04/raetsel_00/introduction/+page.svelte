<script lang="ts">
    import { goto } from "$app/navigation";
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
    import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
    import { faXmark } from "@fortawesome/free-solid-svg-icons"; 
    import { Icon } from "svelte-awesome";

</script>
<div class="relative w-full h-auto">
    <button onclick={(): Promise<void> => goto("..")} class="absolute w-8 h-8 border border-black rounded-lg flex justify-center items-center cursor-pointer">
        <Icon data={faAngleLeft} />
    </button>
    <h3 class="text-lg underline place-self-center ">Rätsel 00</h3>
</div>

<p class="my-4 w-full h-auto text-sm">Hier stimmt etwas nicht. Jemand hat die Schaufenster Auslage des Ladens beschmiert, sodass man die Namen der ausgestellten Produkte nicht mehr richtig lesen kann. Könnt ihr den Buchstabensalat an die richtigen Stellen der Schaufensterbeschriftungen einsetzen?</p>

<section class="my-4 w-full h-auto text-sm">
    <h2 class="underline">Punkteverteilung:</h2>
    <ul>
        <li><Icon data={faSquareCheck} class="text-green-500 mr-2"/>Richtige Antwort: +10 Münzen</li>
        <li><Icon data={faXmark} class="text-red-500 mr-2"/>Falsche Antwort: -3 Münzen</li>
    </ul>
</section>

<a href="./game" data-sveltekit-preload-data data-sveltekit-preload-code class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Rätsel Starten</a>