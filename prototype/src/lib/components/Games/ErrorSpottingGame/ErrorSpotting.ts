import type { GameOutput } from ".";
import type { Quiz } from "../Quiz";

// TODO
export default class ErrorSpotting implements Quiz<GameOutput> {
    private readonly selected: boolean;

    constructor() {

    }

    complete(): GameOutput {
        throw new Error("Method not implemented.");
    }
    score(): number {
        throw new Error("Method not implemented.");
    }
}