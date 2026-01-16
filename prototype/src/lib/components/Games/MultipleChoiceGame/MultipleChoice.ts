import type { SavingData } from "$components/puzzle/multipleChoice"
import { type Quiz, POINTS } from "$components/Games/Quiz";
import type { Answer } from "."

export default class MultipleChoice implements Quiz<SavingData> {
    private readonly options: Answer[];
    private selected: boolean[];

    constructor(options: Answer[]) {
        this.options = options;
        this.selected = Array<boolean>(options.length).fill(false);
    }

    public get Options() { return this.options; }
    public get Selected() { return this.selected; }

    public score(): number {
        return this.options.reduce((sum: number, answer: Answer, i: number) => {
            if(!this.selected[i]) {
                return sum + POINTS.NOT_ANSWERED;
            }
            return sum + (answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);
        }, 0)
    }

    public complete(): SavingData {
        return {
            answers: this.options.map((answer: Answer, i: number): { id: number, selected: boolean } => {
                return {
                    id: answer.id,
                    selected: this.selected[i]
                }
            })
        } satisfies SavingData;
    }
}
