import Group from '../primitives/Group';
import LiveCore from '../core/live';
import { DataSource } from '../data';
declare class Range extends LiveCore<RosMessage.Range, Group> {
    private readonly cylinder;
    constructor(source: DataSource<RosMessage.Range>, options?: {
        color: string;
        alpha: number;
    });
    update(message: RosMessage.Range): void;
}
export default Range;
