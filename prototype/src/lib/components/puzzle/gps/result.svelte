<script lang="ts">
    import type { Result } from "./index"

    let { data }: { data: Result } = $props()
</script>

<div class="w-full h-auto grid grid-cols-1 gap-2 p-4">
    <div>Ich bin vor Ort am Alten Markt eingetroffen. Überprüfe meinen Standort und starte das Spiel.</div>
    <div>Neue Message ?</div>
</div>
