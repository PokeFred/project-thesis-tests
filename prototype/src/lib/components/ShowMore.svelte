<script lang="ts">
    import type { Snippet } from "svelte";

    let { children, toggle = $bindable() } : { children?: Snippet; toggle?: ()=>void } = $props();
    let shown: boolean = $state(false);

    function onclick(): void {
        shown = !shown;
    }
    toggle = onclick;
</script>

<div>
    <button {onclick} class="w-full text-left {shown ? "mb-8" : ""} cursor-pointer touch-manipulation">{shown ? "FÜR WENIGER INFOS HIER TIPPEN" : "FÜR MEHR INFOS HIER TIPPEN"}</button>
    {#if shown}
        {@render children?.()}
    {/if}
</div>