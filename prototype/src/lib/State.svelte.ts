// // TODO: diese States durch cedrics ersetzen
// export const enum POINTS {
//     ANSWER_CORRECT = 3,
//     ANSWER_FALSE = 0,
//     HINT_UNLOCKED = 0,
//     NOT_ANSWERED = 0
// }

// export class QuizState {
//     private completed: boolean;
//     private score: number;

//     constructor() {
//         this.completed = $state(false);
//         this.score = $state(0);
//     }

//     public isCompleted(): boolean {
//         return this.completed;
//     }

//     public getScore(): number {
//         return this.score;
//     }

//     public complete(score: number): void {
//         if(!this.completed) {
//             this.completed = true;
//             this.score = (score > 0 ? score : 0);
//         }
//     }
// }

// class StationState {
//     public readonly quizStates: QuizState[];

//     constructor(length: number) {
//         this.quizStates = Array(length).fill(null).map(()=> new QuizState());
//     }
// }

// class GameState {
//     public readonly stationStates: StationState[];
//     private score: number;

//     constructor(stationStates: StationState[]) {
//         this.stationStates = stationStates;
//         this.score = $derived(stationStates.flatMap(s => s.quizStates).reduce((sum, q) => sum + q.getScore(), 0));
//     }

//     public getScore(): number {
//         return this.score;
//     }
// }

// export const gameState: GameState = new GameState(
//     [
//         new StationState(0),
//         new StationState(0),
//         new StationState(0),
//         new StationState(5),
//         new StationState(0)
//     ]
// )
