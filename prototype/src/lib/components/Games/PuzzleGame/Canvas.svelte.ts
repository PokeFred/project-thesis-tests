import Konva from "konva";
import type { KonvaEventObject } from "konva/lib/Node";
import type { Vector2d } from "konva/lib/types";

export default class Canvas {
    private stage: Konva.Stage;

    private backgroundLayer: Konva.Layer;
    private gameLayer: Konva.Layer;
    private hudLayer: Konva.Layer;

    private puzzlePieceContainer: Konva.Group;

    private scale: number;
    private offsetX: number;
    private offsetY: number;

    private panAndZoomGameLayer: PanAndZoom;

    constructor(container: HTMLDivElement, stageWidth: number, stageHeight: number) {
        this.stage = new Konva.Stage({
            container: container,
            width: stageWidth,
            height: stageHeight,
        });

        this.backgroundLayer = new Konva.Layer();
        this.gameLayer = new Konva.Layer();
        this.hudLayer = new Konva.Layer();
        this.stage.add(this.backgroundLayer);
        this.stage.add(this.gameLayer);
        this.stage.add(this.hudLayer);

        this.panAndZoomGameLayer = new PanAndZoom(this.gameLayer);
        this.gameLayer.on("touchend", this.panAndZoomGameLayer.touchend.bind(this.panAndZoomGameLayer));
        this.gameLayer.on("touchmove", this.panAndZoomGameLayer.touchmove.bind(this.panAndZoomGameLayer));

        this.puzzlePieceContainer = new Konva.Group({
            draggable: true,
            dragBoundFunc(pos) {
                // const MIN = 0
                return {x: pos.x, y: this.y()}
            },
        });
        this.hudLayer.add(this.puzzlePieceContainer);

        this.scale = 1;
        this.offsetX = 0;
        this.offsetY = 0;
    }

    private drawPaths(paths: string[]): void {
        paths.forEach((path: string)=>{
            this.gameLayer.add(
                new Konva.Path({
                    data: path,
                    fill: "black",
                    scale: {x: this.scale, y: this.scale}
                })
            );
        });
    }

    private drawPlayfield(background: HTMLImageElement): void {
        this.scale =  Math.min(this.stage.width() / background.naturalWidth, this.stage.height() / background.naturalHeight);
        this.offsetX = (this.stage.width() - (background.naturalWidth * this.scale)) / 2;
        this.offsetY = (this.stage.height() - (background.naturalHeight * this.scale)) / 2;

        this.gameLayer.add(
            new Konva.Image({
                id: "playfield",
                image: background,
                scale: {x: this.scale, y: this.scale},
            })
        );
    }

    private drawBackground(): void {
        this.backgroundLayer.add(
            new Konva.Rect({
                x: 0,
                y: 0,
                width: this.stage.width(),
                height: this.stage.height(),
                fill: "black"
            })
        );
    }


    private drawGame(background: HTMLImageElement, paths: string[]): void {
        this.gameLayer.add(new Konva.Rect({stroke: "green", width: this.gameLayer.width(), height: this.gameLayer.height()}));
        this.drawPlayfield(background);
        this.drawPaths(paths);

        this.gameLayer.x(this.offsetX);
        this.gameLayer.y(this.offsetY);
    }

    private drawPuzzlePieceContainer(): void {
        this.puzzlePieceContainer.width(this.stage.width());
        this.puzzlePieceContainer.height(60);
        this.puzzlePieceContainer.x(0);
        this.puzzlePieceContainer.y(this.stage.height() - this.puzzlePieceContainer.height());
        this.puzzlePieceContainer.add(
            new Konva.Rect({
                x: 0,
                y: 0,
                width: this.puzzlePieceContainer.width(),
                height: this.puzzlePieceContainer.height(),
                stroke: "white",
            })
        );
    }

    private drawPieces(images: HTMLImageElement[]): void {
        const GAP = 20;
        let currentX = GAP;
        images.forEach((image: HTMLImageElement, i: number) => {
            const PIECE_SCALE = Math.min(this.puzzlePieceContainer.width() / image.naturalWidth, this.puzzlePieceContainer.height() / image.naturalHeight);
            this.puzzlePieceContainer.add(
                new Konva.Image({
                    x: currentX,
                    image: image,
                    draggable: true,
                    // scale: {x: this.scale, y: this.scale}
                    scale: {x: PIECE_SCALE, y: PIECE_SCALE}
                })
            );
            currentX += GAP + image.naturalWidth * PIECE_SCALE;
        });
    }

    private drawHUD(images: HTMLImageElement[]): void {
        this.drawPuzzlePieceContainer();
        this.drawPieces(images);
    }

    public drawAll(background: HTMLImageElement, paths: string[], images: HTMLImageElement[]): void {
        this.drawBackground();
        this.drawGame(background, paths);
        this.drawHUD(images);
    }
}

// https://konvajs.org/docs/sandbox/Multi-touch_Scale_Stage.html
class PanAndZoom {
    private layer: Konva.Layer;
    private stage: Konva.Stage;
    private lastCenter: Vector2d | null;
    private lastDist;
    private dragStopped;

