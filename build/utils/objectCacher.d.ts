import { Object3D } from 'three';
import Mesh from '../primitives/Mesh';
declare class ObjectCacher {
    private readonly objectPool;
    private readonly Primitive;
    constructor(objectPool: Object3D, Primitive: any);
    setObjectDimension(object: Mesh, position: RosMessage.Point, color: RosMessage.Color | null, scale?: RosMessage.Point): void;
    reusePool(points: RosMessage.Point[], colors: Array<RosMessage.Color | null>, options: {
        scale?: RosMessage.Point;
    }): void;
    increasePool(points: RosMessage.Point[], colors: Array<RosMessage.Color | null>, options: {
        scale?: RosMessage.Point;
    }): void;
}
export default ObjectCacher;
