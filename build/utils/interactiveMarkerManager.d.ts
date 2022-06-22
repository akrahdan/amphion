import { ControlsManager } from 'three-freeform-controls';
import { Euler, Object3D } from 'three';
import Group from '../primitives/Group';
import MarkerManager from './markerManager';
import Controls from 'three-freeform-controls/dist/types/controls';
import TfViewer from '../viewers/Tf';
export default class InteractiveMarkerManager {
    object: Object3D;
    private readonly markerManagerMap;
    private readonly controlsMap;
    private readonly objectMap;
    private readonly viewer;
    private readonly hideOtherHandlesOnSelect;
    private readonly hideOtherControlsInstancesOnSelect;
    visible: boolean;
    namespaces: {
        [p: string]: boolean;
    };
    callback: () => void;
    constructor(rootObject: Object3D, viewer: TfViewer, options: any);
    getMarkerManagerOrCreate(interactiveMarkerName: string): {
        manager: MarkerManager;
        object: Group & {
            frameId?: string | undefined;
        };
    };
    onChange(): void;
    onNamespaceChange(callback: () => void): void;
    initMarkers(interactiveMarker: RosMessage.InteractiveMarker, controlsManager: ControlsManager, visible: boolean): void;
    setVisible(visible: boolean): void;
    updatePose(markerMessage: RosMessage.InteractiveMarkerPose): void;
    static enableControls(object: Object3D, interactionMode: number, orientationMode: number, controlName: string, controls: Controls, givenColor: string): void;
    static getAlignmentColor(rotation: Euler): "red" | "green" | "blue" | null;
    removeObject(id: string): void;
    reset(destroy: boolean): void;
}
