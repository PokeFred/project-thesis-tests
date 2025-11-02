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

    let open: boolean = $state(false)
    function toggle(): void {
        open = !open
    }

    function leave(): void {
        resetGame()
        goto("/")
    }
</script>

<div class="mx-auto w-full max-w-xl h-auto border border-black overflow-hidden">
    <div class="w-full h-auto border-b border-black">
        <div class="w-full h-14 flex justify-between items-center px-4">
            <button onclick={() => goto("/")} class="text-2xl font-bold text-left cursor-pointer">Title</button>
            {#if $Game.isRunning}
                <span class="text-xl">{$Game.score} <Icon data={faBitcoin} class="w-5 h-5" /></span>
            {/if}
            <button onclick={toggle} class="w-14 h-14 cursor-pointer flex justify-center items-center">
                <Icon data={faBars} class="w-8 h-8" />
            </button>
        </div>
        <div class="w-full {open ? "h-auto" : "h-0"} overflow-hidden">
            <div class="w-full h-auto border-t border-black grid grid-cols-1 gap-0 px-4 py-2">
                <div class="text-sm font-bold underline">Links</div>
                <button onclick={(): Promise<void> => goto("/")} class="text-base text-left cursor-pointer">Willkommens-Seite</button>
                <button onclick={(): Promise<void> => goto("/faq")} class="text-base text-left cursor-pointer">FAQ</button>
                <button onclick={(): Promise<void> => goto("/legal")} class="text-base text-left cursor-pointer">Rechtliches</button>
                <button onclick={(): Promise<void> => goto("/imprint")} class="text-base text-left cursor-pointer">Impressum</button>
                {#if $Game.isRunning}
                    <div class="mt-2 text-sm font-bold underline">Spiel</div>
                    <button onclick={(): Promise<void> => goto("/app")} class="text-base text-left cursor-pointer">Startbildschirm</button>
                    <button onclick={(): Promise<void> => goto("/app/stations")} class="text-base text-left cursor-pointer">Stationen</button>
                    <button onclick={leave} class="text-base text-left cursor-pointer">Spiel beenden</button>
                {/if}
            </div>
        </div>
    </div>
    <PageTransition>
        <div class="w-full h-auto p-4">
            {@render children()}
            <div class="mt-3 w-full h-auto text-sm text-right">Copyright &copy; 2025 ???. All rights reserved.</div>
        </div>
    </PageTransition>
</div>
