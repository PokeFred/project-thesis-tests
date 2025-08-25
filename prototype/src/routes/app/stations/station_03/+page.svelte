<script lang="ts">
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
    import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
    import { faClock } from "@fortawesome/free-solid-svg-icons/faClock"
    import { faKey } from "@fortawesome/free-solid-svg-icons/faKey"
</script>

<div class="w-full h-auto flex justify-between items-center">
    <button onclick={(): Promise<void> => goto("/app/stations")} class="w-8 h-8 border border-black rounded-lg flex justify-center items-center cursor-pointer">
        <Icon data={faAngleLeft} />
    </button>
    <div class="text-lg underline">Station 03</div>
    <div></div>
</div>
<div class="mt-3 w-full h-auto text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus labore quo possimus veniam quos iusto ab provident non corporis dolor nemo molestiae perspiciatis natus, quia, maxime corrupti! Eos, voluptas accusamus.</div>

<div class="mt-3 w-full h-auto grid grid-cols-1 gap-2">
    <div class="w-full h-auto bg-green-500/15 border-2 border-green-500 rounded-xl grid grid-cols-[24px_auto] gap-4 cursor-default p-4">
        <Icon data={faCheck} class="w-6 h-6" />
        <div class="text-left">Aufgabe: ???</div>
    </div>
    <div class="w-full h-auto border-2 border-black rounded-xl grid grid-cols-[24px_auto] gap-4 cursor-default p-4">
        <Icon data={faClock} class="w-6 h-6" />
        <div class="text-left">Rätsel 01</div>
    </div>
    <div class="w-full h-auto border border-black rounded-xl grid grid-cols-[24px_auto] gap-4 cursor-default opacity-50 p-4">
        <Icon data={faKey} class="w-6 h-6" />
        <div class="text-left">Rätsel 02</div>
    </div>
    <div class="w-full h-auto border border-black rounded-xl grid grid-cols-[24px_auto] gap-4 cursor-default opacity-50 p-4">
        <Icon data={faKey} class="w-6 h-6" />
        <div class="text-left">Rätsel 03</div>
    </div>
</div>
