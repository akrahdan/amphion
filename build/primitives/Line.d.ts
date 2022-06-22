import { Geometry, Line as ThreeLine, LineBasicMaterial } from 'three';
import * as TransformUtils from '../utils/transform';
declare class Line extends ThreeLine {
    readonly geometry: Geometry;
    readonly material: LineBasicMaterial;
    constructor(color?: string | number | null | RosMessage.Color, disableVertexColor?: boolean);
    setColor(color: string | number | null | RosMessage.Color): void;
    updatePoints(points: RosMessage.Point[], colors?: Array<string | number | null | RosMessage.Color>): void;
    setTransform(transform: TransformUtils.Transform): void;
    setAlpha(alpha: number): void;
}
export default Line;
