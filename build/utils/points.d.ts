import { BufferAttribute, Object3D } from 'three';
declare class Points {
    private readonly maxPts;
    readonly rootObject: Object3D;
    positions?: BufferAttribute;
    colors?: BufferAttribute;
    private geometry?;
    private material?;
    private object?;
    constructor(options?: {
        max_pts?: number;
        rootObject?: Object3D;
    });
    setup(type: string, size: number, alpha: number): void;
    update(l: number): void;
    setAlpha(alpha: number): void;
    setSize(size: number): void;
}
export default Points;
