<script lang="ts">
    import "../app.css"
    import type { LayoutProps } from "./$types"
    import Icon from "svelte-awesome"
    import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"

    let { children }: LayoutProps = $props()
</script>

<div class="mx-auto w-full max-w-xs h-auto border border-black">
    <div class="w-full h-12 flex justify-between items-center px-4">
        <span class="text-xl font-bold">Title</span>
        <Icon data={faBars} class="w-6 h-6" />
    </div>
    <div class="w-full h-auto border-t border-black p-4">
        {@render children()}
    </div>
</div>
