import { MeshStandardMaterial, SphereGeometry } from 'three';
import Mesh from './Mesh';
declare class Sphere extends Mesh {
    readonly geometry: SphereGeometry;
    readonly material: MeshStandardMaterial;
    constructor();
}
export default Sphere;
