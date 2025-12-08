<script lang="ts">
    import type { LayoutProps } from "./$types"
    import Icon from "svelte-awesome"
    import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp"

    let { children }: LayoutProps = $props()
</script>

{@render children()}
<button onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })} class="my-4 ml-auto w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer touch-manipulation active:scale-95">
    <Icon data={faAngleUp} class="w-6 h-6" />
</button>
