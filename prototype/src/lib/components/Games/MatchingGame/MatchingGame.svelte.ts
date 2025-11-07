// Das gleiche wie Cloze.svelte.ts
import { Quiz } from "$components/Games/Quiz";
import { type QuizState, POINTS } from "$lib/State.svelte";

export type Answer = {
    readonly answer: string;
    readonly correct: boolean;
}

class Hint {
    private readonly hint: string;
    private unlocked: boolean;

    constructor(hint: string) {
        this.hint = hint;
        this.unlocked = $state(false);
    }

    public get Hint() { return this.hint; }
    public get Unlocked() { return this.unlocked; }

    public markUnlocked(): void {
        this.unlocked = true;
    }
}


export default class MatchingGame extends Quiz {
    private readonly options: Answer[][];
    private hints?: Hint[];
    private selected: Answer[];

    constructor(quizState: QuizState, options: Answer[][], hints?: string[]) {
        super(quizState);
        this.options = options;
        this.selected = $state(Array(options.length));
        if(hints) {
            this.hints = hints.map((hint: string) => new Hint(hint));
        }
    }

    public get Options() { return this.options; }
    public get Hints() { return this.hints; }
    public get Selected() { return this.selected; }

    public get AnswersCorrect() {
        if(this.selected.length <= 0) {
            return 0
        }
        return this.selected.reduce((sum, sel: Answer) => {
            if(sel.correct) {
               return ++sum;
            }
            return sum;
        }, 0);
    }

    public reset(): void {
        this.selected = Array(this.selected.length);
        if(this.hints) {
            this.hints = this.hints.map((hint: Hint) => new Hint(hint.Hint));
        }
    }

    public complete(): void {
        let sum: number = 0;
        this.selected.forEach((answer: Answer) => {
            if(answer != undefined) {
                sum += answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE;
            }
        });
        if(this.hints) {
            this.hints.forEach((hint: Hint)=>{
                sum += hint.Unlocked ? POINTS.HINT_UNLOCKED : 0;
            });
        }
        super.complete(sum);
    }
}