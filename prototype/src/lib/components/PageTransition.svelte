<script lang="ts">
    import { fly } from "svelte/transition"
    import { page } from "$app/state"

    let { children }: { children: any } = $props()
    let x: number = -25
    let y: number = 0
    let duration: number = 300
</script>

{#key page.url.pathname}
    <div in:fly={{ x: x, y: y, duration: duration, delay: duration }} out:fly={{ x: x, y: y, duration: duration }}>
        {@render children()}
    </div>
{/key}
