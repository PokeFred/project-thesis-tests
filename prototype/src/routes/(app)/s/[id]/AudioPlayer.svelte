<script lang="ts">
  import { asset } from "$utils/url";

    let { path }: { path: string } = $props()

    let isPlaying: boolean = $state<boolean>(false)
    function toggle(): void {
        isPlaying = !isPlaying
    }
</script>

<audio controls class="hidden">
    <source src={asset(path)} type="audio/mpeg" />
</audio>

<div class="w-full h-auto text-primary bg-secondary rounded-full flex justify-start items-center p-2">
    <button onclick={toggle} class="w-8 h-8 text-secondary bg-primary rounded-full flex justify-center items-center cursor-pointer active:scale-95">
        {#if isPlaying}
            <svg viewBox="297 388 16 16" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-secondary">
                <polygon points="307 388 307 404 313 404 313 388"/>
                <polygon points="297 388 297 404 303 404 303 388"/>
            </svg>
        {:else}
            <svg viewBox="297 388 16 16" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-secondary">
                <polygon points="299.19 385.63 299.19 406.32 317.11 395.97"/>
            </svg>
        {/if}
    </button>
    <div class="ml-4 font-bold">Hier der Text zum Anhören</div>
</div>
