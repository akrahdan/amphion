import LiveCore from '../core/live';
import { DataSource } from '../data';
declare class Image extends LiveCore<RosMessage.Image, HTMLCanvasElement> {
    private readonly shadowObject;
    constructor(source: DataSource<RosMessage.Image>, options?: {
        queueSize: number;
        width: number;
        height: number;
        compression: string;
    });
    applyImageData(message: RosMessage.Image): void;
    updateDimensions(width: number, height: number): void;
    update(message: RosMessage.Image): void;
    hide: () => void;
    show: () => void;
}
export default Image;
