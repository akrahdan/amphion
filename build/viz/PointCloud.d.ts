import { Points } from 'three';
import LiveCore from '../core/live';
import { DataSource } from '../data';
declare class PointCloud extends LiveCore<RosMessage.PointCloud2, Points> {
    constructor(source: DataSource<RosMessage.PointCloud2>, options?: {
        compression: string;
        colorChannel: string;
        size: number;
        useRainbow: boolean;
        queueSize: number;
    });
    updatePointCloudGeometry(positions: Float32Array, colors: Float32Array, normals: Float32Array): void;
    update: (message: RosMessage.PointCloud2) => void;
}
export default PointCloud;
