import {
  BufferGeometry,
  Points as ThreePoints,
  PointsMaterial,
  Float32BufferAttribute,
} from 'three';

import * as TransformUtils from '../utils/transform';
import { DEFAULT_BUFFERATTRIBUTE_SIZE, MAX_BUFFERATTRIBUTE_SIZE } from '../utils/constants';

class Points extends ThreePoints {
  public readonly geometry: BufferGeometry;
  public readonly material: PointsMaterial;
  public bufferSize: number;

  constructor() {
    super();
    this.geometry = new BufferGeometry();
    this.bufferSize = DEFAULT_BUFFERATTRIBUTE_SIZE;
    this.material = new PointsMaterial({
      vertexColors: true,
    });
    this.initNewBufferAttributes();
  }

  initNewBufferAttributes = () => {
    const positions = new Float32Array( this.bufferSize * 3 );
    this.geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    const colors = new Float32Array( this.bufferSize * 3 );
    this.geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  }

  setTransform(transform: TransformUtils.Transform) {
    TransformUtils.setTransform(this, transform);
  }

  updatePoints(
    points: RosMessage.Point[],
    colors: RosMessage.Color[],
    options: { scale: RosMessage.Point },
  ) {
    const {
      scale: { x },
    } = options;

    this.material.size = x;


    if(this.bufferSize < points.length) {
      this.bufferSize = Math.min(points.length, MAX_BUFFERATTRIBUTE_SIZE);
      this.initNewBufferAttributes();
    } else {
      this.bufferSize = points.length;
    }
    const positionArray: any = this.geometry.attributes.position.array;
    for(let i = 0; i < this.bufferSize; i++) {
      const { x, y, z } = points[i];
      positionArray[3 * i] = x;
      positionArray[3 * i + 1] = y;
      positionArray[3 * i + 2] = z;
    }
    this.geometry.attributes.position.needsUpdate = true;

    const colorArray: any = this.geometry.attributes.color.array;
    if (colors.length > 0) {
      for(let i = 0; i < Math.min(colors.length, this.bufferSize); i++) {
        const { r, g, b } = colors[i];
        colorArray[3 * i] = r;
        colorArray[3 * i + 1] = g;
        colorArray[3 * i + 2] = b;
      }
      this.geometry.attributes.color.needsUpdate = true;
    }

    this.geometry.setDrawRange( 0, this.bufferSize );
  }

  setScale(scale: RosMessage.Point | number) {
    if (typeof scale === 'number') {
      this.material.size = scale;
    } else {
      this.material.size = scale.x;
    }
  }
}

export default Points;
