import { Object3D } from 'three';
import { Ros } from 'roslib';
import Viewer3d from './3d';
import URDFCore from '../core/urdf';
declare class TfViewer extends Viewer3d {
    options: {
        onFramesListUpdate?: () => void;
        selectedFrame?: string;
    };
    private readonly ros;
    private readonly framesList;
    private readonly onFramesListUpdate;
    constructor(rosInstance: Ros, options?: {
        onFramesListUpdate?: (framesList: string[]) => void;
        selectedFrame?: string;
    });
    initRosEvents(): void;
    onRosConnection(): void;
    getTFMessages(args: {
        transforms: RosMessage.TransformStamped[];
    }): void;
    getObjectOrCreate(frameId: string): Object3D;
    setFrameTransform(): void;
    addVisualization(vizObject: {
        object: Object3D;
        onHeaderChange: (frameId: string) => void;
    }): void;
    attachObjectOutsideTree(object: Object3D & {
        frameId?: string;
    }): void;
    addRobot(robotModel: URDFCore<Object3D>): void;
    setFixedFrame(): void;
}
export default TfViewer;
