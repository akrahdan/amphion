import Group from './Group';
declare class Axes extends Group {
    private readonly x;
    private readonly y;
    private readonly z;
    readonly objectType = "Axes";
    constructor(radius?: number, height?: number);
    setLength(length: number): void;
    setRadius(radius: number): void;
}
export default Axes;
