<script lang="ts">
    import { goto } from "$app/navigation"
</script>

<div class="w-full h-auto text-black border border-black rounded-xl p-4">
    <div class="mx-auto w-fit h-auto">
        <button onclick={() => goto("/app/stations")} class="w-full h-auto text-xl text-white bg-blue-500 rounded-xl cursor-pointer px-8">Zu den Stationen</button>
    </div>
    <br />
    <div style="font-style: italic;">"Ideen für die Seite"</div>
    <div>Erklärung der App</div>
    <div>- Anleitung...</div>
    <div>- Wegbeschreibungen</div>
    <div>- Mehrsprachigkeit</div>
    <div>- Barrierefreiheit-Icon</div>
</div>
