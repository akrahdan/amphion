import Group from '../primitives/Group';
import LiveCore from '../core/live';
import { DataSource } from '../data';
declare class Path extends LiveCore<RosMessage.Path, Group> {
    private readonly line;
    constructor(source: DataSource<RosMessage.Path>, options?: {
        color: string;
        alpha: number;
    });
    updateOptions(options: {
        [p: string]: any;
    }): void;
    update(message: RosMessage.Path): void;
}
export default Path;
