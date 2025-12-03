import { type Quiz, POINTS } from "$components/Games/Quiz";
import type { GameOutput } from "./";

export type Description = {
    readonly tag: "p",
    readonly text: string,
} | {
    readonly tag: "img",
    readonly src: string,
    readonly alt: string,
    readonly caption?: string
}

export type Answer = {
    readonly answer: string;
    readonly correct: boolean;
}

// TODO: MatchingGame == Multiple Choice ??
export default class MultipleChoice implements Quiz {
    private readonly options: Answer[];
    // private readonly descriptions: Description[][]; // von der config aus laden in page end
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

    public complete(): GameOutput {
        return {
            answers: this.options.map((answer: Answer, i: number) => {
                return {
                    selected: this.selected[i],
                    answer: answer
                }
            })
        } satisfies GameOutput;
    }
}