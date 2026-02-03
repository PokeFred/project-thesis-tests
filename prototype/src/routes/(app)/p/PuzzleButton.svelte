<script lang="ts">
    import type { _Puzzle } from "."
    import { goto } from "$app/navigation"

    let { puzzle }: { puzzle: _Puzzle } = $props()

    async function redirect(): Promise<void> {
        // TODO add "done"-attribute ?
        if (puzzle.score.current === 0) {
            return goto(`/p/${puzzle.id}`)
        } else {
            if (puzzle.type === "gps-puzzle") {
                return
            } else {
                return goto(`/p/${puzzle.id}/result`)
            }
        }
    }
</script>

<button onclick={redirect} class="w-full h-auto text-secondary bg-primary rounded-full grid grid-cols-[auto_60px] gap-4 px-6 py-2 {puzzle.locked ? "opacity-50 cursor-default" : "cursor-pointer active:scale-95"}" disabled={puzzle.locked}>
    <span class="text-lg font-bold text-left">{puzzle.title} {`(${puzzle.type})`.replace("-puzzle", "")}</span>
    <span class="text-right">{puzzle.score.current}/{puzzle.score.max}</span>
</button>
