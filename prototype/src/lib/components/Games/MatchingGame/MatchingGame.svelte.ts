// Das gleiche wie Cloze.svelte.ts
import { type Quiz, POINTS } from "$components/Games/Quiz";
import type { GameOutput } from ".";

export type Answer = {
    readonly answer: string;
    readonly correct: boolean;
}

export default class MatchingGame implements Quiz {
    private readonly options: Answer[][];
    private selected: Answer[];

    constructor(options: Answer[][]) {
        this.options = options;
        this.selected = $state(Array(options.length));
    }

    public get Options() { return this.options; }
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

    public complete(): GameOutput {
        return {
            answers: this.selected
        } satisfies GameOutput;
    }
}