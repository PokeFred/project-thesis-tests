import type { SavingData } from "$components/puzzle/dragDrop";
import { type Quiz, POINTS } from "../../Quiz"
import type { SlotGroup } from "./PuzzleController.svelte";

export class Slot {
    private selected?: Piece;

    constructor() {
        this.selected = $state(undefined);
    }

    public get Selected() { return this.selected; }

    public set Selected(piece: Piece | undefined) { this.selected = piece; }
}

export class Piece {
    private readonly correct: boolean
    private readonly slot: Slot;

    constructor(slot: Slot, correct: boolean) {
        this.correct = correct;
        this.slot = slot;
    }

    public get Correct() { return this.correct; }
    public get Slot() { return this.slot; }
    public get Placed() { return this.slot.Selected === this }
    
    public placeInSlot(): void {
        if(!this.slot.Selected) {
            this.slot.Selected = this;
        }
    }

    public removeFromSlot(): void {
        if(this.slot.Selected === this) {
            this.slot.Selected = undefined;
        }
    }
}

class Group {
    private pieces: Piece[];
    
    constructor() {
        this.pieces = new Array<Piece>();
    }

    public get Length(): number { return this.pieces.length; }

    public get Complete(): boolean { 
        for (let piece of this.pieces) {
            if (!piece.Placed) {
                return false;
            }
        }
        return true;
    }

    public get NumberCorrect(): number {
        return this.pieces.reduce((sum: number, piece: Piece) => sum + (piece.Placed ? 1 : 0), 0);
    }

    public addPiece(piece: Piece): void {
        this.pieces.push(piece);
    }
}

export default class Puzzle implements Quiz<SavingData> {
    private slots: Slot[];
    private pieces: Piece[];
    private groups: Map<number | undefined, Group>;

    constructor(slotGroups: SlotGroup[]) {
        this.slots = new Array<Slot>();
        this.pieces = new Array<Piece>();
        this.groups = new Map<number | undefined, Group>();
        slotGroups.forEach((slotGroup: SlotGroup) => {
            const slot: Slot = new Slot();
            const piece: Piece = new Piece(slot, true);
            const noise: Piece[] | undefined  = slotGroup.noise?.map(() => new Piece(slot, false));
            
            this.slots.push(slot);
            this.pieces.push(piece);
            
            if (noise) {
                noise.forEach((piece: Piece) => this.pieces.push(piece));
            }

            const GROUP: Group = this.groups.get(slotGroup.group) ?? this.groups.set(slotGroup.group, new Group()).get(slotGroup.group)!;
            GROUP.addPiece(piece);
        });
    }

    public get Slots() { return this.slots; }
    public get Pieces() { return this.pieces; }

    public score(): number {
        let score: number = 0;
        this.groups.forEach((group: Group, key: number | undefined) => {
            if (key) {
                score += group.Complete ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE; 
            }
            else {
                score += group.NumberCorrect * POINTS.ANSWER_CORRECT;
            }
        });
        return score;
    }

    public complete(): SavingData {
        let total: number = 0;
        let correct: number = 0;
        this.groups.forEach((group: Group, key: number | undefined) => {
            if (key) {
                total++;
                if (group.Complete) {
                    correct++;
                }
            }
            else {
                correct += group.NumberCorrect;
                total += group.Length;
            }
        });
        return {
            total: total,
            correct: correct
        };
    }
}
