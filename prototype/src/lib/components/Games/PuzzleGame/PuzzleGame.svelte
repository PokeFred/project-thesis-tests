<script lang="ts">
    import Puzzle from "./Puzzle.svelte";
    import PuzzleSlot from "./PuzzleSlot.svelte";
    import PuzzlePieceContainer from "./PuzzlePieceContainer.svelte";

    let { quiz }: { quiz: Puzzle } = $props();
</script>

<div bind:this={quiz.Window.Window} class="puzzle-game inline-block relative select-none" style:width={`${quiz.Window.NaturalWidth}px`}>
    <figure class="m-0 relative max-w-fit">
        <!-- <figcaption></figcaption> -->
        <img bind:this={quiz.Window.Image} draggable="false" src={quiz.Background.src} alt="Puzzelspiel" bind:naturalWidth={quiz.Window.NaturalWidth} bind:naturalHeight={quiz.Window.NaturalHeight} bind:clientWidth={quiz.Window.ClientWidth} bind:clientHeight={quiz.Window.ClientHeight} />
    
        <svg viewBox={quiz.Background.viewbox} class="absolute top-0 left-0">
            {#each quiz.Pieces as piece}
                <PuzzleSlot {piece} />
            {/each}
        </svg>
    </figure>

    <PuzzlePieceContainer {quiz}/>
</div>