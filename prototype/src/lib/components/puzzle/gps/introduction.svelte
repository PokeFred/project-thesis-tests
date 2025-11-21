<script lang="ts">
    import Icon from "svelte-awesome"
    import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse"
    import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
    import { faTrain } from "@fortawesome/free-solid-svg-icons/faTrain"
    import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus"
    import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"
    import type { Introduction } from "./index"

    let { data }: { data: Introduction } = $props()
    let open_1: boolean = $state<boolean>(false)
    let open_2: boolean = $state<boolean>(false)
    let open_3: boolean = $state<boolean>(false)

    function openMaps(): void {
        window.open(`geo:${data.informations.coordinates.lat},${data.informations.coordinates.lon}`, "_blank")
    }
</script>

<div class="mt-3 w-full h-auto text-lg font-bold text-left px-3">{data.text}</div>
<div class="mb-3 w-full h-auto grid grid-cols-1 gap-4">
    <hr class="border-2">
    <details bind:open={open_1}>
        <summary class="w-full h-auto flex justify-between items-center cursor-pointer px-3">
            <span class="font-bold"><Icon data={faHouse} /> Adresse</span>
            <Icon data={open_1 ? faMinus : faPlus} />
        </summary>
        <div class="px-6 pt-1">{data.informations.adress}</div>
    </details>
    <hr class="border-2">
    <details bind:open={open_2}>
        <summary class="w-full h-auto flex justify-between items-center cursor-pointer px-3">
            <span class="font-bold"><Icon data={faTrain} /> Öffentliche Verkehrsmittel (Zug/U-Bahn/Bus)</span>
            <Icon data={open_2 ? faMinus : faPlus} />
        </summary>
        <div class="px-10 pt-1">
            <ul class="list-disc">
                {#each data.informations.transit as element}
                    <li>{element}</li>
                {/each}
            </ul>
        </div>
    </details>
    <hr class="border-2">
    <details bind:open={open_3}>
        <summary class="w-full h-auto flex justify-between items-center cursor-pointer px-3">
            <span class="font-bold"><Icon data={faLocationDot} /> Koordinaten</span>
            <Icon data={open_3 ? faMinus : faPlus} />
        </summary>
        <div class="px-6 pt-1">
            <div>{data.informations.coordinates.text}</div>
            <button onclick={openMaps} class="mt-1 w-fit h-auto font-semibold text-primary bg-secondary rounded-xl cursor-pointer px-6 active:scale-95">Öffnen</button>
        </div>
    </details>
    <hr class="border-2">
</div>
