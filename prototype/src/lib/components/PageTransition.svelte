<script lang="ts">
    import type { Snippet } from "svelte"
    import { fly } from "svelte/transition"
    import { page } from "$app/state"

    let { children }: { children: Snippet } = $props()
    const x: number = -10
    const y: number = 0
    const duration: number = 300
</script>

{#key page.url.pathname}
    <div in:fly={{ x: x, y: y, duration: duration, delay: duration }} out:fly={{ x: x, y: y, duration: duration }}>
        {@render children()}
    </div>
{/key}
