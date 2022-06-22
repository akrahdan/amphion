import Mesh from './Mesh';
declare class CubeList extends Mesh {
    private readonly objectCacher;
    constructor();
    updatePoints(points: RosMessage.Point[], colors: Array<RosMessage.Color | null>, options: {
        scale?: RosMessage.Point;
    }): void;
}
export default CubeList;
