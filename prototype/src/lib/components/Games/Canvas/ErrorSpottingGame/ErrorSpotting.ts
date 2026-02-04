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

class Group {
    private fields: Field[];
    
    constructor() {
        this.fields = new Array<Field>();
    }

    public get Length(): number { return this.fields.length; }

    public get Complete(): boolean { 
        for (let field of this.fields) {
            if (!field.Selected) {
                return false;
            }
        }
        return true;
    }

    public get NumberCorrect(): number {
        return this.fields.reduce((sum: number, piece: Field) => sum + (piece.Selected ? 1 : 0), 0);
    }

    public addField(piece: Field): void {
        this.fields.push(piece);
    }
}

export default class ErrorSpotting implements Quiz<SavingData> {
    private readonly errors: Field[];
    private groups: Group[];

    constructor(errors: string[][]) {
        this.errors = new Array<Field>();
        this.groups = new Array<Group>();
        errors.forEach((group: string[]) => {
            const GROUP: Group = new Group();
            group.forEach((error: string) => {
                const FIELD: Field = new Field();
                GROUP.addField(FIELD);
                this.errors.push(FIELD);
            })
            this.groups.push(GROUP);
        });
    }

    public get Errors() { return this.errors; }

    public complete(): SavingData {
        return {
            total: this.groups.length,
            correct: this.groups.reduce((sum: number, group: Group) => { 
                return group.Complete ? ++sum : sum
            }, 0)
        } satisfies SavingData;
    }
    
    public score(): number {
        return this.groups.reduce((sum: number, group: Group) => { 
            return sum + (group.Complete ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE)
        }, 0);
    }
}