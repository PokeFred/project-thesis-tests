import type { GameOutput as GameOutputMC } from "$components/Games/MultipleChoiceGame";
import type { GameOutput as GameOutputDS } from "$components/Games/MatchingGame"
import type { GameOutput as GameOutputP } from "$components/Games/PuzzleGame"
import type { GameOutput as GameOutputC } from "$components/Games/Cloze"
import type { GameOutput as GameOutputWG } from "$components/Games/WordGuessingGame"

export const enum POINTS {
    ANSWER_CORRECT = 1,
    ANSWER_FALSE = 0,
    NOT_ANSWERED = 0
}

export interface Quiz {
    complete(): GameOutputMC | GameOutputDS | GameOutputP | GameOutputC | GameOutputWG;
    score(): number;
}