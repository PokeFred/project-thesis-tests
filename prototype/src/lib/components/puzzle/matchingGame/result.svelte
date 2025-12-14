<script lang="ts">
    import type { Result } from "./index"

    let { data }: { data: Result } = $props()
</script>

<div>{JSON.stringify(data)}</div>
