import { DataSource } from '../data';
import { Object3D } from 'three';
interface CoreOptions<T> {
    sources: Array<DataSource<T>>;
    options?: {
        [k: string]: any;
    };
}
declare class LiveCore<T extends RosMessage.Base, V extends Object3D | HTMLElement> {
    private onHeaderChange;
    private sources;
    protected options: {
        [k: string]: any;
    };
    private headerFrameId;
    object?: V;
    constructor(args: CoreOptions<T>);
    hide: () => void;
    show: () => void;
    destroy: () => void;
    reset: () => void;
    subscribe: () => void;
    unsubscribe: () => void;
    update(message: T): void;
    updateOptions(options: {
        [k: string]: any;
    }): void;
    changeSources(sources: Array<DataSource<T>>): void;
}
export default LiveCore;
