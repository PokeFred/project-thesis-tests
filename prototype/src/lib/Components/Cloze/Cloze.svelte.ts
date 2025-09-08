import { POINTS, score } from "../../../routes/app/stations/station_04/raetsel_01/Score.svelte"

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
        this.selected = Array(options.length);
        this.hints = hints.map((hint: string) => new Hint(hint));
    }

    public getPoints(): number {
        let sum: number = 0;
        this.selected.forEach((answer: Answer) => {
            sum += answer.correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE;
        });
        this.hints.forEach((hint: Hint)=>{
            sum += hint.isUnlocked() ? POINTS.HINT_UNLOCKED : 0;
        });
        return sum > 0 ? sum : 0;
    }

    public setScore(): void {
        score.setScore(score.getScore() + this.getPoints());
    }
}