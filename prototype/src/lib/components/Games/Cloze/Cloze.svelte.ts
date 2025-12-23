import { type Quiz, POINTS } from "$components/Games/Quiz";
import type { GameOutput } from ".";

export type Answer = {
    readonly answer: string;
    readonly correct: boolean;
}

export default class Cloze implements Quiz<GameOutput> {
    private readonly options: Answer[][];
    private selected: Answer[];

    constructor(options: Answer[][]) {
        this.options = options;
        this.selected = $state(Array(options.length));
    }

    public get Options() { return this.options; }
    public get Selected() { return this.selected; }

    public score(): number {
        return this.selected.reduce((sum: number, answer: Answer, i: number) => {
            return sum + (answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);
        }, 0);
    }

    public complete(): GameOutput {
        return {
            selected: this.selected
        } satisfies GameOutput;
    }
}