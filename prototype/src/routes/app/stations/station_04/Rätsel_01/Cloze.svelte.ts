

export type Answer = {
    readonly answer: string;
    readonly correct: boolean;
}

// export default class Cloze {
export type Cloze = {
    // readonly questions: string[];
    readonly options: Answer[][];
}