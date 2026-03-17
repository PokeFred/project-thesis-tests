<script lang="ts">
    import Fullscreen from "$components/Fullscreen.svelte"
    import AudioPlayer from "./AudioPlayer.svelte"
    import { Icon } from "svelte-awesome"
    import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
  import { asset } from "$utils/url";

    let { question, answers, audio }: { question: string, answers: any[], audio: string | null } = $props()
    let open: boolean = $state<boolean>(false)

    function close(): void {
        open = false
    }
</script>

<details bind:open={open}>
    <summary class="w-full h-20 flex  justify-between items-center cursor-pointer px-2">
        <span class="font-bold text-[18px] leading-6">{question}</span>
        <div class="ml-5">
            {#if open}
                <svg class="object-contain w-8 h-fit shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <rect x="0" y="47" width="100" height="6" class="fill-secondary"/>
                </svg>
            {:else}
                <svg class="object-contain w-8 h-fit shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <rect x="0" y="47" width="100" height="6" class="fill-secondary"/>
                    <rect x="47" y="0" width="6" height="100" class="fill-secondary"/>
                </svg>
            {/if}
        </div>
    </summary>
    {#if audio !== null}
        <div class="mb-7.5 px-2 text-[18px] leading-6">
            <AudioPlayer path={audio} />
        </div>
    {/if}
    {#each answers as element}
        <div class="mb-7.5 px-2 text-[18px] leading-6">
            {#if element.type === "subtitle"}
                <div class="font-medium">{element.text}</div>
            {:else if element.type === "paragraph"}
                <div class="font-medium">{element.text}</div>
            {:else}
                <figure class="my-10 mx-auto">
                    <Fullscreen>
                        <img src={asset(element.src)} alt={element.alt} />
                    </Fullscreen>
                    {#if element.caption}
                        <figcaption class="flex flex-col mx-4.5 mt-3 font-medium">
                            <span class="mb-2 text-[16px] leading-4">{@html element?.caption}</span>
                            <span class="uppercase text-[12px] leading-4.5 tracking-[0.72pt]">{element?.src}</span>
                        </figcaption>
                    {/if}
                </figure>
            {/if}
        </div>
    {/each}
    <button class="block w-8 h-8 ml-auto mr-2.25 my-8.75 bg-secondary rounded-full cursor-pointer touch-manipulation" onclick={close}>
        <Icon data={faXmark} class="w-6/12 h-auto text-primary" />
    </button>
</details>
