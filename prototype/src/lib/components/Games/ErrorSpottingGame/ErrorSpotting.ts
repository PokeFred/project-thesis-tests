import type { SavingData } from "$components/puzzle/errorSpotting";
import type { Quiz } from "../Quiz";

export class Field {
    private selected: boolean

    constructor() {

    }
}

// TODO
export default class ErrorSpotting implements Quiz<SavingData> {
    private readonly errors: Field[];

    constructor() {

    }

    complete(): SavingData {
        throw new Error("Method not implemented.");
    }
    score(): number {
        throw new Error("Method not implemented.");
    }
}