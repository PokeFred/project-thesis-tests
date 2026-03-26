<script lang="ts">
  import { sendTo } from "$utils/url";
    import type { GameData } from "."
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameData, setSubmitable: () => void } = $props()

    onMount(() => {
        //setSubmitable()
    })
</script>

<div class="font-bold">{data.title}</div>
<ul class="mb-8 list-disc pl-6">
    {#each data.points as element}
        <li>{element}</li>
    {/each}
</ul>

<button onclick={(): void => window.history.back()} class="w-full h-auto pl-6 text-left text-[20px] font-medium text-primary bg-secondary rounded-full py-2 cursor-pointer active:scale-95">Gehe zu den Reflexionsfragen</button>
