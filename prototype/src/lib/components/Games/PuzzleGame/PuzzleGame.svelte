<script lang="ts">
    import Puzzle from "./Puzzle.svelte";
    import PuzzleSlot from "./PuzzleSlot.svelte";
    import PuzzlePieceContainer from "./PuzzlePieceContainer.svelte";
    import Fullscreen from "$components/Fullscreen.svelte";
    import PuzzleHUD from "./PuzzleHUD.svelte";

    let { quiz }: { quiz: Puzzle } = $props();
</script>
<Fullscreen bind:fullscreen={quiz.Fullscreen}>
    <div bind:this={quiz.ImageWindow.Window} class="puzzle-game inline-block relative select-none">
        <figure class="m-0 relative max-w-fit">
            <!-- <figcaption></figcaption> -->
            <img bind:this={quiz.ImageWindow.Image} draggable="false" src={quiz.Background.src} alt="Puzzelspiel" bind:naturalWidth={quiz.ImageWindow.NaturalWidth} bind:naturalHeight={quiz.ImageWindow.NaturalHeight} bind:clientWidth={quiz.ImageWindow.ClientWidth} bind:clientHeight={quiz.ImageWindow.ClientHeight} />
        
            <svg viewBox={quiz.Background.viewbox} class="absolute top-0 left-0">
                {#each quiz.Pieces as piece}
                    <PuzzleSlot {piece} />
                {/each}
            </svg>
        </figure>
        <PuzzleHUD {quiz}>
            <PuzzlePieceContainer {quiz}/>
        </PuzzleHUD>
    </div>
</Fullscreen>