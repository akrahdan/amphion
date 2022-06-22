export declare const COLOR_TYPES: {
    OCCUPIED: number;
    UNOCCUPIED: number;
    UNKNOWN: number;
    OTHER: number;
};
export declare const populateImageDataFromNavMsg: (imageData: ImageData, width: number, height: number, dataSource: number[]) => void;
export declare const populateRawImageDataFromNavMsg: (imageData: ImageData, width: number, height: number, dataSource: number[]) => void;
export declare const populateConstImageDataFromNavMsg: (imageData: ImageData, width: number, height: number, dataSource: number[]) => void;
export declare const imageDataToCanvas: (imageData: ImageData) => HTMLCanvasElement;
export declare const populateImageDataFromImageMsg: (message: RosMessage.Image, offset: number, rgbaOrder: number[], imageData: ImageData) => void;
