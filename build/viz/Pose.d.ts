import { Group } from 'three';
import Arrow from '../primitives/Arrow';
import Axes from '../primitives/Axes';
import LineArrow from '../primitives/LineArrow';
import LiveCore from '../core/live';
import { DataSource } from '../data';
declare class Pose extends LiveCore<RosMessage.PoseStamped, Group> {
    private primitive;
    constructor(source: DataSource<RosMessage.PoseStamped>, options?: {
        type: string;
        axesLength: number;
        axesRadius: number;
        shaftLength: number;
        shaftRadius: number;
        headLength: number;
        headRadius: number;
        color: string;
        alpha: number;
    });
    static getNewPrimitive(options: {
        [k: string]: any;
    }): Arrow | Axes | LineArrow | null;
    updateOptions(options: {
        [k: string]: any;
    }): void;
    update(message: RosMessage.PoseStamped): void;
}
export default Pose;
