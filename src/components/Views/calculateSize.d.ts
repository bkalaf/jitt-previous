export declare function _calculateSize(maxLength: number, pxPerChar?: number): number;
export declare const $calculateSize: (x?: number) => (left: number) => number;
export declare const _calculateBodySize: (left: number) => number;
export declare const calculateBodySize: (opts?: {
    maxLength?: number;
    minLength?: number;
}) => {
    maxSize: number | undefined;
    minSize: number | undefined;
};
export declare const calculateHeadSize: (headerJunkPx?: number) => (header: string) => {
    minSize: number;
};
export declare function calculateSize(maxLength: number): number;
