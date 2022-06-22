import Stats from 'stats-js';
import { Group, Object3D, Scene as ThreeScene } from 'three';
declare class Scene extends ThreeScene {
    readonly vizWrapper: Group;
    readonly stats: Stats;
    private grid?;
    private options;
    constructor(options?: {
        backgroundColor: number;
        gridSize: number;
        gridDivisions: number;
        gridColor: number;
        gridCenterlineColor: number;
    });
    initLights(): void;
    initGrid(): void;
    addObject(object: Object3D): void;
    addVisualization(args: {
        object?: Object3D;
    }): void;
    getObjectByName(name: string): Object3D | undefined;
    updateOptions(options?: {
        backgroundColor: number;
        gridSize: number;
        gridDivisions: number;
        gridColor: number;
        gridCenterlineColor: number;
    }): void;
}
export default Scene;