    private readonly MAX_ZOOM = 5;
    private readonly MIN_ZOOM = 1;

    constructor(layer: Konva.Layer) {
        this.layer = layer;
        this.stage = layer.getStage();
        this.lastCenter = null;
        this.lastDist = 0;
        this.dragStopped = false;
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
        if (touch1 && !touch2 && !this.layer.isDragging() && this.dragStopped) {
            this.layer.startDrag();
            this.dragStopped = false;
        }

        if(touch1 && !touch2) {
            const rect = this.stage.container().getBoundingClientRect();
            const p1 = {
                x: touch1.clientX - rect.left,
                y: touch1.clientY - rect.top,
            };

                if(this.lastCenter) {
                    const dx = p1.x - this.lastCenter.x;
                    const dy = p1.y - this.lastCenter.y;

                    // Bounds berechnen
                    const rect = this.layer.findOne("#playfield")!.getClientRect();
                    const left = rect.x;
                    const top = rect.y;
                    const right = left + rect.width;
                    const bottom = top + rect.height;

                    const leftBound = 0;
                    const rightBound = this.stage.width();
                    const topBound = 0;
                    const bottomBound = this.stage.height();

                    // bildbreite < viewportBreite
                    if(rect.width < this.stage.width()) {
                        if(!(dx < 0 && left < leftBound) && !(dx > 1 && right > rightBound)) {
                            this.layer.x(left + dx);
                        }
                    }
                    // bildbreite > viewportBreite
                    else {
                        if(!(dx < 0 && right < rightBound) && !(dx > 0 && left > leftBound)) {
                            this.layer.x(left + dx);
                        }
                    }

                    // bildhöhe < viewporthöhe
                    if(rect.height < this.stage.height()) {
                        if(!(dy < 0 && top < topBound) && !(dy > 0 && bottom > bottomBound)) {
                            this.layer.y(top + dy);
                        }
                    }
                    // bild > viewport
                    else {
                        if(!(dy < 0 && bottom < bottomBound) && !(dy > 0 && top > topBound)) {
                            this.layer.y(top + dy);
                        }
                    }
                }
            this.lastCenter = p1;
        }

        else if (touch1 && touch2) {
            // if the stage was under Konva's drag&drop
            // we need to stop it, and implement our own pan logic with two pointers
            if (this.layer.isDragging()) {
                this.dragStopped = true;
                this.layer.stopDrag();
            }

            const rect = this.stage.container().getBoundingClientRect();

            const p1 = {
                x: touch1.clientX - rect.left,
                y: touch1.clientY - rect.top,
            };
            const p2 = {
                x: touch2.clientX - rect.left,
                y: touch2.clientY - rect.top,
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
                x: (newCenter.x - this.layer.x()) / this.layer.scaleX(),
                y: (newCenter.y - this.layer.y()) / this.layer.scaleX(),
            };

            const scale = this.layer.scaleX() * (dist / this.lastDist);

            if(scale > this.MAX_ZOOM || scale < this.MIN_ZOOM) {
                return;
            }

            this.layer.scaleY(scale);
            this.layer.scaleX(scale);

            // calculate new position of the stage
            const dx = newCenter.x - this.lastCenter.x;
            const dy = newCenter.y - this.lastCenter.y;

            const newPos = {
                x: newCenter.x - pointTo.x * scale + dx,
                y: newCenter.y - pointTo.y * scale + dy,
            };

            // Bounds berechnen
            const rectPlayfield = this.layer.findOne("#playfield")!.getClientRect();
            const leftBound = 0;
            const rightBound = this.stage.width();
            const topBound = 0;
            const bottomBound = this.stage.height();

            // bildbreite < viewportBreite
            if(rectPlayfield.width < this.stage.width()) {
                if(newPos.x < leftBound) {
                    this.layer.x(leftBound);
                }
                else if(newPos.x + rectPlayfield.width > rightBound) {
                    this.layer.x(rightBound - rectPlayfield.width);
                }
                else {
                    this.layer.x(newPos.x);
                }
            }
            // bildbreite > viewportBreite
            else {
                if(newPos.x > leftBound) {
                    this.layer.x(leftBound);
                }
                else if(newPos.x + rectPlayfield.width < rightBound) {
                    this.layer.x(rightBound - rectPlayfield.width);
                }
                else {
                    this.layer.x(newPos.x);
                }
            }

            // bildhöhe < viewporthöhe
            if(rectPlayfield.height < this.stage.height()) {
                if(newPos.y < topBound) {
                    this.layer.y(topBound);
                }
                else if(newPos.y + rectPlayfield.height > bottomBound) {
                    this.layer.y(bottomBound - rectPlayfield.height);
                }
                else {
                    this.layer.y(newPos.y);
                }
            }
            // bild > viewport
            else {
                if(newPos.y > topBound) {
                    this.layer.y(topBound);
                }
                else if(newPos.y + rectPlayfield.height < bottomBound) {
                    this.layer.y(bottomBound - rectPlayfield.height);
                }
                else {
                    this.layer.y(newPos.y);
                }
            }

            this.lastDist = dist;
            this.lastCenter = newCenter;
        }
    }
}