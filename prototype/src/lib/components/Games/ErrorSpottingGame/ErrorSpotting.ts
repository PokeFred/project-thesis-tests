import type { SavingData } from "$components/puzzle/errorSpotting";
import type { Quiz } from "../Quiz";

// TODO
export default class ErrorSpotting implements Quiz<SavingData> {
    private readonly selected: boolean;

    constructor() {

    }

    complete(): SavingData {
        throw new Error("Method not implemented.");
    }
    score(): number {
        throw new Error("Method not implemented.");
    }
}