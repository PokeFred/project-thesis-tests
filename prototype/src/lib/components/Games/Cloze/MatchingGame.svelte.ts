// Das gleiche wie Cloze.svelte.ts
import { type Quiz, POINTS } from "$components/Games/Quiz";
import type { GameOutput } from "../MatchingGame";

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

    public score(): number {
        throw new Error("Not implemented");
    }

    public complete(): GameOutput {
        return {
            answers: this.selected
        } satisfies GameOutput;
    }
}