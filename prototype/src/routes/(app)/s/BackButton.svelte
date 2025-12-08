<script lang="ts">
    import { goto } from "$app/navigation"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
    import { Icon } from "svelte-awesome"

    let { url }: { url: string } = $props()
</script>

<button onclick={() => goto(url)} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
    <Icon data={faAngleLeft} class="w-6 h-6" />
</button>
