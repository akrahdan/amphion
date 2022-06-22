import LegacyCore from '../core';
import { Ros } from 'roslib';
declare class DisplayTrajectory extends LegacyCore {
    private readonly robotClone;
    private lastMessage?;
    private loopbackId?;
    private poseRemovalId?;
    private pointsUpdateIds;
    constructor(ros: Ros, topicName: string, options?: any);
    updateOptions(options: any): void;
    resetLoopback(): void;
    update(message: RosMessage.DisplayTrajectory, loopback?: boolean): void;
}
export default DisplayTrajectory;
