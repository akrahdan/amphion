import { DataSource } from './index';
import { Message, Ros } from 'roslib';
import { Listener } from 'xstream';
interface RosTopicDataSourceOptions {
    ros: Ros;
    topicName: string;
    messageType: string;
    memory?: boolean;
    compression?: 'png' | 'cbor';
    throttleRate?: number;
    queueSize?: number;
    queueLength?: number;
}
export declare class RosTopicDataSource<T extends Message> implements DataSource<T> {
    readonly createdAt: Date;
    readonly hasMemory: boolean;
    private readonly ros;
    private readonly topic;
    private readonly producer;
    private stream;
    private isStreamLive;
    private isStreamPaused;
    private internalListener;
    private readonly listeners;
    private readonly rosConnectionHook;
    private rosCloseHook;
    private rosErrorHook;
    constructor(options: RosTopicDataSourceOptions);
    private addRosHealthHooks;
    private removeRosHealthHooks;
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
    private cleanStream;
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
