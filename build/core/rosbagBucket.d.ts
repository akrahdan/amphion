export interface BagReadResult {
    topic: string;
    message: RosMessage.Base;
    timestamp: {
        sec: number;
        nsec: number;
    };
    data: number[];
    chunkOffset: number;
    totalChunks: number;
}
declare type Reader = (file: File, result: BagReadResult) => void;
export default class RosbagBucket {
    files: Set<File>;
    topics: Array<{
        name: string;
        messageType: string;
        rosbagFileName: string;
    }>;
    private readers;
    private firstBagReadResult;
    addFile: (file: File) => Promise<void>;
    removeFile: (file: File, cb: () => void) => Promise<void>;
    addReader: (topic: string, fileName: string, reader: Reader) => void;
    removeReader: (topic: string, fileName: string, reader: Reader) => void;
    processQueue: (file: File) => void;
    enqueueProcessing: (index: number, file: File) => void;
    processBagReadResult: (result: BagReadResult, file: File) => void;
    processFile(file: File): Promise<void>;
}
export {};
