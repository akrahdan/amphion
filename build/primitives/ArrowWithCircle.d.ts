import { MeshStandardMaterial } from 'three';
import Arrow from './Arrow';
declare class ArrowWithCircle extends Arrow {
    private readonly circleCone;
    readonly material: MeshStandardMaterial;
    private readonly torus;
    constructor();
    setTorusDimensions(args: {
        radius: number;
        tube: number;
    }): void;
    setCircleConeDimensions(args: {
        radius: number;
        length: number;
    }): void;
    setColor(args: {
        [object: string]: RosMessage.Color | string;
    }): void;
    setAlpha(alpha: number): void;
}
export default ArrowWithCircle;
