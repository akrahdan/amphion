import { BufferGeometry, Color } from 'three';
import { POINT_FIELD_DATATYPES, POINTCLOUD_COLOR_CHANNELS } from './constants';
import { assertIsBufferAttribute } from './helpers';
// import { get_memory as getMemory, PCLDecoder as PCLDecoderWasm } from '../lib/pcl-decoder';
// import './attachPCL';

// if (!window.WebAssembly) {
//   import('pcl-decoder').then(module => {
//     PCLDecoder.attachDecoder(module);
//   });
// }

export const getAccessorForDataType = (
  dataView: DataView,
  dataType: number,
) => {
  switch (dataType) {
    case POINT_FIELD_DATATYPES.INT8: {
      return dataView.getInt8;
    }
    case POINT_FIELD_DATATYPES.UINT8: {
      return dataView.getUint8;
    }
    case POINT_FIELD_DATATYPES.INT16: {
      return dataView.getInt16;
    }
    case POINT_FIELD_DATATYPES.UINT16: {
      return dataView.getUint16;
    }
    case POINT_FIELD_DATATYPES.INT32: {
      return dataView.getInt32;
    }
    case POINT_FIELD_DATATYPES.UINT32: {
      return dataView.getUint32;
    }
    case POINT_FIELD_DATATYPES.FLOAT64: {
      return dataView.getFloat64;
    }
    case POINT_FIELD_DATATYPES.FLOAT32:
    default: {
      return dataView.getFloat32;
    }
  }
};

export const updateGeometryAttribute = (
  geometry: BufferGeometry,
  attributeName: string,
  data: Float32Array,
  l: number,
) => {
  const attribute = geometry.attributes[attributeName];
  assertIsBufferAttribute(attribute);
  attribute.updateRange = {
    offset: 0,
    count: l * 3,
  };
  attribute.count = l;
  attribute.array = data;
  attribute.needsUpdate = true;
};

// const pclDecoderModule = new PCLDecoderWasm();
// const memory = getMemory();
export class PCLDecoder {
  static decode(
    message: RosMessage.PointCloud2,
    colorChannel: string,
    useRainbow: boolean,
  ) {
    const n = message.height * message.width;
    const positions = new Float32Array(3 * n);
    const colors = new Float32Array(3 * n);
    const normals = new Float32Array(3 * n);

    const uint8Buffer = Uint8Array.from(message.data).buffer;
    const dataView = new DataView(uint8Buffer);
    const offsets: {
      x?: number;
      y?: number;
      z?: number;
      rgb?: number;
      intensity?: number;
      normal_x?: number;
      normal_y?: number;
      normal_z?: number;
    } = {};
    const accessor: {
      [p: string]: (
        this: DataView,
        byteOffset: number,
        littleEndian?: boolean,
      ) => number;
    } = {};

    const rgbCache = new Color();

    message.fields.forEach(f => {
      offsets[f.name as keyof typeof offsets] = f.offset;
      accessor[f.name] = getAccessorForDataType(dataView, f.datatype);
    });

    for (let i = 0; i < n; i++) {
      const stride = i * message.point_step;
      if (
        offsets.x !== undefined &&
        offsets.y !== undefined &&
        offsets.z !== undefined
      ) {
        positions[3 * i] = accessor.x.call(
          dataView,
          stride + offsets.x,
          !message.is_bigendian,
        );
        positions[3 * i + 1] = accessor.y.call(
          dataView,
          stride + offsets.y,
          !message.is_bigendian,
        );
        positions[3 * i + 2] = accessor.z.call(
          dataView,
          stride + offsets.z,
          !message.is_bigendian,
        );
      }

      if (
        offsets.rgb !== undefined &&
        colorChannel === POINTCLOUD_COLOR_CHANNELS.RGB
      ) {
        colors[3 * i] = dataView.getUint8(stride + offsets.rgb + 2) / 255.0;
        colors[3 * i + 1] = dataView.getUint8(stride + offsets.rgb + 1) / 255.0;
        colors[3 * i + 2] = dataView.getUint8(stride + offsets.rgb) / 255.0;
      }

      if (
        offsets.intensity !== undefined &&
        colorChannel === POINTCLOUD_COLOR_CHANNELS.INTENSITY
      ) {
        const intensity = accessor.intensity.call(
          dataView,
          stride + offsets.intensity,
          !message.is_bigendian,
        );

        const normalizedIntensity = Math.min(intensity, 360) / 360;

        if (useRainbow) {
          const rgb = rgbCache
            .setHSL(normalizedIntensity, 1.0, 0.5)
            .toArray()
            .map(x => x * 255);
          colors[3 * i] = rgb[0] / 255;
          colors[3 * i + 1] = rgb[1] / 255;
          colors[3 * i + 2] = rgb[2] / 255;
        } else {
          colors[3 * i] = normalizedIntensity / 360;
          colors[3 * i + 1] = normalizedIntensity / 360;
          colors[3 * i + 2] = normalizedIntensity / 360;
        }
      }

      if (
        offsets.normal_x !== undefined &&
        offsets.normal_y !== undefined &&
        offsets.normal_z !== undefined
      ) {
        normals[3 * i] = accessor.normal_x.call(
          dataView,
          stride + offsets.normal_x,
          !message.is_bigendian,
        );
        normals[3 * i + 1] = accessor.normal_y.call(
          dataView,
          stride + offsets.normal_y,
          !message.is_bigendian,
        );
        normals[3 * i + 2] = accessor.normal_z.call(
          dataView,
          stride + offsets.normal_z,
          !message.is_bigendian,
        );
      }
    }
    return { positions, colors, normals };
  }

