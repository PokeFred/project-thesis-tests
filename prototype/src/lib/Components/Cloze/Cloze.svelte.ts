import { POINTS, score } from "../Score.svelte"

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


export default class Cloze {
    public readonly options: Answer[][];
    public readonly hints: Hint[];
    public selected: Answer[];

    constructor(options: Answer[][], hints: string[]) {
        this.options = options;
        this.selected = $state(Array(options.length));
        this.hints = hints.map((hint: string) => new Hint(hint));
    }

    public getPoints(): number {
        let sum: number = 0;
        this.selected.forEach((answer: Answer) => {
            if(answer != undefined) {
                sum += answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE;
            }
        });
        this.hints.forEach((hint: Hint)=>{
            sum += hint.isUnlocked() ? POINTS.HINT_UNLOCKED : 0;
        });
        return sum > 0 ? sum : 0;
    }

    public addScore(): void {
        score.addScore(this.getPoints());
    }
}