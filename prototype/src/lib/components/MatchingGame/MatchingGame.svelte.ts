// Das gleiche wie Cloze.svelte.ts
import { Quiz } from "$components/Quiz";
import { type QuizState, POINTS } from "$lib/State.svelte";

export type Answer = {
    readonly answer: string;
    readonly correct: boolean;
}

class Hint {
    public readonly hint: string;
    private unlocked: boolean;

    constructor(hint: string) {
        this.hint = hint;
        this.unlocked = $state(false);
    }

    public isUnlocked(): boolean {
        return this.unlocked;
    }

    public markUnlocked(): void {
        this.unlocked = true;
    }
}


export default class MatchingGame extends Quiz {
    public readonly options: Answer[][];
    public readonly hints?: Hint[];
    public selected: Answer[];

    constructor(quizState: QuizState, options: Answer[][], hints?: string[]) {
        super(quizState);
        this.options = options;
        this.selected = $state(Array(options.length));
        if(hints) {
            this.hints = hints.map((hint: string) => new Hint(hint));
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
                sum += hint.isUnlocked() ? POINTS.HINT_UNLOCKED : 0;
            });
        }
        super.complete(sum);
    }
}