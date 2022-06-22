import { Group } from 'three';
import Arrow from '../primitives/Arrow';
import ArrowWithCircle from '../primitives/ArrowWithCircle';
import LiveCore from '../core/live';
import { DataSource } from '../data';
declare class Wrench extends LiveCore<RosMessage.WrenchStamped, Group> {
    private primitiveX;
    private primitiveY;
    constructor(source: DataSource<RosMessage.WrenchStamped>, options?: {
        type: string;
        circleConeLength: number;
        circleConeRadius: number;
        circleRadius: number;
        tube: number;
        radialSegments: number;
        tubularSegments: number;
        arc: number;
        shaftLength: number;
        shaftRadius: number;
        headLength: number;
        headRadius: number;
        forceColor: string;
        torqueColor: string;
        alpha: number;
        forceArrowScale: number;
        torqueArrowScale: number;
        arrowWidth: number;
    });
    static getNewPrimitive(options: {
        type: string;
    }): Arrow | null;
    getOrUpdatePrimitive(primitive: Arrow | ArrowWithCircle | null, type: string): Arrow | null;
    updateOptions(options: {
        [p: string]: any;
    }): void;
    update(message: RosMessage.WrenchStamped): void;
}
export default Wrench;
