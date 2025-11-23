import { gameState } from "$lib/State.svelte";
import Puzzle, { Slot, Piece } from "$components/Games/PuzzleGame/Puzzle.svelte";
import type { Background, CutoutData, PuzzleData, SlotGroup } from "$components/Games/PuzzleGame/PuzzleController.svelte";
import PuzzleController from "$components/Games/PuzzleGame/PuzzleController.svelte";

const path = "/station_04/raetsel_00/game";
const backgroundSrc = "Hintergrund.png";
const puzzleData: PuzzleData = await (await fetch(`${path}/cutouts.json`)).json();

export const quiz: Puzzle = new Puzzle([]); // not final

// export const puzzleController: PuzzleController = new PuzzleController();

// const background: Background = {src: `${path}/${backgroundSrc}`, viewbox: puzzleData.viewBox}

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

// export const quiz: Puzzle = new Puzzle(gameState.stationStates[3].quizStates[0], background, slots, pieces, noise);