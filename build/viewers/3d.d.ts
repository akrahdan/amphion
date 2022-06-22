import { Object3D, PerspectiveCamera, WebGLRenderer } from 'three';
import Scene from '../core/scene';
declare class Viewer3d {
    options: {};
    readonly scene: Scene;
    private previousWidth;
    private previousHeight;
    private readonly ro;
    renderer?: WebGLRenderer;
    camera?: PerspectiveCamera;
    private container?;
    controls?: any;
    constructor(scene: Scene | null, options?: {});
    animate(): void;
    initCamera(): void;
    setContainer(domNode: HTMLElement): void;
    initRenderer(): void;
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
        object?: Object3D;
    }): void;
}
export default Viewer3d;
