import Plane from '../primitives/Plane';
import LiveCore from '../core/live';
import { RosTopicDataSource } from '../data/rosTopic';
declare class Map extends LiveCore<RosMessage.OccupancyGrid, Plane> {
    private cachedMessage;
    constructor(source: RosTopicDataSource<RosMessage.OccupancyGrid>, options?: {
        alpha: number;
        colorScheme: string;
        compression: string;
        drawBehind: boolean;
    });
    updateOptions(options: {
        [k: string]: any;
    }): void;
    updateCanvasDimensions(message: RosMessage.OccupancyGrid): void;
    setCanvasData(message: RosMessage.OccupancyGrid): void;
    update(message: RosMessage.OccupancyGrid): void;
}
export default Map;
