import { Group as ThreeGroup } from 'three';
declare class Group extends ThreeGroup {
    setTransform(transform: {
        translation: RosMessage.Point;
        rotation: RosMessage.Quaternion;
    }): void;
    setScale(scale: RosMessage.Point): void;
    setColor(colors: RosMessage.Color): void;
}
export default Group;
