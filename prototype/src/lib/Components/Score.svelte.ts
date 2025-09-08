export const enum POINTS {
    ANSWER_CORRECT = 10,
    ANSWER_FALSE = -5,
    HINT_UNLOCKED = -3,
}

class Score {
    private score: number;

    constructor() {
        this.score = $state(0);
    }

    public getScore(): number {
        return this.score;
    }

    public setScore(score: number): void {
        this.score = score;
    }
}

export let score: Score = new Score();