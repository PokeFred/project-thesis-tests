import { QuizState } from "$lib/State.svelte"

export abstract class Quiz {
    protected quizState: QuizState;

    constructor(quizState: QuizState) {
        this.quizState = quizState;
    }

    public get QuizState(): QuizState { return this.quizState; }
    public abstract get AnswersCorrect(): number;

    public abstract reset(): void;
    public abstract complete(): void;
}