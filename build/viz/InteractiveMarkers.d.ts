import ROSLIB, { Ros } from 'roslib';
import LegacyCore from '../core';
import Group from '../primitives/Group';
import TfViewer from '../viewers/Tf';
import { Object3D } from 'three';
declare class InteractiveMarkers extends LegacyCore {
    private init;
    readonly object: Group;
    private readonly viewer;
    private readonly interactiveMarkerManager;
    private interactiveMarkersNames;
    private readonly interactiveMarkersFrameIds;
    private readonly clientId;
    private messageSequence;
    private feedbackTopic;
    private readonly debouncedPublish;
    private freeformControls?;
    constructor(ros: Ros, topicName: string, viewer: TfViewer, options?: {
        queueSize: number;
        namespaces: never[];
        throttleRate: number;
        publishThrottleRate: number;
        hideOtherHandlesOnSelect: boolean;
        hideOtherControlsInstancesOnSelect: boolean;
    });
    hide(): void;
    show(): void;
    destroy(): void;
    initFreeformControls(): void;
    static makeInteractiveMarkerFeedbackMessage(args: {
        seq: number;
        frame_id: string;
        client_id: string;
        marker_name: string;
        control_name?: string;
        position: RosMessage.Point;
        quaternion: RosMessage.Quaternion;
    }): ROSLIB.Message;
    static makeInteractiveMarkerFeedbackTopic(ros: Ros, name: string): ROSLIB.Topic<ROSLIB.Message>;
    publish(object: Object3D, handleName: string): void;
    publishManual(pose: {
        position: RosMessage.Point;
        quaternion: RosMessage.Quaternion;
    }): void;
    updateOptions(options: any): void;
    update(message: RosMessage.InteractiveMarker & RosMessage.InteractiveMarkerUpdate): void;
    reset(): void;
}
export default InteractiveMarkers;
