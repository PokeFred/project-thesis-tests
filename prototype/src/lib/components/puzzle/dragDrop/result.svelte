<script lang="ts">
    import type { Result, Saving } from "./index"

    let { result, saving }: { result: Result, saving: Saving } = $props()
</script>

<div>{JSON.stringify(result)}</div>
<div>{JSON.stringify(saving)}</div>
