import { Mesh as THREEMesh } from 'three';
declare class Mesh extends THREEMesh {
    setTransform(transform: {
        translation: RosMessage.Point;
        rotation: RosMessage.Quaternion;
    }): void;
    setScale(scale?: RosMessage.Point): void;
    setColor(colors: RosMessage.Color | string | null): void;
    setAlpha(alpha: number): void;
}
export default Mesh;
