import { DataSource } from './index';
import { Message } from 'roslib';
import { Listener } from 'xstream';
import RosbagBucket from '../core/rosbagBucket';
interface RosBagDataSourceOptions {
    bucket: RosbagBucket;
    memory?: boolean;
    topicName: string;
    fileName: string;
}
export declare class RosbagDataSource<T extends Message> implements DataSource<T> {
    readonly createdAt: Date;
    readonly hasMemory: boolean;
    private readonly bucket;
    private readonly producer;
    private stream;
    private isStreamPaused;
    private internalListener;
    private readonly listeners;
    constructor(options: RosBagDataSourceOptions);
    addListener: (listener: Listener<T>) => {
        success: boolean;
        reason: string;
    } | {
        success: boolean;
        reason?: undefined;
    };
    removeListener: (listener: Listener<T>) => {
        success: boolean;
        reason: string;
    } | {
        success: boolean;
        reason?: undefined;
    };
    removeAllListeners: () => {
        success: boolean;
    };
    pause: () => {
        success: boolean;
    };
    resume: () => {
        success: boolean;
    };
}
export {};
