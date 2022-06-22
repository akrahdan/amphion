import LegacyCore from '../core';
import Box from '../primitives/Box';
import { Ros } from 'roslib';
import { Object3D } from 'three';
declare class CollisionObject extends LegacyCore {
    object: Object3D;
    constructor(ros?: Ros, topicName?: string, options?: {});
    update(message: RosMessage.CollisionObject): void;
    static getNewPrimitive(args: {
        type: number;
        dimensions: number[];
    }): Box | null;
}
export default CollisionObject;
