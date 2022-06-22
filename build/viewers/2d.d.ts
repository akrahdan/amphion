import { Object3D } from 'three';
import Scene from '../core/scene';
declare class Viewer2d {
    private options;
    private readonly scene;
    private previousWidth;
    private previousHeight;
    private readonly ro;
    private renderer?;
    private camera?;
    private container?;
    private controls?;
    constructor(scene: Scene, options?: {
        backgroundColor: number;
        gridSize: number;
        gridDivisions: number;
        gridColor: number;
        gridCenterlineColor: number;
    });
    animate(): void;
    initCamera(): void;
    setContainer(domNode: HTMLElement): void;
    initRenderer(domNode: HTMLElement): void;
    updateOptions(options?: {
        backgroundColor: number;
        gridSize: number;
        gridDivisions: number;
        gridColor: number;
        gridCenterlineColor: number;
    }): void;
    destroy(): void;
    onWindowResize(): void;
    addVisualization(vizObject: {
        object: Object3D;
    }): void;
}
export default Viewer2d;
