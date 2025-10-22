import { QuizState } from "../State.svelte"

export abstract class Quiz {
    private quizState: QuizState;

    constructor(quizState: QuizState) {
        this.quizState = quizState;
    }

    public getQuizState(): QuizState {
        return this.quizState;
    }

    protected complete(score: number): void {
        this.quizState.complete(score);
    }
}