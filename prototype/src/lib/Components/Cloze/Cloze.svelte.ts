type Answer = {
    readonly answer: string;
    readonly correct: boolean;
}

class Hint {
    public readonly hint: string;
    private unlocked: boolean;

    constructor(hint: string) {
        this.hint = hint;
        this.unlocked = $state(false);
    }

    public isUnlocked(): boolean {
        return this.unlocked;
    }

    public markUnlocked(): void {
        this.unlocked = true;
    }
}


const ANSWER_CORRECT: number = 10;
const ANSWER_FALSE: number = -3;

export default class Cloze {
    public readonly options: Answer[][];
    public readonly hints: Hint[];
    public selected: Answer[];

    constructor(options: Answer[][], hints: string[]) {
        this.options = options;
        this.selected = Array(options.length);
        this.hints = hints.map((hint: string) => new Hint(hint));
    }

    public sumPoints(): number {
        let sum: number = 0;
        this.selected.forEach((answer: Answer) => {
            sum += answer.correct ? ANSWER_CORRECT : ANSWER_FALSE;
        });
        return sum > 0 ? sum : 0;
    }
}