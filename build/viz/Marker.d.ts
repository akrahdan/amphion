import Group from '../primitives/Group';
import LiveCore from '../core/live';
import { RosTopicDataSource } from '../data/rosTopic';
declare class Marker extends LiveCore<RosMessage.Marker, Group> {
    private markerManager;
    private onNameSpaceChange?;
    constructor(source: RosTopicDataSource<RosMessage.Marker>, options?: {
        queueSize: number;
        namespaces: never[];
    });
    updateOptions(options: {
        [k: string]: any;
    }): void;
    update(message: RosMessage.Marker): void;
    reset: () => void;
}
export default Marker;
