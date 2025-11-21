<script lang="ts">
  import { onMount } from "svelte";

    let { submitable }: { submitable: () => void} = $props()

    onMount((): void => {
        submitable()
    })
</script>

<div></div>
