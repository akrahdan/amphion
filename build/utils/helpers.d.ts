import { BufferAttribute, BufferGeometry, Material, Mesh, MeshBasicMaterial, Object3D, Quaternion, TorusGeometry, Vector3 } from 'three';
export declare const checkToleranceThresholdExceed: (oldPose: {
    position: Vector3;
    quaternion: Quaternion;
}, newPose: {
    position: Vector3;
    quaternion: Quaternion;
}, options: any) => boolean;
export declare const setObjectDimension: (object: any, options: any) => void;
export declare const removeChildren: (object: any) => void;
export declare function assertIsDefined<T>(val: T): asserts val is NonNullable<T>;
export declare function assertIsMesh(val: any): asserts val is Mesh;
export declare function assertIsMaterial(val: any): asserts val is Material;
export declare function assertIsMeshBasicMaterial(val: any): asserts val is MeshBasicMaterial;
export declare function assertIsMaterialWithColor(val: any): asserts val is MeshBasicMaterial;
export declare function assertBehavesLikeArray<T>(val: any): asserts val is Array<T>;
export declare function isObject3D(val: any): val is Object3D;
export declare function isHTMLElement(val: any): val is HTMLElement;
export declare function assertIsTorusGeometry(val: any): asserts val is TorusGeometry;
export declare function assertIsHTMLVideoElement(val: any): asserts val is HTMLVideoElement;
export declare function assertIsBufferGeometry(val: any): asserts val is BufferGeometry;
export declare function assertIsBufferAttribute(val: any): asserts val is BufferAttribute;
