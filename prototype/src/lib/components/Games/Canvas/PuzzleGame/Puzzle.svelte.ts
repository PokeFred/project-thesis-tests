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

export default class Puzzle implements Quiz<SavingData> {
    private slots: Slot[];
    private pieces: Piece[];

    constructor(slotGroups: SlotGroup[]) {
        this.slots = new Array<Slot>();
        this.pieces = new Array<Piece>();
        slotGroups.forEach((slotGroup: SlotGroup) => {
            const slot: Slot = new Slot();
            const piece: Piece = new Piece(slot, true);
            const noise: Piece[] | undefined  = slotGroup.noise?.map(() => new Piece(slot, false));
            
            this.slots.push(slot);
            this.pieces.push(piece);
            if(noise) {
                noise.forEach((piece: Piece) => this.pieces.push(piece));
            }
        });
    }

    public get Slots() { return this.slots; }
    public get Pieces() { return this.pieces; }

    public score(): number {
        return this.slots.reduce((sum: number, slot: Slot) => {
            return sum + (slot.Selected?.Correct ? POINTS.ANSWER_CORRECT : POINTS.ANSWER_FALSE);
        }, 0);
    }

    public complete(): SavingData {
        const placed: any[] = this.slots.map((slot: Slot) => {
            return slot.Selected
        })

        return {
            placed: JSON.stringify(placed)
        }
    }
}
