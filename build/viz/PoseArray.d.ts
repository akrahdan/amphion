import { Group } from 'three';
import LiveCore from '../core/live';
import { DataSource } from '../data';
declare class PoseArray extends LiveCore<RosMessage.PoseArray, Group> {
    constructor(source: DataSource<RosMessage.PoseArray>, options?: {
        type: string;
        arrowLength: number;
        axesLength: number;
        axesRadius: number;
        shaftLength: number;
        shaftRadius: number;
        headLength: number;
        headRadius: number;
        color: string;
        alpha: number;
    });
    update(message: RosMessage.PoseArray): void;
}
export default PoseArray;
