<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"

    let { data }: PageProps = $props()
</script>

<button onclick={() => goto("/app/stations")} class="mb-3 w-8 h-8 text-black border border-black rounded-lg flex justify-center items-center cursor-pointer">
    <Icon data={faAngleLeft} class="w-6 h-6" />
</button>
<div class="w-full h-auto text-black border border-black rounded-xl p-4">
    <div class="w-full h-auto text-lg underline text-center">{data.title}</div>
    <div class="mt-3 w-full h-auto flex justify-center items-center">
        <div class="mr-3 text-sm shrink-0">Geschafft:</div>
        <div class="w-full h-auto bg-gray-500/25 rounded-xl">
            <div class="w-[{data.completion}%] h-4 bg-blue-500 rounded-xl"></div>
        </div>
    </div>
    {#each data.chapters as chapter}
        <details>
            <summary>{chapter.title}</summary>
            {#each chapter.content as element}
                {#if element.type === "paragraph"}
                    <p class="p-1">{element.text}</p>
                {/if}
            {/each}
        </details>
    {/each}
</div>
