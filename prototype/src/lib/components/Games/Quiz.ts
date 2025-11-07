import { QuizState } from "$lib/State.svelte"

export abstract class Quiz {
    private quizState: QuizState;

    constructor(quizState: QuizState) {
        this.quizState = quizState;
    }

    public get QuizState(): QuizState { return this.quizState; }
    public abstract get AnswersCorrect(): number;

    abstract reset(): void;

    protected complete(score: number): void {
        this.quizState.complete(score);
    }
}