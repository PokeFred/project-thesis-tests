<script lang="ts">
    import type { GameData, SavingData } from "."
    import GameComponent from "$components/Games/Canvas/PuzzleGame/PuzzleGame.svelte"
    import { onMount } from "svelte"
    import Fullscreen from "$components/Fullscreen.svelte";

    let { data, setSubmitable, skipIntroduction = $bindable() }: { data: GameData, setSubmitable: () => void, skipIntroduction?: () => void } = $props()

    let introduction: boolean = $state(data.introduction ?? false);
    if (data.introduction) {
        skipIntroduction = () => { 
            introduction = false;
            window.scrollTo({ top: 0 });
        }
    }

    let game: GameComponent
    export function getSubmitData(): SavingData { return game.getSubmitData() }
    export function getSubmitScore(): number { return game.getSubmitScore() }

    onMount((): void => {
        setSubmitable()
    })
</script>

{#if !introduction}
    <GameComponent bind:this={game} input={data} />
{/if}

{#if introduction}
    <figure>
        <Fullscreen>
            <img src={`${data.path}/Background.png`} alt={data.caption}>
        </Fullscreen>
        <figcaption>{data.caption}</figcaption>
    </figure>
{/if}
