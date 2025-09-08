<script lang="ts">
    import "../app.css"
    import type { LayoutProps } from "./$types"
    import Icon from "svelte-awesome"
    import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
    import { score } from "./app/stations/station_04/raetsel_01/Score.svelte";

    let { children }: LayoutProps = $props()
</script>

<div class="mx-auto w-full max-w-sm h-auto">
    <div class="w-full h-14 flex justify-between items-center px-4">
        <span class="text-2xl font-bold">Title</span>
        <span>Score: {score.getScore()}</span>
        <Icon data={faBars} class="w-8 h-8" />
    </div>
    <div class="w-full h-auto border-t border-black p-4">
        {@render children()}
    </div>
</div>
