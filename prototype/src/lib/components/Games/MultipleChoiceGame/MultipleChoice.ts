import { type Quiz, POINTS } from "$components/Games/Quiz";

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

    constructor(options: Answer[], descriptions: Description[][]) {
        this.options = options;
        // this.descriptions = descriptions;
        this.selected = Array<boolean>(options.length).fill(false);
    }

    public get Options() { return this.options; }
    public get Selected() { return this.selected; }
    // public get Descriptions() { return this.descriptions; }

    public get AnswersCorrect() {
        if(this.selected.length <= 0) {
            return 0
        }
        return this.selected.reduce((sum, sel: boolean, i) => {
            if(!sel || !this.options[i].correct) {
               return sum;
            }
            return ++sum;
        }, 0);
    }

    public complete(): void {
        let sum: number = 0;
        for(let i = 0; i < this.options.length; i++) {
            if(this.selected[i]) {
                sum += this.options[i].correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE;
            }
        }
        // ins local storage
    }
}