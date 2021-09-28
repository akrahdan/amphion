import {
  Color,
  BufferGeometry,
  LineBasicMaterial,
  LineSegments as ThreeLineSegments,
  Vector3, Float32BufferAttribute,
} from 'three';
import * as TransformUtils from '../utils/transform';
import { DEFAULT_BUFFERATTRIBUTE_SIZE, DEFAULT_COLOR_LINE, MAX_BUFFERATTRIBUTE_SIZE } from '../utils/constants';

class LineSegments extends ThreeLineSegments {
  public readonly material: LineBasicMaterial;
  public readonly geometry: BufferGeometry;
  public bufferSize: number;

  constructor(color = DEFAULT_COLOR_LINE, linewidth = 5) {
    super();
    this.geometry = new BufferGeometry();
    this.bufferSize = DEFAULT_BUFFERATTRIBUTE_SIZE;
    this.initNewBufferAttributes();

    this.material = new LineBasicMaterial({ linewidth, vertexColors: true });
  }

  initNewBufferAttributes = () => {
    const positions = new Float32Array( this.bufferSize * 3 );
    this.geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    const colors = new Float32Array( this.bufferSize * 3 );
    this.geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  }

  isValid(points: RosMessage.Point[]) {
    return points.length <= this.geometry.attributes.position.array.length / 3;
  }

  setColor(color: string | number | RosMessage.Color) {
    TransformUtils.setColor(this, color);
  }

  updatePoints(points: RosMessage.Point[], colors: RosMessage.Color[]) {
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

  setTransform(transform: TransformUtils.Transform) {
    TransformUtils.setTransform(this, transform);
  }
}

export default LineSegments;
