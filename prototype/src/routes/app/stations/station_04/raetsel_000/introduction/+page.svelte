<script lang="ts">
    import { goto } from "$app/navigation";
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
    import { Icon } from "svelte-awesome";

</script>
<div class="w-full h-auto flex justify-between items-center">
    <button onclick={(): Promise<void> => goto("..")} class="w-8 h-8 border border-black rounded-lg flex justify-center items-center cursor-pointer">
        <Icon data={faAngleLeft} />
    </button>
    <div class="text-lg underline">Rätsel 000</div>
    <div></div>
</div>

<p class="my-4 w-full h-auto text-sm">
    Der heilige Reinoldus ist nicht nur Stadtpatron von Dortmund, sondern auch Namensgeber der Reinoldigilde. Das war ein Zusammenschluss von Fernhandelskaufleuten in Dortmund. 
    Statte den heiligen Reinoldus mit den richtigen Attributen/Gegenständen aus.
</p>

<p class="my-4 w-full h-auto text-sm">
    Tipp: Schau doch einmal in die Reinoldikirche, vielleicht hilft Dir das die richtigen Gegenstände auszuwählen
</p>

<div class="mt-3">
    <a href="./game" data-sveltekit-preload-data data-sveltekit-preload-code class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Rätsel Starten</a>
</div>