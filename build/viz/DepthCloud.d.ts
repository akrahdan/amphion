import DepthCloudObject from '../primitives/DepthCloudObject';
import LiveCore from '../core/live';
declare class DepthCloud extends LiveCore<{}, DepthCloudObject> {
    private url;
    constructor(url: string, options?: {
        streamType: string;
        f: number;
        maxDepthPerTile: number;
        pointSize: number;
        width: number;
        height: number;
        whiteness: number;
        varianceThreshold: number;
    });
    subscribe: () => void;
    unsubscribe: () => void;
}
export default DepthCloud;
