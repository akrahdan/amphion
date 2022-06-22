import { BufferGeometry } from 'three';
import './attachPCL';
export declare const getAccessorForDataType: (dataView: DataView, dataType: number) => (byteOffset: number, littleEndian?: boolean | undefined) => number;
export declare const updateGeometryAttribute: (geometry: BufferGeometry, attributeName: string, data: Float32Array, l: number) => void;
export declare class PCLDecoder {
    static decode(message: RosMessage.PointCloud2, colorChannel: string, useRainbow: boolean): {
        positions: Float32Array;
        colors: Float32Array;
        normals: Float32Array;
    };
    static attachDecoder(module: any): void;
}
