import type { SavingData } from "$components/puzzle/wordGuessing";
import { type Quiz, POINTS } from "../Quiz";

export default class WordGuessing implements Quiz<SavingData> {
    private readonly solutions: string[];
    private inputs: string[];

    constructor(solutions: string[]) {
        this.solutions = solutions;
        this.inputs = $state(new Array<string>(this.solutions.length).fill(""));
    }

    public get Solutions() { return this.solutions; }
    public get Inputs() { return this.inputs; }

    public complete(): SavingData {
        return { match: this.inputs.map((input: string, i) => this.isCorrect(i)) } satisfies SavingData;
    }

    public score(): number {
        return this.solutions.reduce((sum: number, solution: string, i: number) => {
            return sum + (this.isCorrect(i) ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);
        }, 0);
    }

    private isCorrect(index: number): boolean {
        return this.solutions[index].toLowerCase().replace(/\s+/g, "") === this.inputs[index].toLowerCase().replace(/\s+/g, "");
    } 
}