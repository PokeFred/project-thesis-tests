<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import Game from "$stores/game"

    let { data }: PageProps = $props()

    function submit(): void {
        $Game.puzzles.push({ identifier: data.identifier, score: data.score, state: "DONE" })
        goto(`/app/stations/${data.station}`)
    }
</script>

<button onclick={() => goto(`/app/stations/${data.station}`)} class="mb-3 w-8 h-8 text-black border border-black rounded-lg flex justify-center items-center cursor-pointer">
    <Icon data={faAngleLeft} class="w-6 h-6" />
</button>
<div class="w-full h-auto text-black border border-black rounded-xl p-4">
    <div class="w-full h-auto text-lg underline text-center">{data.title}</div>
    <div class="mt-4 mx-auto w-fit h-auto">
        <button onclick={submit} class="w-full h-auto text-xl text-white bg-blue-500 rounded-xl cursor-pointer px-8">Complete</button>
    </div>
</div>
