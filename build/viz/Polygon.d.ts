import LegacyCore from '../core';
import Group from '../primitives/Group';
import { Ros } from 'roslib';
declare class Polygon extends LegacyCore {
    readonly object: Group;
    private readonly line;
    constructor(ros: Ros, topicName: string, options?: {
        color: string;
        alpha: number;
    });
    updateOptions(options: any): void;
    update(message: RosMessage.PolygonStamped): void;
}
export default Polygon;
