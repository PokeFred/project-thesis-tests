import Canvas from "./Canvas";
import ErrorSpotting from "./ErrorSpotting";

export default class ErrorSpottingController {
    private readonly canvas: Canvas;
    private readonly errorSpotting: ErrorSpotting;

    constructor(container: HTMLDivElement, image: HTMLImageElement, errorPaths: string[]) {
        this.canvas = new Canvas(this, container, image, errorPaths);
        this.errorSpotting = new ErrorSpotting();
    }
}