import Konva from "konva";
import type Controller from "./Controller";
import type { KonvaEventObject } from "konva/lib/Node";
import type { Vector2d } from "konva/lib/types";

export default class Canvas {
    private readonly controller: Controller
    private readonly container: HTMLDivElement;
    private stage: Konva.Stage;

    private gameLayer: Konva.Layer;

    private gameField: GameField;

    constructor(controller: Controller, container: HTMLDivElement, image: HTMLImageElement) {
        this.controller = controller;
        this.container = container;
        this.stage = new Konva.Stage({
            container: container,
            width: container.clientWidth,
            height: container.clientHeight
        });

        this.gameLayer = new Konva.Layer();

        this.stage.add(this.gameLayer);

        this.gameField = new GameField(this, image);
    }

    public get Stage() { return this.stage; }
    public get GameLayer() { return this.gameLayer; }
}


class GameField {
    private readonly canvas: Canvas;
    private readonly stage: Konva.Stage;
    private readonly layer: Konva.Layer;

    private readonly boundary: Konva.Group;
    private readonly field: Konva.Group;

    private readonly panAndZoom: PanAndZoom;

    // private readonly errors: Konva.???

    constructor(canvas: Canvas, image: HTMLImageElement) {
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

        // this.errors = 
    }

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
}

// TODO: auslagern. puzzle === errorspotting panandzoom. für testzwecke
// https://konvajs.org/docs/sandbox/Multi-touch_Scale_Stage.html
class PanAndZoom {
    private container: Konva.Container;
    private boundary: Konva.Container;
    
    private lastCenter: Vector2d | null;
    private lastDist;
    private dragStopped;

    private readonly MAX_ZOOM = 5;
    private readonly MIN_ZOOM;

    constructor(container: Konva.Container, boundary: Konva.Container) {
        this.container = container;
        this.boundary = boundary;
        this.lastCenter = null;
        this.lastDist = 0;
        this.dragStopped = false;
        this.MIN_ZOOM = container.scaleX();
    }

    private getDistance(p1: Vector2d, p2: Vector2d) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    private getCenter(p1: Vector2d, p2: Vector2d) {
        return {
            x: (p1.x + p2.x) / 2,
            y: (p1.y + p2.y) / 2,
        };
    }

    public touchend() {
        this.lastDist = 0;
        this.lastCenter = null;
    }

    public touchmove(e: KonvaEventObject<TouchEvent>) {
        e.evt.preventDefault();
        const touch1 = e.evt.touches[0];
        const touch2 = e.evt.touches[1];

        // we need to restore dragging, if it was cancelled by multi-touch
        if (touch1 && !touch2 && !this.container.isDragging() && this.dragStopped) {
            this.container.startDrag();
            this.dragStopped = false;
        }

        if(touch1 && !touch2) {
            const p1 = {
                x: touch1.clientX,
                y: touch1.clientY,
            };

                if(this.lastCenter) {
                    const dx = p1.x - this.lastCenter.x;
                    const dy = p1.y - this.lastCenter.y;

                    // Bounds berechnen
                    const rect = this.container.getClientRect();
                    const left = rect.x;
                    const top = rect.y;
                    const right = left + rect.width;
                    const bottom = top + rect.height;

                    const leftBound = 0;
                    const rightBound = this.boundary.width();
                    const topBound = 0;
                    const bottomBound = this.boundary.height();

                    // bildbreite < viewportBreite
                    if(rect.width < this.boundary.width()) {
                        this.container.x(Math.min(Math.max(leftBound, left + dx) + rect.width, rightBound) - rect.width);
                    }
                    // bildbreite > viewportBreite
                    else {
                        this.container.x(Math.max(Math.min(leftBound, left + dx) + rect.width, rightBound) - rect.width);
                    }

                    // bildhöhe < viewporthöhe
                    if(rect.height < this.boundary.height()) {
                        this.container.y(Math.min(Math.max(topBound, top + dy) + rect.height, bottomBound) - rect.height);
                    }
                    // bild > viewport
                    else {
                        this.container.y(Math.max(Math.min(topBound, top + dy) + rect.height, bottomBound) - rect.height);
                    }
                }
            this.lastCenter = p1;
        }

        else if (touch1 && touch2) {
            // if the stage was under Konva's drag&drop
            // we need to stop it, and implement our own pan logic with two pointers
            if (this.container.isDragging()) {
                this.dragStopped = true;
                this.container.stopDrag();
            }

            const rect = this.boundary.getClientRect();

            const p1 = {
                x: touch1.clientX,
                y: touch1.clientY,
            };
            const p2 = {
                x: touch2.clientX,
                y: touch2.clientY,
            };

            if (!this.lastCenter) {
                this.lastCenter = this.getCenter(p1, p2);
                return;
            }
            const newCenter = this.getCenter(p1, p2);

            const dist = this.getDistance(p1, p2);

            if (!this.lastDist) {
                this.lastDist = dist;
                this.lastCenter = newCenter;
            }

            // local coordinates of center point
            const pointTo = {
                x: (newCenter.x - this.container.x()) / this.container.scaleX(),
                y: (newCenter.y - this.container.y()) / this.container.scaleX(),
            };

            const scale = this.container.scaleX() * (dist / this.lastDist);

            if(scale > this.MAX_ZOOM || scale < this.MIN_ZOOM) {
                return;
            }

            this.container.scaleY(scale);
            this.container.scaleX(scale);

            // calculate new position of the stage
            const dx = newCenter.x - this.lastCenter.x;
            const dy = newCenter.y - this.lastCenter.y;

            const newPos = {
                x: newCenter.x - pointTo.x * scale + dx,
                y: newCenter.y - pointTo.y * scale + dy,
            };

            // Bounds berechnen
            const rectPlayfield = this.container.getClientRect();
            const leftBound = 0;
            const rightBound = this.boundary.width();
            const topBound = 0;
            const bottomBound = this.boundary.height();

            // bildbreite < viewportBreite
            if(rectPlayfield.width < this.boundary.width()) {
                this.container.x(Math.min(Math.max(leftBound, newPos.x) + rectPlayfield.width, rightBound) - rectPlayfield.width);
            }
            // bildbreite > viewportBreite
            else {
                this.container.x(Math.max(Math.min(leftBound, newPos.x) + rectPlayfield.width, rightBound) - rectPlayfield.width);
            }

            // bildhöhe < viewporthöhe
            if(rectPlayfield.height < this.boundary.height()) {
                this.container.y(Math.min(Math.max(topBound, newPos.y) + rectPlayfield.height, bottomBound) - rectPlayfield.height);
            }
            // bild > viewport
            else {
                this.container.y(Math.max(Math.min(topBound, newPos.y) + rectPlayfield.height, bottomBound) - rectPlayfield.height);
            }

            this.lastDist = dist;
            this.lastCenter = newCenter;
        }
    }
}