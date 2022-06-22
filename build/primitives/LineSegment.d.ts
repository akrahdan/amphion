import { Geometry, LineBasicMaterial, LineSegments as ThreeLineSegments } from 'three';
import * as TransformUtils from '../utils/transform';
declare class LineSegments extends ThreeLineSegments {
    readonly material: LineBasicMaterial;
    readonly geometry: Geometry;
    constructor(color?: string, linewidth?: number);
    isValid(points: RosMessage.Point[]): boolean;
    setColor(color: string | number | RosMessage.Color): void;
    updatePoints(points: RosMessage.Point[], colors: RosMessage.Color[]): void;
    setTransform(transform: TransformUtils.Transform): void;
}
export default LineSegments;
