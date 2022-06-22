import { Object3D, Quaternion, Vector3 } from 'three';
import Group from '../primitives/Group';
import LiveCore from '../core/live';
import { DataSource } from '../data';
declare class Odometry extends LiveCore<RosMessage.Odometry, Group> {
    private objectPool;
    private keepSize;
    private currentObjectIndex;
    constructor(source: DataSource<RosMessage.Odometry>, options?: {
        positionTolerance: number;
        angleTolerance: number;
        keep: number;
        arrowLength: number;
        axesLength: number;
        axesRadius: number;
        shaftLength: number;
        shaftRadius: number;
        headLength: number;
        headRadius: number;
        type: string;
        color: string;
        alpha: number;
    });
    setKeepSize(size: number): void;
    removeAllObjects(): void;
    checkToleranceThresholdExceed(newPose: {
        position: Vector3;
        quaternion: Quaternion;
    }): boolean;
    getObject(): Object3D;
    changeObjectPoolType(): void;
    updateOptions(options: {
        [p: string]: any;
    }): void;
    update(message: RosMessage.Odometry): void;
}
export default Odometry;
