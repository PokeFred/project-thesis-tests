import Canvas from "./Canvas";
import ErrorSpotting from "./ErrorSpotting";

export default class ErrorSpottingController {
    private readonly canvas: Canvas;
    private readonly errorSpotting: ErrorSpotting;

    constructor(container: HTMLDivElement, image: HTMLImageElement) {
        this.canvas = new Canvas(this, container, image);
        this.errorSpotting = new ErrorSpotting();
    }
}