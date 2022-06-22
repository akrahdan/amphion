import StaticCore from '../core/static';
declare class ImageStream extends StaticCore<HTMLImageElement> {
    private readonly url;
    constructor(url: string, options?: {
        width: number;
        height: number;
    });
    hide: () => void;
    show: () => void;
}
export default ImageStream;
