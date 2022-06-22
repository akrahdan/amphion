import { BoxGeometry, MeshStandardMaterial } from 'three';
import Mesh from './Mesh';
declare class Cube extends Mesh {
    readonly geometry: BoxGeometry;
    readonly material: MeshStandardMaterial;
    constructor();
}
export default Cube;
