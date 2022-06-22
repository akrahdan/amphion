import { BoxGeometry, MeshStandardMaterial } from 'three';
import Mesh from './Mesh';
declare class Box extends Mesh {
    readonly geometry: BoxGeometry;
    readonly material: MeshStandardMaterial;
    constructor();
}
export default Box;
