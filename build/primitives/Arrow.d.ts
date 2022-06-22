import Cylinder from './Cylinder';
import Cone from './Cone';
import { Group } from 'three';
declare class Arrow extends Group {
    readonly cone: Cone;
    readonly cylinder: Cylinder;
    constructor();
    setTransform(transform: {
        translation: RosMessage.Point;
        rotation: RosMessage.Quaternion;
    }): void;
    setColor(color: {
        cone: RosMessage.Color;
        cylinder: RosMessage.Color;
    }): void;
    setHeadDimensions(dimensions: {
        radius?: number;
        length?: number;
    }): void;
    setShaftDimensions(dimensions: {
        radius?: number;
        length?: number;
    }): void;
    setAlpha(alpha: number): void;
    setScale(scale: RosMessage.Point): void;
}
export default Arrow;
