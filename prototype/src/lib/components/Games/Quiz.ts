
export const enum POINTS {
    ANSWER_CORRECT = 3,
    ANSWER_FALSE = 0,
    NOT_ANSWERED = 0
}

export interface Quiz<GameOutput> {
    isComplete(): boolean;
    complete(): GameOutput;
    score(): number;
}