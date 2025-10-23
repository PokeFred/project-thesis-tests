// TODO: Puzzelteile/Antworten sollen (evtl) nicht bleiben wenn man rätsel neu startet

import { gameState } from "$lib/State.svelte";
import Puzzle, { Piece, PuzzlePiece, type Background, type CutoutData, type PuzzleData } from "$components/Games/PuzzleGame/Puzzle.svelte";

const path = "/Puzzle";
// const path = "https://pokefred.github.io/project-thesis-tests/prototype/Puzzle";
const backgroundSrc = "Image.png";
const puzzleData: PuzzleData = await (await fetch(`${path}/cutouts.json`)).json();

const background: Background = {src: `${path}/${backgroundSrc}`, viewbox: puzzleData.viewBox}
const puzzlePieces: PuzzlePiece[] =  puzzleData.cutouts.map((cutout: CutoutData) => new PuzzlePiece(`${path}/${cutout.src}`, cutout.d));
const pieces: Piece[] | undefined = puzzleData.noise?.map((noiseSrc: string) => new Piece(`${path}/${noiseSrc}`));

export let quiz: Puzzle = new Puzzle(gameState.stationStates[3].quizStates[0], background, puzzlePieces, pieces);