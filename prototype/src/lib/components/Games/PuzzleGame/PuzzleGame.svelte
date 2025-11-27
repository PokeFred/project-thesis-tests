<script lang="ts">
    import { onMount } from "svelte";
    import PuzzleController, { type CutoutData, type PuzzleData, type SlotGroup } from "./PuzzleController.svelte";
    import type Puzzle from "./Puzzle.svelte";

    const { background, slotGroups, quiz }: { background: HTMLImageElement; slotGroups: SlotGroup[]; quiz: Puzzle } = $props();   

    let container: HTMLDivElement;
    let puzzleController: PuzzleController;
    onMount(async ()=>{        
        puzzleController = new PuzzleController(container, background, slotGroups, quiz);
    });
</script>

<!-- <div bind:this={container} class="fixed top-0 left-0 w-full h-full"></div> -->
<div class="border-2">
    <div bind:this={container} class="w-full h-[80vh]"></div>
</div>