import { Geometry, MeshBasicMaterial } from 'three';
import Mesh from './Mesh';
declare class TriangleList extends Mesh {
    readonly geometry: Geometry;
    readonly material: MeshBasicMaterial;
    constructor();
    updatePoints(points: RosMessage.Point[], colors: RosMessage.Color[] | undefined, options: {
        scale: RosMessage.Point;
    }): void;
}
export default TriangleList;
