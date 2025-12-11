<script lang="ts">
    import "../app.css"
    import "@fontsource-variable/space-grotesk"
    import type { LayoutProps } from "./$types"
    import { goto, afterNavigate } from "$app/navigation"
    import type { AfterNavigate } from "@sveltejs/kit"
    import { getScore, isRunning, resetGame } from "$stores"
    import PageTransition from "$components/PageTransition.svelte"
    import Icon from "svelte-awesome"
    import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
    import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
    import { faStar } from "@fortawesome/free-solid-svg-icons/faStar"

    let { children }: LayoutProps = $props()

    let open: boolean = $state<boolean>(false)
    function toggle(): void {
        open = !open
    }

    afterNavigate((navigator: AfterNavigate): void => {
        open = false
    })

    function leave(): void {
        resetGame()
        goto("/")
    }
</script>

<div class="w-screen h-auto min-h-dvh bg-slate-950">
    <div class="mx-auto w-full max-w-lg h-auto min-h-dvh bg-primary">
        <div class="w-full h-auto text-secondary bg-primary border-b-2 border-secondary">
            <div class="w-full h-14 flex justify-between items-center px-4">
                <button onclick={(): Promise<void> => goto("/")} class="text-2xl font-bold text-left cursor-pointer">Einkaufsspuren</button>
                {#if isRunning()}
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
                {/if}
                <button onclick={toggle} class="w-14 h-14 cursor-pointer flex justify-center items-center">
                    <Icon data={open ? faXmark : faBars} class="w-8 h-8" />
                </button>
            </div>
            <div class="w-full {open ? "h-auto" : "h-0"} text-primary bg-secondary overflow-hidden">
                <div class="mx-auto w-full max-w-xl h-auto grid grid-cols-1 gap-4 p-4">
                    <button onclick={(): Promise<void> => goto("/")} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95">ANLEITUNG</button>
                    <hr class="border-1">
                    <button onclick={(): Promise<void> => goto("/")} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95">INFOS ZUR NUTZUNG</button>
                    <hr class="border-1">
                    <button onclick={(): Promise<void> => goto("/")} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95">SPIEL ERNEUT STARTEN</button>
                    <hr class="border-1">
                    <button onclick={(): Promise<void> => goto("/")} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95">SPIEL BEENDEN</button>
                    <hr class="border-1">
                    <button onclick={(): Promise<void> => goto("/")} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95">IMPRESSUM</button>
                    <hr class="border-1">
                    <button onclick={(): Promise<void> => goto("/")} class="w-full h-auto text-xl font-semibold text-left cursor-pointer px-2 py-1 hover:underline hover:opacity-75 active:scale-95">DATENSCHUTZ</button>
                </div>
            </div>
            <!-- <div class="w-full {open ? "h-auto" : "h-0"} border-t border-secondary overflow-hidden">
                <div class="mx-auto w-full max-w-xl h-auto grid grid-cols-1 gap-0 px-4 py-2">
                    <div class="text-base font-bold text-secondary underline">Links</div>
                    <button onclick={(): Promise<void> => goto("/")} class="text-base text-left text-secondary cursor-pointer">Willkommens-Seite</button>
                    <button onclick={(): Promise<void> => goto("/faq")} class="text-base text-left text-secondary cursor-pointer">FAQ</button>
                    <button onclick={(): Promise<void> => goto("/legal")} class="text-base text-left text-secondary cursor-pointer">Rechtliches</button>
                    <button onclick={(): Promise<void> => goto("/imprint")} class="text-base text-left text-secondary cursor-pointer">Impressum</button>
                    {#if isRunning()}
                        <div class="mt-2 text-base font-bold underline text-secondary">Spiel</div>
                        <button onclick={(): Promise<void> => goto("/s")} class="text-base text-left text-secondary cursor-pointer">Stationen</button>
                        <button onclick={(): Promise<void> => goto("/p")} class="text-base text-left text-secondary cursor-pointer">Rätsel</button>
                        <button onclick={leave} class="text-base text-left text-secondary cursor-pointer">Spiel beenden</button>
                    {/if}
                </div>
            </div> -->
        </div>
        <PageTransition>
            <div class="w-full h-auto text-secondary bg-primary p-4">
                {@render children()}
                <hr class="mt-3" />
                <div class="mt-3 w-full h-auto grid grid-cols-2 gap-2 items-start">
                    <div class="mx-auto w-fit h-auto grid grid-cols-1">
                        <div class="text-base font-bold underline text-center">Hilfe</div>
                        <button onclick={(): Promise<void> => goto("/faq")} class="w-full h-auto text-sm text-center cursor-pointer">FAQ</button>
                        <button onclick={(): Promise<void> => goto("/introduction")} class="w-full h-auto text-sm text-center cursor-pointer">Anleitung</button>
                    </div>
                    <div class="mx-auto w-fit h-auto grid grid-cols-1">
                        <div class="text-base font-bold underline text-center">Informationen</div>
                        <button onclick={(): Promise<void> => goto("/privacy")} class="w-full h-auto text-sm text-center cursor-pointer">Datenschutz</button>
                        <button onclick={(): Promise<void> => goto("/imprint")} class="w-full h-auto text-sm text-center cursor-pointer">Impressum</button>
                        <button onclick={(): Promise<void> => goto("/legal")} class="w-full h-auto text-sm text-center cursor-pointer">Rechtliches</button>
                    </div>
                </div>
                <hr class="mt-3" />
                <div class="mt-1 w-full h-auto text-sm font-semibold text-right text-secondary">Copyright &copy; 2025 <span class="text-green-500">???</span>. All rights reserved.</div>
            </div>
        </PageTransition>
    </div>
</div>
