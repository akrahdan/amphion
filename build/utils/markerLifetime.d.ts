export default class MarkerLifetime {
    private readonly timeouts;
    private readonly onTimeout;
    constructor(onTimeout: (id: string) => void);
    track(id: string, timeoutSecs: number): void;
    untrack(id: string): void;
    destroy(): void;
}
