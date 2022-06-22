import { Color, Mesh, Object3D } from 'three';
import Line from '../primitives/Line';
import LineSegments from '../primitives/LineSegment';
export interface Transform {
    translation: {
        x: number;
        y: number;
        z: number;
    };
    rotation: {
        w: number;
        x: number;
        y: number;
        z: number;
    };
}
export declare const setTransform: (object: Object3D, transform: Transform) => void;
export declare const setScale: (object: Object3D, scale: RosMessage.Point) => void;
export declare const setColor: (object: Mesh | Line | LineSegments, color: string | number | RosMessage.Color) => void;
