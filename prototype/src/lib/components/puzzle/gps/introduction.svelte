<script lang="ts">
    import Icon from "svelte-awesome"
    import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse"
    import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
    import { faTrain } from "@fortawesome/free-solid-svg-icons/faTrain"
    import { faBus } from "@fortawesome/free-solid-svg-icons/faBus"
    import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus"
    import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"
    import type { Introduction } from "./index"
    import Bus from "./Bus.png"
    import Train from "./Train.png"
    import Map from "./Map.png"

    let { data }: { data: Introduction } = $props()
    let open: boolean = $state<boolean>(false)
</script>

<div class="mt-3 w-full h-auto text-lg text-left px-3">{data.text}</div>
<div class="mt-3 w-full h-auto text-lg text-left px-3">Gehe zu:</div>
<div class="mt-3 w-full h-auto text-lg text-left px-3">{data.informations.adress}</div>
<div class="my-3 w-full h-auto grid grid-cols-1 gap-3">
    <hr class="border">
    <details bind:open={open}>
        <summary class="w-full h-auto flex justify-between items-center cursor-pointer px-3">
            <span class="text-lg font-bold">Öffentlicher Verkehr & Koordinaten</span>
            <Icon data={open ? faMinus : faPlus} />
        </summary>
        <div class="w-full h-auto grid grid-cols-1 gap-4 px-6 pt-3">
            <hr class="w-1/3 border" />
            <div class="w-full h-auto grid grid-cols-1 gap-0">
                <div class="mb-2 w-full h-auto flex justify-start items-center">
                    <img src={Bus} alt="" class="mr-3 w-6 h-6" />
                    <span class="text-lg font-bold">Bus</span>
                </div>
                <div>{data.informations.transit.bus.lines.join("/")}</div>
                <div>Haltestelle: {data.informations.transit.bus.station}</div>
            </div>
            <hr class="w-1/3 border" />
            <div class="w-full h-auto grid grid-cols-1 gap-0">
                <div class="mb-2 w-full h-auto flex justify-start items-center">
                    <img src={Train} alt="" class="mr-3 w-6 h-6" />
                    <span class="text-lg font-bold">U-Bahn</span>
                </div>
                <div>{data.informations.transit.subway.lines.join("/")}</div>
                <div>Haltestelle: {data.informations.transit.subway.station}</div>
            </div>
            <hr class="w-1/3 border" />
            <div class="w-full h-auto grid grid-cols-1 gap-0">
                <div class="mb-2 w-full h-auto flex justify-start items-center">
                    <img src={Map} alt="" class="mr-3 w-6 h-6" />
                    <span class="text-lg font-bold">Koordinaten</span>
                </div>
                <div>{data.informations.coordinates}</div>
            </div>
        </div>
    </details>
    <hr class="border">
</div>
