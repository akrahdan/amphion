import { CylinderGeometry, MeshStandardMaterial } from 'three';
import Mesh from './Mesh';
declare class Cylinder extends Mesh {
    geometry: CylinderGeometry;
    material: MeshStandardMaterial;
    constructor(color?: string, radius?: number, height?: number);
}
export default Cylinder;
