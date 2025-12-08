<script lang="ts">
    import type { PageProps } from "./$types"
    import BackButton from "../../s/BackButton.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">{""}</span>
        <BackButton url={"/s"} />
    </div>
</div>
