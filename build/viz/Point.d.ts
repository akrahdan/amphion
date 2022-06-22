import Group from '../primitives/Group';
import LiveCore from '../core/live';
import { DataSource } from '../data';
declare class Point extends LiveCore<RosMessage.PointStamped, Group> {
    private readonly sphere;
    constructor(source: DataSource<RosMessage.PointStamped>, options?: {
        color: string;
        alpha: number;
        radius: number;
    });
    updateOptions(options: {
        [p: string]: any;
    }): void;
    update(message: RosMessage.PointStamped): void;
}
export default Point;
