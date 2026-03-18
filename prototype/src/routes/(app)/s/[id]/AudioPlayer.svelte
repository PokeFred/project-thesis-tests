<script lang="ts">
    import { asset } from "$utils/url"
  import { onMount } from "svelte";

    let { path }: { path: string } = $props()

    let audio: HTMLAudioElement
    let isPlaying: boolean = $state<boolean>(false)
    let currentTime: number = $state<number>(0)
    let duration: number = $state<number>(0)

    function toggle(): void {
        isPlaying ? audio.pause() : audio.play()
        isPlaying = !isPlaying
    }

    function formatTime(seconds: number): string {
        const mins: number = Math.floor(seconds / 60);
        const secs: number = Math.floor(seconds % 60);

        return `${mins}:${secs.toString().padStart(2, "0")}`
    }

    onMount(() => {
        audio.addEventListener("load", (): number => duration = audio.duration)
        audio.addEventListener("play", (): boolean => isPlaying = true)
        audio.addEventListener("pause", (): boolean => isPlaying = false)

        audio.addEventListener("timeupdate", (): void => {
            currentTime = audio.currentTime
            duration = audio.duration || 0
        })

        audio.addEventListener("ended", (): void => {
            isPlaying = false;
            currentTime = 0;
        })
    })
</script>

<audio bind:this={audio} preload="metadata" class="hidden">
    <source src={asset(path)} type="audio/mpeg" />
</audio>

<button onclick={toggle} class="w-full h-auto text-primary bg-secondary rounded-full flex justify-start items-center cursor-pointer p-2 active:scale-95">
    <div class="w-8 h-8 text-secondary bg-primary rounded-full flex justify-center items-center">
        {#if isPlaying}
            <svg viewBox="297 388 16 16" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-secondary">
                <polygon points="307 388 307 404 313 404 313 388"/>
                <polygon points="297 388 297 404 303 404 303 388"/>
            </svg>
        {:else}
            <svg viewBox="297 388 20 16" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-secondary">
                <polygon points="299.19 385.63 299.19 406.32 317.11 395.97"/>
            </svg>
        {/if}
    </div>
    <div class="ml-4 font-bold">Hier der Text zum Anhören</div>
</button>
<div class="mt-2 ml-4">{formatTime(currentTime)}/{formatTime(duration)}</div>
