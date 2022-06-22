import LegacyCore from '../core';
import { Ros } from 'roslib';
declare class PlanningScene extends LegacyCore {
    private readonly collisionObjectViz;
    private readonly attachedCollisionObjects;
    constructor(ros: Ros, topicName: string, options?: {});
    update(message: RosMessage.PlanningScene): void;
}
export default PlanningScene;
