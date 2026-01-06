import type { SavingData } from "$components/puzzle/errorSpotting";
import { POINTS, type Quiz } from "../../Quiz";

export class Field {
    private selected: boolean

    constructor() {
        this.selected = false;
    }

    public get Selected() { return this.selected; }
    public set Selected(selected: boolean) { this.selected = selected; } 
}

export default class ErrorSpotting implements Quiz<SavingData> {
    private readonly errors: Field[];

    constructor(errors: string[]) {
        this.errors = errors.map(() => new Field());
    }

    public get Errors() { return this.errors; }

    public complete(): SavingData {
        return {
            selected: JSON.stringify(this.errors)
        } satisfies SavingData;
    }
    
    public score(): number {
        return this.errors.reduce((sum: number, error: Field) => {
            return sum + (error.Selected ? POINTS.ANSWER_CORRECT : POINTS.NOT_ANSWERED)
        },0);
    }
}