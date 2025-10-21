import { Quiz } from "$components/Quiz";
import { type QuizState, POINTS } from "$lib/State.svelte";

export type Answer = {
    readonly answer: string;
    readonly correct: boolean;
}

export default class MultipleChoice extends Quiz {
    public readonly options: Answer[];
    public selected: boolean[];

    constructor(quizState: QuizState, options: Answer[]) {
        super(quizState);
        this.options = options;
        this.selected = Array<boolean>(options.length).fill(false);
    }

    public complete(): void {
        let sum: number = 0;
        for(let i = 0; i < this.options.length; i++) {
            if(this.selected[i]) {
                sum += this.options[i].correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE;
            }
        }

        super.complete(sum);
    }
}