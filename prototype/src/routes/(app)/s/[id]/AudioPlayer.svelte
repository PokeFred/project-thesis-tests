<script lang="ts">
    let { path }: { path: string } = $props()

    let isPlaying: boolean = $state<boolean>(false)
    function toggle(): void {
        isPlaying = !isPlaying
    }
</script>

<div class="w-full h-auto text-primary bg-secondary rounded-full flex justify-start items-center p-2">
    <button onclick={toggle} class="w-8 h-8 text-secondary bg-primary rounded-full cursor-pointer active:scale-95">
        {#if isPlaying}
            <img src="/audio_play.svg" alt="Play Icon" />
        {:else}
            <img src="/audio_pause.svg" alt="Pause Icon" />
        {/if}
    </button>
    <div class="ml-4 font-bold">Hier der Text zum Anhören</div>
</div>
