import { Quiz } from "$components/Games/Quiz";
import { type QuizState, POINTS } from "$lib/State.svelte";

export type Description = {
    readonly tag: "p",
    readonly text: string,
} | {
    readonly tag: "img",
    readonly src: string,
    readonly alt: string,
    readonly caption: string
}

export type Answer = {
    readonly answer: string;
    readonly correct: boolean;
}

// TODO: MatchingGame == Multiple Choice ??
export default class MultipleChoice extends Quiz {
    private readonly options: Answer[];
    private selected: boolean[];

    constructor(quizState: QuizState, options: Answer[]) {
        super(quizState);
        this.options = options;
        this.selected = Array<boolean>(options.length).fill(false);
    }

    public get Options() { return this.options; }
    public get Selected() { return this.selected; }

    public get AnswersCorrect() {
        if(this.selected.length <= 0) {
            return 0
        }
        return this.selected.reduce((sum, sel: boolean, i) => {
            if(!sel || !this.options[i].correct) {
               return sum;
            }
            return ++sum;
        }, 0);
    }

    public reset(): void {
        this.selected = Array<boolean>(this.options.length).fill(false);
    }

    public complete(): void {
        let sum: number = 0;
        for(let i = 0; i < this.options.length; i++) {
            if(this.selected[i]) {
                sum += this.options[i].correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE;
            }
        }
        super.QuizState.complete(sum);
    }
}