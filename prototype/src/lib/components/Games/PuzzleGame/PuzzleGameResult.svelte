<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte";
    import type { Result } from ".";

    const { result }: { result: Result } = $props();
</script>

<div class="-mx-4">
    <div class="w-full h-auto">
        <figure>
            <Fullscreen>
                <img src={`${result.path}/Background.png`} alt={result.alt} class="justify-self-center align-middle">
            </Fullscreen>
            <figcaption></figcaption>
        </figure>
    </div>
</div>

<p class="flex justify-between items-center h-8 px-8 -mx-4 mt-7 bg-secondary text-primary font-bold">
    <span>Du hast ... von ... Teilen richtig</span>
    <span>.../...</span>
</p>