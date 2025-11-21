<script lang="ts">
    import { goto } from "$app/navigation"
    import { resetGame } from "$stores/game"
    import Icon from "svelte-awesome"
    import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket"

    function leave(): void {
        resetGame()
        goto("/")
    }
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">APP</span>
        <button onclick={leave} class="w-8 h-8 text-primary bg-secondary rounded-lg flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faRightFromBracket} class="w-5 h-5" />
        </button>
    </div>
</div>
<div class="w-full h-auto text-secondary">
    <div class="italic px-4">"Ideen für die Seite"</div>
    <ul class="list-disc px-8">
        <li>Erklärung der App</li>
        <li>Anleitung...</li>
        <li>Wegbeschreibungen</li>
        <li>Mehrsprachigkeit</li>
        <li>Barrierefreiheit-Icon</li>
        <li>Storyline</li>
    </ul>
    <div class="mt-2 mx-auto w-fit h-auto">
        <button onclick={() => goto("/app/stations")} class="w-full h-auto text-xl text-primary bg-secondary rounded-xl cursor-pointer px-8 active:scale-95">Zu den Stationen</button>
    </div>
</div>
