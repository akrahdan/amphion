import Group from '../primitives/Group';
import LiveCore from '../core/live';
import { DataSource } from '../data';
declare class MarkerArray extends LiveCore<RosMessage.MarkerArray, Group> {
    private markerManager;
    private onNameSpaceChange?;
    constructor(source: DataSource<RosMessage.MarkerArray>, options?: {
        queueSize: number;
        namespaces: never[];
        throttleRate: number;
    });
    updateOptions(options: {
        [p: string]: any;
    }): void;
    update(message: RosMessage.MarkerArray): void;
    reset: () => void;
}
export default MarkerArray;
