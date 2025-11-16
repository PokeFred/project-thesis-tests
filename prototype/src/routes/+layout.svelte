<script lang="ts">
    import "../app.css"
    import "@fontsource-variable/nunito"
    import type { LayoutProps } from "./$types"
    import { goto } from "$app/navigation"
    import Game, { resetGame } from "$stores/game"
    import PageTransition from "$components/PageTransition.svelte"
    import Icon from "svelte-awesome"
    import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
    import { faBitcoin } from "@fortawesome/free-brands-svg-icons/faBitcoin"

    let { children }: LayoutProps = $props()

    let open: boolean = $state<boolean>(false)
    function toggle(): void {
        open = !open
    }

    function leave(): void {
        resetGame()
        goto("/")
    }
</script>

<div class="w-screen h-auto min-h-dvh bg-slate-950">
    <div class="mx-auto w-full max-w-md h-auto min-h-dvh bg-primary">
        <div class="w-full h-auto text-secondary bg-primary border-b-2 border-secondary">
            <div class="w-full h-14 flex justify-between items-center px-4">
                <button onclick={() => goto("/")} class="text-3xl font-bold text-left cursor-pointer">Title</button>
                {#if $Game.isRunning}
                    <span class="text-xl">{$Game.score} <Icon data={faBitcoin} class="w-5 h-5" /></span>
                {/if}
                <button onclick={toggle} class="w-14 h-14 cursor-pointer flex justify-center items-center">
                    <Icon data={faBars} class="w-8 h-8" />
                </button>
            </div>
            <div class="w-full {open ? "h-auto" : "h-0"} border-t border-secondary overflow-hidden">
                <div class="mx-auto w-full max-w-xl h-auto grid grid-cols-1 gap-0 px-4 py-2">
                    <div class="text-base font-bold text-secondary underline">Links</div>
                    <button onclick={(): Promise<void> => goto("/")} class="text-base text-left text-secondary cursor-pointer">Willkommens-Seite</button>
                    <button onclick={(): Promise<void> => goto("/faq")} class="text-base text-left text-secondary cursor-pointer">FAQ</button>
                    <button onclick={(): Promise<void> => goto("/legal")} class="text-base text-left text-secondary cursor-pointer">Rechtliches</button>
                    <button onclick={(): Promise<void> => goto("/imprint")} class="text-base text-left text-secondary cursor-pointer">Impressum</button>
                    {#if $Game.isRunning}
                        <div class="mt-2 text-base font-bold underline text-secondary">Spiel</div>
                        <button onclick={(): Promise<void> => goto("/app")} class="text-base text-left text-secondary cursor-pointer">Startbildschirm</button>
                        <button onclick={(): Promise<void> => goto("/app/stations")} class="text-base text-left text-secondary cursor-pointer">Stationen</button>
                        <button onclick={leave} class="text-base text-left text-secondary cursor-pointer">Spiel beenden</button>
                    {/if}
                </div>
            </div>
        </div>
        <PageTransition>
            <div class="w-full h-auto text-secondary bg-primary p-4">
                {@render children()}
                <hr class="mt-3 my-1" />
                <div class="w-full h-auto text-sm font-semibold text-right text-secondary">Copyright &copy; 2025 ???. All rights reserved.</div>
            </div>
        </PageTransition>
    </div>
</div>
