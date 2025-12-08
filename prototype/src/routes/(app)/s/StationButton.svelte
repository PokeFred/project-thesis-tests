<script lang="ts">
    import type { Station } from "."
    import { goto } from "$app/navigation"

    let { station }: { station: Station } = $props()
</script>

<button onclick={(): Promise<void> => goto(`/s/${station.id}`)} class="w-full h-auto text-primary bg-secondary rounded-full grid grid-cols-[auto_60px] gap-4 cursor-pointer px-6 py-2 active:scale-95">
    <span class="text-lg font-bold text-left">{station.title}</span>
    <span class="text-right">{station.score.current}/{station.score.max}</span>
</button>
