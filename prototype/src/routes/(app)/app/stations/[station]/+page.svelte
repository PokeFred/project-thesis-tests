<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
    import { faClock } from "@fortawesome/free-solid-svg-icons/faClock"
    import { faLock } from "@fortawesome/free-solid-svg-icons/faLock"

    let { data }: PageProps = $props()
</script>

<button onclick={() => goto("/app/stations")} class="mb-3 w-8 h-8 text-black border border-black rounded-lg flex justify-center items-center cursor-pointer">
    <Icon data={faAngleLeft} class="w-6 h-6" />
</button>
<div class="w-full h-auto text-black border border-black rounded-xl p-4">
    <div class="w-full h-auto text-lg underline text-center">{data.title}</div>
    <div class="w-full h-auto text-lg font-semibold underline text-center">Rätsel</div>
    <div class="mt-3 w-full h-auto flex justify-center items-center">
        <div class="text-sm shrink-0">Geschafft:</div>
        <div class="mx-3 w-full h-auto bg-gray-500/25 rounded-xl">
            <div class="h-4 bg-blue-500 rounded-xl" style="width: {data.score.current * 100 / data.score.max}%;"></div>
        </div>
        <div class="text-sm shrink-0">{data.score.current}/{data.score.max}</div>
    </div>
    <div class="mt-4 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.puzzles as puzzle}
            {#if puzzle.state === "DONE"}
                <div class="w-full h-auto bg-green-500/15 border-2 border-green-500 rounded-xl grid grid-cols-[24px_auto_48px] gap-4 cursor-default p-4">
                    <Icon data={faCheck} class="w-6 h-6" />
                    <span class="text-left">{puzzle.name}</span>
                    <span class="text-right">{puzzle.score.current}<span class="mx-0.5">/</span>{puzzle.score.max}</span>
                </div>
            {/if}
            {#if puzzle.state === "OPEN"}
                <button onclick={(): Promise<void> => goto(`/app/stations/${data.identifier}/${puzzle.identifier}`)} class="w-full h-auto border border-black rounded-xl grid grid-cols-[24px_auto_48px] gap-4 cursor-pointer p-4">
                    <Icon data={faClock} class="w-6 h-6" />
                    <span class="text-left">{puzzle.name}</span>
                    <span class="text-right">{puzzle.score.current}<span class="mx-0.5">/</span>{puzzle.score.max}</span>
                </button>
            {/if}
            {#if puzzle.state === "LOCKED"}
                <div class="w-full h-auto border border-black rounded-xl grid grid-cols-[24px_auto_48px] gap-4 cursor-default opacity-50 p-4">
                    <Icon data={faLock} class="w-6 h-6" />
                    <span class="text-left">{puzzle.name}</span>
                    <span class="text-right">{puzzle.score.current}<span class="mx-0.5">/</span>{puzzle.score.max}</span>
                </div>
            {/if}
        {/each}
    </div>
    <br />
    <div class="w-full h-auto text-lg font-semibold underline text-center">Literatur</div>
    {#each data.chapters as chapter}
        <details>
            <summary class="cursor-pointer">{chapter.title}</summary>
            {#each chapter.content as element}
                {#if element.type === "title"}
                    <div class="font-bold p-2">{element.content}</div>
                {/if}
                {#if element.type === "paragraph"}
                    <p class="p-2">{element.content}</p>
                {/if}
                {#if element.type === "image"}
                    <div class="p-2">
                        <img src="{element.src}" alt="{element.alt}" />
                        <small>{element.caption}</small>
                    </div>
                {/if}
            {/each}
        </details>
    {/each}
</div>
