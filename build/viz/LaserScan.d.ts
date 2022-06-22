import { Color } from 'three';
import Group from '../primitives/Group';
import LiveCore from '../core/live';
import { DataSource } from '../data';
declare class LaserScan extends LiveCore<RosMessage.LaserScan, Group> {
    private points;
    private readonly sphereList;
    private readonly cubeList;
    private cachedMessage;
    constructor(source: DataSource<RosMessage.LaserScan>, options?: {
        axis: string;
        autocomputeValueBounds: boolean;
        useFixedFrame: boolean;
        minAxisValue: number;
        maxAxisValue: number;
        channelName: string;
        useRainbow: boolean;
        invertRainbow: boolean;
        minColor: string;
        maxColor: string;
        autocomputeIntensityBounds: boolean;
        maxIntensity: number;
        minIntensity: number;
        selectable: boolean;
        style: string;
        size: number;
        alpha: number;
        decayTime: number;
        queueSize: number;
        compression: string;
        colorTransformer: string;
        flatColor: string;
    });
    getNormalizedIntensity(intensity: number): number;
    applyIntensityTransform(intensity: number, position: RosMessage.Point): Color;
    getNormalizedAxisValue(axisValue: number): number;
    applyAxisColorTransform(intensity: number, position: RosMessage.Point): Color;
    colorTransformer(intensity: number, position: RosMessage.Point): Color | null;
    setupPoints(index: number, position: RosMessage.Point, color: RosMessage.Color | null): void;
    hideAllObjects(): void;
    setStyleDimensions(message: RosMessage.LaserScan): void;
    updateOptions(options: {
        [p: string]: any;
    }): void;
    update(message: RosMessage.LaserScan): void;
}
export default LaserScan;
