import { Ros } from 'roslib';
import { Object3D } from 'three';
declare class LegacyCore {
    options: {
        [p: string]: any;
    };
    readonly ros: Ros | null;
    private headerFrameId;
    private readonly onHeaderChange;
    object?: Object3D | null;
    private dataSourceInstances?;
    topicName?: string | Array<{
        name: string;
        messageType: string;
    }>;
    messageType?: string;
    constructor(ros: Ros | null, resourceName: string | null, messageType: string, options?: {
        [p: string]: any;
    });
    hide(): void;
    show(): void;
    destroy(): void;
    reset(): void;
    subscribe(): void;
    unsubscribe(): void;
    update(message: RosMessage.Base): void;
    updateOptions(options: {
        [p: string]: any;
    }): void;
    changeTopic(resourceName: string | Array<{
        name: string;
        messageType: string;
    }>, type: string, autoSubscribe?: boolean): void;
}
export default LegacyCore;
