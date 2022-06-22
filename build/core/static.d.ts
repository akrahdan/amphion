import { Object3D } from 'three';
interface CoreOptions {
    options?: {
        [k: string]: any;
    };
}
declare class StaticCore<V extends Object3D | HTMLElement> {
    protected options: {
        [k: string]: any;
    };
    object?: V;
    constructor(args: CoreOptions);
    hide: () => void;
    show: () => void;
    destroy: () => void;
    reset: () => void;
    updateOptions(options: {
        [k: string]: any;
    }): void;
}
export default StaticCore;
