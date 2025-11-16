<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp"
    import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
    import { faClock } from "@fortawesome/free-solid-svg-icons/faClock"
    import { faLock } from "@fortawesome/free-solid-svg-icons/faLock"
    import Accordion from "$components/accordions/Accordion.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">{data.stitle}</span>
        <button onclick={() => goto("/app/stations")} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faAngleLeft} class="w-6 h-6" />
        </button>
    </div>
    <div class="mt-3 w-full h-6 grid grid-cols-[65px_auto_40px] gap-2 px-4">
        <div class="my-auto text-sm text-left"><span>Geschafft:</span></div>
        <div class="my-auto w-full h-fit bg-secondary rounded-xl p-1">
            <div class="w-[{data.completion}%] h-4 bg-primary rounded-xl"></div>
        </div>
        <div class="my-auto text-sm text-right">{data.completion}%</div>
    </div>
    <div class="mt-2 w-full h-auto grid grid-cols-1 gap-2">
        {#each data.puzzles as puzzle}
            <button onclick={() => goto(`/app/stations/${data.identifier}/${puzzle.identifier}/introduction`)} class="w-full h-auto text-primary bg-secondary rounded-full grid grid-cols-[auto_50px_80px] gap-4 cursor-pointer px-6 py-2 active:scale-95">
                <span class="text-lg font-bold text-left">{puzzle.name}</span>
                <span class="text-lg font-bold text-right">{puzzle.completion}%</span>
                <div class="w-full h-7 flex justify-center items-center">
                    <div class="w-full h-fit bg-primary border rounded-full p-[1px]">
                        <div class="w-[{puzzle.completion}%] h-4 bg-secondary border rounded-full"></div>
                    </div>
                </div>
            </button>
        {/each}
    </div>
    <div class="mt-8"></div>
    <Accordion title={data.title} data={data.chapters} />
    <button onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })} class="mt-2 ml-auto w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
        <Icon data={faAngleUp} class="w-6 h-6" />
    </button>
</div>
