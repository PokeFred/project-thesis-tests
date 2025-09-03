type Answer = {
    readonly answer: string;
    readonly correct: boolean;
}

export default class Cloze {
    public readonly options: Answer[][];
    public selected: (Answer | null)[];

    constructor(options: Answer[][]) {
        this.options = options;
        this.selected = Array(options.length).fill(null);
    }
}