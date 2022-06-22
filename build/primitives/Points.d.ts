import { Geometry, Points as ThreePoints, PointsMaterial } from 'three';
import * as TransformUtils from '../utils/transform';
declare class Points extends ThreePoints {
    readonly geometry: Geometry;
    readonly material: PointsMaterial;
    constructor();
    setTransform(transform: TransformUtils.Transform): void;
    updatePoints(points: RosMessage.Point[], colors: RosMessage.Color[], options: {
        scale: RosMessage.Point;
    }): void;
    setScale(scale: RosMessage.Point | number): void;
}
export default Points;
