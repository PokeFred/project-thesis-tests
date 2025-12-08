<script lang="ts">
    import type { _Puzzle } from "."
    import { goto } from "$app/navigation"

    let { puzzle }: { puzzle: _Puzzle } = $props()
</script>

<button onclick={() => goto(`/p/${puzzle.id}`)} class="w-full h-auto text-primary bg-secondary rounded-full grid grid-cols-[auto_60px] gap-4 px-6 py-2 {puzzle.locked ? "opacity-50 cursor-default" : "cursor-pointer active:scale-95"}" disabled={puzzle.locked}>
    <span class="text-lg font-bold text-left">{puzzle.title}</span>
    <span class="text-right">{puzzle.score.current}/{puzzle.score.max}</span>
</button>
