import {
  DoubleSide,
  BufferGeometry,
  MeshBasicMaterial,
  Float32BufferAttribute, Color,
} from 'three';

import Mesh from './Mesh';
import { DEFAULT_BUFFERATTRIBUTE_SIZE, MAX_BUFFERATTRIBUTE_SIZE } from '../utils/constants';

class TriangleList extends Mesh {
  public readonly geometry: BufferGeometry;
  public readonly material: MeshBasicMaterial;
  public bufferSize: number;

  constructor() {
    super();
    this.geometry = new BufferGeometry();
    this.bufferSize = DEFAULT_BUFFERATTRIBUTE_SIZE;
    this.initNewBufferAttributes();
    this.material = new MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
    });
    this.material.side = DoubleSide;
  }

  initNewBufferAttributes = () => {
    const positions = new Float32Array( this.bufferSize * 3 );
    this.geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    const colors = new Float32Array( this.bufferSize * 3 );
    this.geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  }

  updatePoints(
    points: RosMessage.Point[],
    colors: RosMessage.ColorRGBA[] = [],
    options: { scale: RosMessage.Point },
  ) {
    const {
      scale: { x, y, z },
    } = options;

    this.scale.set(x, y, z);

    if(this.bufferSize < points.length) {
      this.bufferSize = Math.min(points.length, MAX_BUFFERATTRIBUTE_SIZE);
      this.initNewBufferAttributes();
    } else {
      this.bufferSize = points.length;
    }
    const positionArray: any = this.geometry.attributes.position.array;
    for(let i = 0; i < this.bufferSize; i++) {
      const { x, y, z } = points[i];
      positionArray.set([x, y, z], 3 * i);
    }
    this.geometry.attributes.position.needsUpdate = true;

    this.geometry.setIndex([...Array(points.length).keys()]);

    const colorArray: any = this.geometry.attributes.color.array;
    for(let i = 0; i < this.bufferSize; i++) {
      const c = colors[i];
      const { r, g, b, a } = c;
      colorArray.set([r, g, b], 3 * i);
      // TODO: Handle alpha
    }
    this.geometry.attributes.color.needsUpdate = true;

    this.geometry.setDrawRange( 0, this.bufferSize );

    // const color =
    //   colors.length === 0 ? { r: 1, g: 0, b: 0 } : colors[3 * index];
  }
}

export default TriangleList;
