import type { SavingData } from "$components/puzzle/wordGuessing";
import { type Quiz, POINTS } from "../Quiz";

export default class WordGuessing implements Quiz<SavingData> {
    private readonly solutions: string[];
    private inputs: string[];

    constructor(solutions: string[]) {
        this.solutions = solutions;
        this.inputs = $state(new Array<string>(this.solutions.length));
    }

    public get Solutions() { return this.solutions; }
    public get Inputs() { return this.inputs; }

    public complete(): GameOutput {
        return { match: this.inputs.map((input: string, i) => input == this.solutions[i])[0] } satisfies GameOutput;
    }

    public score(): number {
        return this.solutions.reduce((sum: number, solution: string, i: number) => {
            return sum + (solution == this.inputs[i] ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);
        }, 0);
    }
}