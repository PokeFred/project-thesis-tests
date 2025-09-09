export const enum POINTS {
    ANSWER_CORRECT = 10,
    ANSWER_FALSE = -5,
    HINT_UNLOCKED = -3,
}

class Score {
    private score: number;
    private lastGained: number; // TODO: Bekommene Punkte pro Rätsel speichern. Rätsel State Speichern in einem anderen Objekt.

    constructor() {
        this.score = $state(0);
        this.lastGained = $state(0);
    }

    public getScore(): number {
        return this.score;
    }

    public getLastGained(): number {
        return this.lastGained;
    }

    public addScore(score: number): void {
        this.score += score;
        this.lastGained = score;
    }

    // public setScore(score: number): void {
    //     this.score = score;
    // }
}

export let score: Score = new Score();