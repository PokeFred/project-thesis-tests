<script lang="ts">
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
    import { Icon } from "svelte-awesome"
    import { sendTo } from "$utils/url"

    let { path }: { path: string } = $props()
</script>

<button onclick={(): Promise<void> => sendTo(path)} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95" aria-label="Eine Seite zurück">
    <Icon data={faAngleLeft} class="w-6 h-6" />
</button>
