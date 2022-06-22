import Mesh from './Mesh';
declare class ViewFacingText extends Mesh {
    private color;
    private readonly text;
    constructor(text: string);
    setColor(color: RosMessage.Color): void;
}
export default ViewFacingText;
