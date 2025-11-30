import type { GameOutput as GameOutputMC } from "$components/puzzle/multipleChoice";
import type { GameOutput as GameOutputDS } from "$components/puzzle/doubleSelect"

export const enum POINTS {
    ANSWER_CORRECT = 3,
    ANSWER_FALSE = 0,
    NOT_ANSWERED = 0
}

export interface Quiz {
    get AnswersCorrect(): number;

    complete(): GameOutputMC | GameOutputDS;
}