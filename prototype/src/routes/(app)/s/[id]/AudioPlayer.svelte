<script lang="ts">
  import { asset } from "$utils/url";

    let { path }: { path: string } = $props()

    let isPlaying: boolean = $state<boolean>(false)
    function toggle(): void {
        isPlaying = !isPlaying
    }
</script>

<audio controls autoplay class="">
    <source src={asset(path)} type="audio/mpeg" />
</audio>

<div class="w-full h-auto text-primary bg-secondary rounded-full flex justify-start items-center p-2">
    <button onclick={toggle} class="w-8 h-8 text-secondary bg-primary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
        {#if isPlaying}
            <img src="/audio_play.svg" alt="Play Icon" class="w-4 h-4 text-secondary" />
        {:else}
            <img src="/audio_pause.svg" alt="Pause Icon" class="w-4 h-4 text-secondary" />
        {/if}
    </button>
    <div class="ml-4 font-bold">Hier der Text zum Anhören</div>
</div>
