import { gameState } from "$lib/State.svelte";
import Puzzle, { Slot, Piece } from "$components/Games/PuzzleGame/Puzzle.svelte";

const path = "/station_01/raetsel_02/game";
// const path = "https://pokefred.github.io/project-thesis-tests/prototype/custom_shape_test";
const backgroundSrc = "Anziehbild.png";
// const puzzleData: PuzzleData = await (await fetch(`${path}/cutouts.json`)).json();

// const background: Background = {src: `${path}/${backgroundSrc}`, viewbox: puzzleData.viewBox}

export const quiz: Quiz = new Puzzle([]); // NOT FINAL

// let pieces: Piece[] = new Array();
// let noise: Piece[] = new Array();
// const slots: Slot[] = puzzleData.cutouts.map((cutout: CutoutData)=> {
//     const slot: Slot = new Slot(cutout.d);
//     pieces.push(new Piece(`${path}/${cutout.src}`, slot, true));
//     cutout.noise?.forEach((noiseSrc: string)=>{
//         noise.push(new Piece(`${path}/${noiseSrc}`, slot, false));
//     });
//     return slot;
// });

// export const quiz: Puzzle = new Puzzle(gameState.stationStates[3].quizStates[1], background, slots, pieces, noise);