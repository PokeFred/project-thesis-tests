<script lang="ts">
    import "../app.css"
    import "@fontsource-variable/nunito"
    import type { LayoutProps } from "./$types"
    import { goto } from "$app/navigation"
    import game from "$stores"
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

    function resetGame() {
        $game.isRunning = false
        $game.score = 0
        $game.puzzles = []
    }
</script>

<div class="mx-auto w-full max-w-xl h-auto border border-black overflow-hidden">
    <div class="w-full h-auto border-b border-black">
        <div class="w-full h-14 flex justify-between items-center px-4">
            <button onclick={() => goto("/")} class="text-2xl font-bold text-left cursor-pointer">Title</button>
            {#if $game.isRunning}
                <span class="text-xl">{$game.score} <Icon data={faBitcoin} class="w-5 h-5" /></span>
            {/if}
            <button onclick={toggle} class="w-14 h-14 cursor-pointer flex justify-center items-center">
                <Icon data={faBars} class="w-8 h-8" />
            </button>
        </div>
        <div class="w-full {open ? "h-auto" : "h-0"} overflow-hidden">
            <div class="w-full h-auto border-t border-black grid grid-cols-1 gap-2 p-4">
                {#if $game.isRunning}
                    <button onclick={() => goto("/app")} class="text-left cursor-pointer">Home</button>
                    <button onclick={() => goto("/app/stations")} class="text-left cursor-pointer">Stationen</button>
                        <button onclick={leave} class="text-left cursor-pointer">Verlassen</button>
                {/if}
                <button onclick={() => goto("/faq")} class="text-left cursor-pointer">FAQ</button>
                <button onclick={() => goto("/legal")} class="text-left cursor-pointer">Rechtliches</button>
                <button onclick={() => goto("/imprint")} class="text-left cursor-pointer">Impressum</button>
            </div>
        </div>
    </div>
    <PageTransition>
        <div class="w-full h-auto p-4">
            {@render children()}
            <div class="mt-3 w-full h-auto grid grid-cols-4 px-4">
                {#if $game.isRunning}
                    <div class="w-full h-auto grid grid-cols-1 gap-0">
                        <div class="font-bold underline text-left">Links</div>
                        <button onclick={() => goto("/app")} class="text-left cursor-pointer">Home</button>
                        <button onclick={() => goto("/app/stations")} class="text-left cursor-pointer">Stationen</button>
                        <button onclick={leave} class="text-left cursor-pointer">Verlassen</button>
                    </div>
                {/if}
                <div class="w-full h-auto grid grid-cols-1 gap-0">
                    <div class="font-bold underline text-left">Links</div>
                    <button onclick={() => goto("/faq")} class="text-left cursor-pointer">FAQ</button>
                    <button onclick={() => goto("/legal")} class="text-left cursor-pointer">Rechtliches</button>
                    <button onclick={() => goto("/imprint")} class="text-left cursor-pointer">Impressum</button>
                </div>
            </div>
            <div class="mt-3 w-full h-auto text-sm text-right">Copyright &copy; 2025 ???. All rights reserved.</div>
        </div>
    </PageTransition>
</div>
