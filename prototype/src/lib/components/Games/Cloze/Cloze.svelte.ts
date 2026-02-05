import { type Quiz, POINTS } from "$components/Games/Quiz";
import type { SavingData } from "$components/puzzle/textSelect";
import type { GameOutput } from ".";

export type Answer = {
    readonly answer: string;
    readonly correct: boolean;
}

export default class Cloze implements Quiz<SavingData> {
    private readonly options: Answer[][];
    private selected: Answer[];

    constructor(options: Answer[][]) {
        this.options = options;
        this.selected = $state(Array(options.length));
    }

    public get Options() { return this.options; }
    public get Selected() { return this.selected; }

    public isComplete(): boolean {
        for (let i = 0; i < this.selected.length; i++) {
            if (!this.selected[i]) {
                return false;
            }
        }
        return true;
    }

    public score(): number {
        return this.selected.reduce((sum: number, answer: Answer, i: number) => {
            return sum + (answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);
        }, 0);
    }

    public complete(): SavingData {
        return {
            selected: this.selected
        } satisfies SavingData;
    }
}