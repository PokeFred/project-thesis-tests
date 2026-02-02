<script lang="ts">
    import "../app.css"
    import "@fontsource-variable/space-grotesk"
    import type { LayoutProps } from "./$types"
    import { goto, afterNavigate } from "$app/navigation"
    import type { AfterNavigate } from "@sveltejs/kit"
    import { getScore, isRunning, restartGame, stopGame } from "$stores"
    import PageTransition from "$components/PageTransition.svelte"
    import Icon from "svelte-awesome"
    import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
    import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
    import { faStar } from "@fortawesome/free-solid-svg-icons/faStar"
    import { page } from "$app/state"
    import StopModal from "$components/modals/StopModal.svelte";
    import IntroductionModal from "$components/modals/IntroductionModal.svelte"
    import InformationsModal from "$components/modals/InformationsModal.svelte"

    let { children }: LayoutProps = $props()

    let open: boolean = $state<boolean>(false)
    function toggle(): void {
        open = !open
    }

    afterNavigate((navigator: AfterNavigate): void => {
        open = false
    })

    let introductionModal: IntroductionModal
    let informationsModal: InformationsModal
    let stopModal: StopModal

    function restart(): void {
        restartGame()
        window.location.href = "/s"
    }

    function stop(): void {
        stopGame()
        window.location.href = "/"
    }
</script>

<IntroductionModal bind:this={introductionModal} />
<InformationsModal bind:this={informationsModal} />
<StopModal bind:this={stopModal} onConfirm={stop} />

<div class="w-screen h-auto min-h-dvh bg-slate-950">
    <div class="mx-auto w-full max-w-lg h-auto min-h-dvh bg-primary grid grid-cols-1 {open ? "grid-rows-[1fr_auto]" : "grid-rows-[auto_1fr]"}">
        <div class="w-full h-auto text-secondary bg-primary border-b-2 border-secondary grid grid-cols-1 grid-rows-[auto_1fr]">
            <div class="w-full h-14 flex justify-between items-center px-4">
                <button onclick={(): Promise<void> => isRunning() ? goto("/s") : goto("/")} class="text-2xl font-bold text-left cursor-pointer">Einkaufsspuren</button>
                <!-- {#if isRunning()}
                    <div class="w-auto h-auto flex justify-center items-center">
                        <span class="text-xl font-bold">{getScore()}</span>
                        <div class="ml-2 w-auto h-auto border-2 border-secondary rounded-lg  p-1">
                            <div class="mx-auto w-14 h-auto grid grid-cols-3 gap-1">
                                <Icon data={faStar} class="w-4 h-4" />
                                <Icon data={faStar} class="w-4 h-4" />
                                <Icon data={faStar} class="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                {/if} -->
                <button onclick={toggle} class="w-14 h-14 cursor-pointer flex justify-center items-center">
                    <Icon data={open ? faXmark : faBars} class="w-8 h-8" />
                </button>
            </div>
            <div class="w-full {open ? "h-auto" : "h-0"} text-primary bg-secondary overflow-hidden">
                <div class="mx-auto w-full max-w-xl h-auto grid grid-cols-1 gap-4 p-4">
                    {#if isRunning()}
                        <button onclick={(): Promise<void> => goto("/s")} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95">STATIONEN</button>
                        <hr class="border">
                        <button onclick={(): Promise<void> => goto("/p")} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95 text-green-500">RÄTSEL</button>
                        <hr class="border">
                    {/if}
                    <button onclick={(): void => introductionModal.openModal()} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95">ANLEITUNG</button>
                    <hr class="border">
                    <button onclick={(): void => informationsModal.openModal()} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95">INFOS ZUR NUTZUNG</button>
                    <hr class="border">
                    {#if isRunning()}
                        <button onclick={(): void => stopModal.openModal()} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95">SPIEL BEENDEN</button>
                        <hr class="border">
                    {/if}
                    <button onclick={(): Promise<void> => goto("/imprint")} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95">IMPRESSUM</button>
                    <hr class="border">
                    <button onclick={(): Promise<void> => goto("/privacy")} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95">DATENSCHUTZ</button>
                </div>
            </div>
        </div>
        <PageTransition>
            <div class="w-full h-full text-primary bg-secondary grid grid-cols-1 grid-rows-[1fr_auto]">
                <div class="w-full h-full {(new RegExp("\/(s|p)+\/[0-9]+[0-9]*\/")).test(page.url.pathname) ? "text-secondary bg-primary" : "text-primary bg-secondary"} p-4 {open ? "hidden" : ""}">
                    {@render children()}
                </div>
                <div class="w-full h-auto text-secondary bg-primary grid grid-cols-1 gap-2 px-2">
                    <div class="w-full h-auto grid grid-cols-2 gap-4 px-2">
                        <button onclick={(): Promise<void> => goto("/imprint")} class="mr-auto w-fit h-auto text-base font-semibold text-left cursor-pointer px-4 py-2 hover:underline hover:opacity-75 active:scale-95">Impressum</button>
                        <button onclick={(): Promise<void> => goto("/privacy")} class="ml-auto w-fit h-auto text-base font-semibold text-right cursor-pointer px-4 py-2 hover:underline hover:opacity-75 active:scale-95">Datenschutz</button>
                    </div>
                    <!--
                    <hr />
                    <div class="w-full h-auto grid grid-cols-2 gap-4 px-2">
                        <div class="w-full h-auto text-sm font-semibold text-left">Version: v0.0.1</div>
                        <div class="w-full h-auto text-sm font-semibold text-right">Copyright &copy; 2025 <span class="text-green-500">???</span>. All rights reserved.</div>
                    </div>
                    -->
                </div>
            </div>
        </PageTransition>
    </div>
</div>
