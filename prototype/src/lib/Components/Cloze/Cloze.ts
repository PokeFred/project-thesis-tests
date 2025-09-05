type Answer = {
    readonly answer: string;
    readonly correct: boolean;
}

const ANSWER_CORRECT: number = 10;
const ANSWER_FALSE: number = -3;

export default class Cloze {
    public readonly options: Answer[][];
    public selected: Answer[];

    constructor(options: Answer[][]) {
        this.options = options;
        this.selected = Array(options.length);
    }

    public sumPoints(): number {
        let sum: number = 0;
        this.selected.forEach((answer: Answer) => {
            sum += answer.correct ? ANSWER_CORRECT : ANSWER_FALSE;
        });
        return sum > 0 ? sum : 0;
    }
}