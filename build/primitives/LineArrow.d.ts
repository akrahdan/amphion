import Group from './Group';
declare class LineArrow extends Group {
    private objectType;
    private readonly arrowTop;
    private readonly topPoints;
    private readonly arrowLength;
    constructor();
    setLength(length: number): void;
    setColor(color: RosMessage.Color): void;
}
export default LineArrow;
