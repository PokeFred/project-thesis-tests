<script lang="ts">
    import type { PageProps } from "./$types"
    import { goto } from "$app/navigation"
    import Icon from "svelte-awesome"
    import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
  import SuccessBanner from "$components/banner/SuccessBanner.svelte";
  import WarningBanner from "$components/banner/WarningBanner.svelte";
  import ErrorBanner from "$components/banner/ErrorBanner.svelte";

    let { data }: PageProps = $props()

    function submit(): void {
        // goto(`/app/stations/${data.station}`)
    }
</script>

<div class="w-full h-auto text-secondary">
    <div class="w-full h-auto flex justify-between items-center px-6">
        <span class="text-lg font-semibold">{data.title}</span>
        <button onclick={() => goto(`/app/stations/${data.station}`)} class="w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
            <Icon data={faAngleLeft} class="w-6 h-6" />
        </button>
    </div>
    <br>
    <SuccessBanner message={"Hello World"} />
    <br>
    <WarningBanner message={"Hello World"} />
    <br>
    <ErrorBanner message={"Hello World"} />
    <br />
    <div class="mx-auto w-fit h-auto">
        <button onclick={submit} class="w-full h-auto text-primary bg-secondary rounded-xl cursor-pointer px-8 active:scale-95">Prüfe Location</button>
    </div>
</div>
