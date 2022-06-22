import { Geometry, Material, MeshBasicMaterial, TextGeometry } from 'three';
import Mesh from './Mesh';
declare class Text extends Mesh {
    geometry: TextGeometry | Geometry;
    material: MeshBasicMaterial | Material;
    constructor(text: string);
}
export default Text;
