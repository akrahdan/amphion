import { MarkerObjectType } from './markerTypes';
import { Object3D } from 'three';
export default class MarkerManager {
    object: Object3D;
    private readonly onChangeCb;
    private readonly objectMap;
    private namespaces;
    private readonly markerLifetime;
    constructor(rootObject: Object3D, onChangeCb: () => void);
    onMarkerLifetimeOver(id: string): void;
    getMarkerOrCreate(marker: RosMessage.Marker): MarkerObjectType;
    extractNameSpace(str: string): string;
    updateOptions(options: {
        namespaces: {
            [p: string]: boolean;
        };
    }): void;
    onChange(): void;
    updateMarker(marker: RosMessage.Marker): void;
    removeObject(id: string): void;
    reset(): void;
    static getId(marker: RosMessage.Marker): string;
}
