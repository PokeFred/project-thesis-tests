import Canvas from "./Canvas";
import ErrorSpotting, { Field } from "./ErrorSpotting";
import type Konva from "konva";

export default class ErrorSpottingController {
    private readonly canvas: Canvas;
    private readonly errorSpotting: ErrorSpotting;

    private readonly resultOnly: boolean;
    private readonly errorFieldMarkMap: Map<Konva.Arc, Field>;

    constructor(container: HTMLDivElement, image: HTMLImageElement, errorPaths: string[], resultOnly: boolean) {
        this.canvas = new Canvas(this, container, image, errorPaths);
        this.errorSpotting = new ErrorSpotting(errorPaths);
        this.resultOnly = resultOnly;
        this.errorFieldMarkMap = new Map<Konva.Arc, Field>();
        this.canvas.ErrorMarks.forEach((mark: Konva.Arc, i: number) => {
            this.errorFieldMarkMap.set(mark, this.errorSpotting.Errors[i]);
            if (this.resultOnly) {
                mark.visible(true);
            }
        });
    }

    public get ErrorSpotting() { return this.errorSpotting; }

    public onClickErrorField(errorField: Konva.Path, mark: Konva.Arc): void {
        this.toggleMark(mark);
    }

    private toggleMark(mark: Konva.Arc): void {
        if (!this.resultOnly) {
            const ERROR_FIELD: Field = this.errorFieldMarkMap.get(mark)!;
            mark.visible(!mark.visible());
            ERROR_FIELD.Selected = !ERROR_FIELD.Selected;
        }
    }
}