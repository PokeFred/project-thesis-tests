import type { GameOutput as GameOutputMC } from "$components/Games/MultipleChoiceGame";
import type { GameOutput as GameOutputDS } from "$components/Games/MatchingGame"
import type { GameOutput as GameOutputP } from "$components/Games/PuzzleGame"

export const enum POINTS {
    ANSWER_CORRECT = 3,
    ANSWER_FALSE = 0,
    NOT_ANSWERED = 0
}

export interface Quiz {
    complete(): GameOutputMC | GameOutputDS | GameOutputP;
    score(): number;
}