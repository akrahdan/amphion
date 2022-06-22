import Group from './Group';
import Arrow from './Arrow';
declare class TfFrame extends Group {
    readonly arrow: Arrow;
    constructor(frameId: string);
    static getName(frameId: string): string;
}
export default TfFrame;
