import Cube from '../primitives/Cube';
import Sphere from '../primitives/Sphere';
import Group from '../primitives/Group';
import LineSegments from '../primitives/LineSegment';
import Line from '../primitives/Line';
import SphereList from '../primitives/SphereList';
import Points from '../primitives/Points';
import TriangleList from '../primitives/TriangleList';
import CubeList from '../primitives/CubeList';
import Arrow from '../primitives/Arrow';
import ViewFacingText from '../primitives/ViewFacingText';
export declare type MarkerObjectType = Cube | Sphere | Group | LineSegments | Line | SphereList | Points | TriangleList | CubeList | ViewFacingText | Arrow;
declare const getNewPrimitive: (marker: RosMessage.Marker) => MarkerObjectType;
export default getNewPrimitive;
