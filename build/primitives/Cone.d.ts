import { ConeGeometry, MeshStandardMaterial } from 'three';
import Mesh from './Mesh';
declare class Cone extends Mesh {
    readonly material: MeshStandardMaterial;
    readonly geometry: ConeGeometry;
    constructor(color?: string);
}
export default Cone;
