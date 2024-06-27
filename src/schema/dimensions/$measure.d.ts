export declare const isDouble: (value?: number) => string;
export declare const multiply: (func: (value?: number) => string) => (factor: number) => (num: number) => number;
export declare const divide: (func: (value?: number) => string) => (factor: number) => (num: number) => number;
export declare const toUOM: <T extends string>(origUOM: T, targetUOM: T, func: (n: number) => number) => (n: number) => {
    original: number;
    originalUOM: T;
    target: number;
    targetUOM: T;
};
export declare const joinUOM: <T extends string>(value: number, uom: T) => string | undefined;
export declare const $measure: {
    convert: {
        length: (n: number) => {
            original: number;
            originalUOM: string;
            target: number;
            targetUOM: string;
        };
        distance: (n: number) => {
            original: number;
            originalUOM: "m" | "ft";
            target: number;
            targetUOM: "m" | "ft";
        };
        weight: (n: number) => {
            original: number;
            originalUOM: "g" | "lb";
            target: number;
            targetUOM: "g" | "lb";
        };
        caliperSize: (n: number) => {
            original: number;
            originalUOM: string;
            target: number;
            targetUOM: string;
        };
        density: (n: number) => {
            original: number;
            originalUOM: string;
            target: number;
            targetUOM: string;
        };
    };
    simplify: {
        weight: (n: number) => {
            uom1: string;
            uom2: string;
            value1: number;
            value2: number;
        };
        duration: (n: number) => {
            uom1: string;
            uom2: string;
            value1: number;
            value2: number;
        };
        runtime: (n: number) => {
            uom1: string;
            uom2: string;
            value1: number;
            value2: number;
        };
    };
};
