<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import GpsIntroduction from "$components/puzzle/gps/introduction.svelte"

    let { data }: PageProps = $props()
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">{data.title}</span>
        <button onclick={() => goto(`/app/stations/${data.station}`)} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faAngleLeft} class="w-6 h-6" />
        </button>
    </div>
    <GpsIntroduction data={{
        text: "Begebe dich zum Alten Markt, um diese Station freizuschalten",
        informations: {
            adress: "Hansastraße 3, 44137 Dortmund",
            transit: ["400/453/460 (Dortmund Hbf S U)", "U41/U43/U44/U45/U47/U49 (Kampstraße)"],
            coordinates: "N 51° 31.008' E 007° 27.774'"
        }
    }} />
    <div class="mx-auto w-fit h-auto">
        <button onclick={() => goto(`/app/stations/${data.station}/${data.identifier}/result`)} class="w-full h-auto text-primary bg-secondary rounded-xl cursor-pointer px-8 active:scale-95">Rätsel starten</button>
    </div>
</div>
