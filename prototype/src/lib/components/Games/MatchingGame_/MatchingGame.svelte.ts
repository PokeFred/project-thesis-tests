import { type Quiz, POINTS } from "$components/Games/Quiz";
import type { GameOutput } from ".";

export type Pair = {
    left: string;
    right: string;
}

export default class MatchingGame implements Quiz {
    private readonly pairs: Pair[];
    private selected: string[];

    constructor(pairs: Pair[]) {
        this.pairs = pairs;
        this.selected = $state(Array(pairs.length));
    }

    public get Pairs() { return this.pairs; }
    public get Selected() { return this.selected; }

    public score(): number {
        return this.selected.reduce((sum: number, sel: string, i: number) => {
            return sum + (sel === this.pairs[i].right ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE)
        }, 0);
    }

    public complete(): GameOutput {
        return {
            answers: this.selected
        } satisfies GameOutput;
    }
}