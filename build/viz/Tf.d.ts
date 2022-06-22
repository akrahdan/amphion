import { Group } from 'three';
import TfFrame from '../primitives/TfFrame';
import LiveCore from '../core/live';
import { DataSource } from '../data';
declare class Tf extends LiveCore<RosMessage.TFMessage, Group> {
    constructor(source: DataSource<RosMessage.TFMessage>, options?: {});
    update(message: RosMessage.TFMessage): void;
    getFrameOrCreate(frameId: string): TfFrame;
}
export default Tf;
