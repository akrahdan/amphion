import { LoadingManager, Object3D } from 'three';
import { Ros } from 'roslib';
import URDFLoader from 'urdf-js/umd/URDFLoader';
declare class URDFCore<V extends Object3D> extends URDFLoader {
    private readonly param;
    protected options: {
        [k: string]: any;
    };
    private urdfObject?;
    private readonly packages;
    object?: V;
    constructor(ros: Ros, paramName: string, options?: any);
    onComplete(object: Object3D): void;
    loadFromParam(onComplete?: (object: Object3D) => void, options?: {}): void;
    loadURDF(urdfString: string, onComplete: ((object: Object3D) => void) | undefined, options: any): void;
    defaultLoadMeshCallback(path: string, ext: LoadingManager, done: (mesh: Object3D) => void): void;
    getPackages(onComplete: (packages: string[]) => void): void;
    hide: () => void;
    show: () => void;
    destroy: () => void;
    reset: () => void;
    updateOptions(options: {
        [k: string]: any;
    }): void;
}
export default URDFCore;