  // TODO: Enable after figuring out wasm build errors
  // static decode = (
  //     message: RosMessage.PointCloud2,
  //     colorChannel: string,
  //     useRainbow: boolean,
  // ) => {
  //   const n = message.height * message.width;
  //   const offsets: { [p: string]: number } = {};
  //   const normals = new Float32Array(3 * n);
  //
  //   message.fields.forEach(f => {
  //     offsets[f.name] = f.offset;
  //   });
  //
  //   const memoryTypedArray = new Uint8Array(memory.buffer);
  //
  //   const copyMemPtr = pclDecoderModule.get_copy_memory_ptr();
  //
  //   memoryTypedArray.set(message.data, copyMemPtr);
  //   pclDecoderModule.compute(
  //     n,
  //     message.point_step,
  //     offsets.x,
  //     offsets.y,
  //     offsets.z,
  //     offsets.rgb || 0,
  //     offsets.intensity || 0,
  //     colorChannel === POINTCLOUD_COLOR_CHANNELS.INTENSITY,
  //     useRainbow,
  //   );
  //   const positionMemPointer = pclDecoderModule.get_position_memory_ptr();
  //   const colorMemPointer = pclDecoderModule.get_color_memory_ptr();
  //   const positions = new Float32Array(
  //     memory.buffer,
  //     positionMemPointer,
  //     3 * n,
  //   );
  //   const invalidChannel =
  //     (colorChannel === POINTCLOUD_COLOR_CHANNELS.INTENSITY &&
  //       !offsets.intensity) ||
  //     (colorChannel === POINTCLOUD_COLOR_CHANNELS.RGB && !offsets.rgb);
  //   const colors = invalidChannel
  //     ? new Float32Array(3 * n)
  //     : new Float32Array(memory.buffer, colorMemPointer, 3 * n);
  //   return { positions, colors, normals };
  // };

  // static attachDecoder(module: any) {
  //   const { get_memory: getMemory, PCLDecoder: PCLDecoderWasm } = module;
  //   const pclDecoderModule = new PCLDecoderWasm();
  //   const memory = getMemory();
  //
  //   PCLDecoder.
  // }
}
