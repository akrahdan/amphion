import { DoubleSide, BufferGeometry, MeshBasicMaterial, Vector3, Float32BufferAttribute } from 'three';

import Mesh from './Mesh';

class Triangle extends Mesh {
  constructor(sides: RosMessage.Point[]) {
    super();
    this.geometry = new BufferGeometry();

    const positionArray: number[] = [];
    sides.forEach(
      side => {
        positionArray.push(side.x, side.y, side.z);
      }
    )
    this.geometry.setIndex([0, 1, 2]);
    this.geometry.setAttribute('position', new Float32BufferAttribute(positionArray, 3));
    // this.geometry.setAttribute( 'normal', new Float32BufferAttribute( [0, 0, 1], 3 ) );
    this.material = new MeshBasicMaterial();
    this.material.side = DoubleSide;
    this.rotateX(Math.PI / 2);
  }
}

export default Triangle;
