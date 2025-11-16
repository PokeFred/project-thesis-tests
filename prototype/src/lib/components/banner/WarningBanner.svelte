<script lang="ts">
    import type { BaseBannerConfig } from "./BaseBanner"
    import Banner from "./BaseBanner.svelte"

    let { message }: { message: string } = $props()
    const config: BaseBannerConfig = {
        title: "Warning",
        message: message,
        color: { r: 255, g: 255, b: 0 }
    }
</script>

<Banner config={config} />
