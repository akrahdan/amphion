import {
  Color,
  BufferGeometry,
  Line as ThreeLine,
  LineBasicMaterial,
  Vector3,
  Float32BufferAttribute,
} from 'three';

import * as TransformUtils from '../utils/transform';
import { assertIsMaterial } from '../utils/helpers';
import { DEFAULT_BUFFERATTRIBUTE_SIZE, DEFAULT_COLOR_LINE, MAX_BUFFERATTRIBUTE_SIZE } from '../utils/constants';

class Line extends ThreeLine {
  public readonly geometry: BufferGeometry;
  public readonly material: LineBasicMaterial;
  public bufferSize: number;

  constructor(
    color: string | number | null | RosMessage.Color = DEFAULT_COLOR_LINE,
    disableVertexColor: boolean = false,
  ) {
    super();
    this.geometry = new BufferGeometry();
    this.bufferSize = DEFAULT_BUFFERATTRIBUTE_SIZE;
    const colorOptions: { vertexColors?: boolean } = {};
    this.initNewBufferAttributes();

    if (!disableVertexColor) {
      colorOptions.vertexColors = true;
    }

    this.material = new LineBasicMaterial({ ...colorOptions });
    this.material.transparent = true;
    this.setColor(color);
  }

  initNewBufferAttributes = () => {
    const positions = new Float32Array( this.bufferSize * 3 );
    this.geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    const colors = new Float32Array( this.bufferSize * 3 );
    this.geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  }

  setColor(color: string | number | null | RosMessage.Color) {
    if (!color) {
      return;
    }
    TransformUtils.setColor(this, color);
  }

  updatePoints(
    points: RosMessage.Point[],
    colors: Array<string | number | null | RosMessage.Color> = [],
  ) {
    if(this.bufferSize < points.length) {
      this.bufferSize = Math.min(points.length, MAX_BUFFERATTRIBUTE_SIZE);
      this.initNewBufferAttributes();
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
    for(let i = 0; i < Math.min(colors.length, this.bufferSize); i++) {
      const c = colors[i];
      if (typeof c === 'string' || typeof c === 'number') {
        const { r, g, b } = new Color(c);
        colorArray[3 * i] = r;
        colorArray[3 * i + 1] = g;
        colorArray[3 * i + 2] = b;
      } else if (c) {
        const { r, g, b } = c;
        colorArray[3 * i] = r;
        colorArray[3 * i + 1] = g;
        colorArray[3 * i + 2] = b;
      }
    }
    this.geometry.attributes.color.needsUpdate = true;

    this.geometry.setDrawRange( 0, this.bufferSize );
  }

  setTransform(transform: TransformUtils.Transform) {
    TransformUtils.setTransform(this, transform);
  }

  setAlpha(alpha: number) {
    assertIsMaterial(this.material);
    this.material.opacity = alpha;
  }
}

export default Line;
