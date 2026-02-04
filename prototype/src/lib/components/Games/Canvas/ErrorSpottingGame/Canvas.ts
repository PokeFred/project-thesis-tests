import Konva from "konva";
import type Controller from "./Controller";
import PanAndZoom from "../PanAndZoom";

export default class Canvas {
    private readonly controller: Controller
    private readonly container: HTMLDivElement;
    private stage: Konva.Stage;

    private gameLayer: Konva.Layer;

    private gameField: GameField;

    constructor(controller: Controller, container: HTMLDivElement, image: HTMLImageElement, errorPaths: string[][]) {
        this.controller = controller;
        this.container = container;
        this.stage = new Konva.Stage({
            container: container,
            width: container.clientWidth,
            height: container.clientHeight
        });

        this.gameLayer = new Konva.Layer();

        this.stage.add(this.gameLayer);

        this.gameField = new GameField(this, image, errorPaths);
    }

    public get Container() { return this.container; }
    public get Stage() { return this.stage; }
    public get GameLayer() { return this.gameLayer; }
    public get Controller() { return this.controller; }
    public get ErrorMarks() { return this.gameField.ErrorMarks; }
}


class GameField {
    private readonly canvas: Canvas;
    private readonly stage: Konva.Stage;
    private readonly layer: Konva.Layer;

    private readonly boundary: Konva.Group;
    private readonly field: Konva.Group;

    private readonly panAndZoom: PanAndZoom;

    private readonly errorMarks: Konva.Arc[];

    constructor(canvas: Canvas, image: HTMLImageElement, errorPaths: string[][]) {
        this.canvas = canvas;
        this.stage = this.canvas.Stage;
        this.layer = this.canvas.GameLayer;

        this.boundary = this.createBoundary();
        this.field = this.createField(image);

        this.boundary.add(this.field);
        this.layer.add(this.boundary);

        this.panAndZoom = new PanAndZoom(this.field, this.boundary);
        this.field.on("touchend", this.panAndZoom.touchend.bind(this.panAndZoom));
        this.field.on("touchmove", this.panAndZoom.touchmove.bind(this.panAndZoom));

        this.errorMarks = errorPaths.flat().map((path: string) => this.createMark(this.createErrorField(path)));
    }

    public get ErrorMarks() { return this.errorMarks; }

    private createBoundary(): Konva.Group {
        const WIDTH: number = this.stage.width();
        const HEIGHT: number = this.stage.height();
        const BOUNDARY: Konva.Rect = new Konva.Rect({
            width: WIDTH,
            height: HEIGHT
        });
        
        const GROUP: Konva.Group = new Konva.Group({
            width: WIDTH,
            height: HEIGHT
        });
        GROUP.add(BOUNDARY);
        return GROUP;
    }

    private createField(background: HTMLImageElement): Konva.Group {
        const RECT = this.boundary.getClientRect();

        const SCALE =  Math.min(RECT.width / background.naturalWidth, RECT.height / background.naturalHeight);
        const OFFSET_X = (this.boundary.width() - (background.naturalWidth * SCALE)) / 2;
        const OFFSET_Y = (this.boundary.height() - (background.naturalHeight * SCALE)) / 2;

        const IMAGE: Konva.Image = new Konva.Image({image: background});
        const GROUP: Konva.Group = new Konva.Group({
            x: OFFSET_X,
            y: OFFSET_Y,
            scale: {x: SCALE, y: SCALE}
        });
        GROUP.add(IMAGE);
        return GROUP;
    }

    private createErrorField(path: string): Konva.Path {
        const ERROR_FIELD = new Konva.Path({
            data: path,
            strokeEnabled: false,
            hitStrokeWidth: 0,
        })
        this.field.add(ERROR_FIELD);
        return ERROR_FIELD;
    }

    private createMark(errorField: Konva.Path): Konva.Arc {
        const THICKNESS: number = 5;
        const COLOR = getComputedStyle(this.canvas.Container).getPropertyValue("--color-secondary").trim();
        const RECT = errorField.getSelfRect();
        const MARK: Konva.Arc = new Konva.Arc({
            x: RECT.x + (RECT.width / 2),
            y: RECT.y + (RECT.height / 2),
            innerRadius: Math.max(RECT.width, RECT.height) / 2 ,
            outerRadius: Math.max(RECT.width, RECT.height) / 2 + THICKNESS,
            angle: 360,
            fill: COLOR,
            visible: false
        });
        errorField.on("pointerclick", () => {
            this.canvas.Controller.onClickErrorField(errorField, MARK);
        });
        this.field.add(MARK);
        return MARK;
    }
}