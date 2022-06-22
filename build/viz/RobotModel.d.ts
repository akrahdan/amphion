import { Ros } from 'roslib';
import { Object3D } from 'three';
import URDFCore from '../core/urdf';
declare class RobotModel extends URDFCore<Object3D> {
    constructor(ros: Ros, paramName: string, options?: {});
}
export default RobotModel;
