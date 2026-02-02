<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte";

    type IntroductionData = {
        tag: "title",
        text: string
    } | {
        tag: "p",
        text: string
    } | {
        tag: "img",
        src: string,
        alt: string,
        caption?: {
            caption: string,
            src: string
        }
    }

    const { data }: { data: IntroductionData[] } = $props();
</script>

<div class="w-full h-auto px-2 mb-10">
    {#each data as content}
        {#if content.tag === "title"}
            <p class="mb-5 font-bold text-[20px] leading-6">{content.text}</p>
        {:else if content.tag === "p"}
            <p class="mb-7 font-medium text-[18px] leading-6">{content.text}</p>
        {:else if content.tag === "img"}
            <figure class="my-10 -mx-4">
                <div class="-mx-2">
                    <Fullscreen>
                        <img src={content.src} alt={content.alt}>
                    </Fullscreen>
                </div>
                {#if content.caption}
                    <figcaption class="flex flex-col mx-4.5 mt-3 font-medium">
                        <span class="mb-2 text-[16px] leading-4.5">{content.caption?.caption}</span>
                        <span class="uppercase text-[12px] leading-4.5 tracking-[0.72pt]">{content.caption?.src}</span>
                    </figcaption>
                {/if}
            </figure>
        {/if}
    {/each}
</div>
