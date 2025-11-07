// import { gameState } from "$lib/State.svelte";
// import Puzzle, { Piece, PuzzlePiece, type Background, type CutoutData, type PuzzleData } from "$components/Games/PuzzleGame/Puzzle.svelte";

// const path = "/Puzzle";
// // const path = "https://pokefred.github.io/project-thesis-tests/prototype/Puzzle";
// const backgroundSrc = "Image.png";
// const puzzleData: PuzzleData = await (await fetch(`${path}/cutouts.json`)).json();

// const background: Background = {src: `${path}/${backgroundSrc}`, viewbox: puzzleData.viewBox}
// const puzzlePieces: PuzzlePiece[] =  puzzleData.cutouts.map((cutout: CutoutData) => new PuzzlePiece(`${path}/${cutout.src}`, cutout.d));
// const pieces: Piece[] | undefined = puzzleData.noise?.map((noiseSrc: string) => new Piece(`${path}/${noiseSrc}`));

// export let quiz: Puzzle = new Puzzle(gameState.stationStates[3].quizStates[0], background, puzzlePieces, pieces);

import { gameState } from "$lib/State.svelte";
import Puzzle, { Slot, Piece, type Background, type CutoutData, type PuzzleData } from "$components/Games/PuzzleGame/Puzzle.svelte";

const path = "/Puzzle";
// const path = "https://pokefred.github.io/project-thesis-tests/prototype/Puzzle";
const backgroundSrc = "Image.png";
const puzzleData: PuzzleData = await (await fetch(`${path}/cutouts.json`)).json();

const background: Background = {src: `${path}/${backgroundSrc}`, viewbox: puzzleData.viewBox}

let pieces: Piece[] = new Array();
let noise: Piece[] = new Array();
const slots: Slot[] = puzzleData.cutouts.map((cutout: CutoutData)=> {
    const slot: Slot = new Slot(cutout.d);
    pieces.push(new Piece(`${path}/${cutout.src}`, slot, true));
    cutout.noise?.forEach((noiseSrc: string)=>{
        noise.push(new Piece(`${path}/${noiseSrc}`, slot, false));
    });
    return slot;
});

export const quiz: Puzzle = new Puzzle(gameState.stationStates[3].quizStates[0], background, slots, pieces, noise);