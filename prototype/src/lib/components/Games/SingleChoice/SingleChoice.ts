import { type Quiz, POINTS } from "$components/Games/Quiz";
import type { SavingData } from "$components/puzzle/singleChoice";
import type { Answer } from "."

export default class SingleChoice implements Quiz<SavingData> {
    private readonly options: Answer[];
    private selected?: number;

    constructor(options: Answer[]) {
        this.options = options;
    }

    public get Options() { return this.options; }
    public get Selected() { return this.selected; }
    public set Selected(selected: number | undefined) { this.selected = selected; }

    public score(): number {
        return this.selected !== undefined ? (this.options[this.selected].correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE) : POINTS.NOT_ANSWERED;
    }

    public complete(): SavingData {
        return {
            selected: this.selected
        } satisfies SavingData;
    }
}