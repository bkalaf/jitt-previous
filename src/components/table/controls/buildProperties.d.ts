import { ISku, Opt } from '../../../types';
import { ofDimension, OBSOLETE_ofWeight, ofBattery, ofCableType, ofClothingCare, ofConnector, ofCopyright, ofCurrent, ofHandOrientation, ofIdentity, ofMadeOf, ofMinMax, ofCapacity } from './titleParts';
export declare const properties: ({
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: (value: DBList<import("../../../schema/enums/flags").Flags>) => string | undefined;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: (value: DBList<unknown>) => string | undefined;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: (value: DBList<import("../../../types").IIncludedItem>) => string | undefined;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: (value: DBList<import("../../../schema/enums/flags").Flags>) => string | undefined;
    narrativeFunc: (value: DBList<import("../../../schema/enums/flags").Flags>) => string | undefined;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: (value: DBList<import("../../../schema/enums/flags").Flags>) => string | undefined;
    narrativeFunc: (value: DBList<import("../../../schema/enums/flags").Flags>) => string | undefined;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => {
        length: unknown;
        width: unknown;
        height: unknown;
    };
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: typeof ofDimension;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: typeof OBSOLETE_ofWeight;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: typeof ofIdentity;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: (value: DBList<import("../../../types").IBarcode>) => string | undefined;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: (value: DBList<string>) => string | undefined;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: (value: Opt<Date>) => string | undefined;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: typeof ofClothingCare;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: typeof ofMadeOf;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: (value: Opt<number>) => string | undefined;
    narrativeFunc: (value: Opt<number>) => string | undefined;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: (value?: string | undefined) => string | undefined;
    narrativeFunc: null;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: (value: DBList<string>) => string | undefined;
    narrativeFunc: (value: DBList<unknown>) => string | undefined;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: (value: DBList<import("../../../types").ITrack>) => string | undefined;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => {
        videoFormat: unknown;
        musicFormat: unknown;
        copyright: unknown;
    };
    section: string;
    header: null;
    key: string;
    titleFunc: typeof ofCopyright;
    narrativeFunc: null;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: typeof ofCableType;
    narrativeFunc: typeof ofCableType;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => {
        connectors: unknown;
        cableType: unknown;
    };
    section: string;
    header: string;
    key: string;
    titleFunc: typeof ofConnector;
    narrativeFunc: typeof ofConnector;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: typeof ofCurrent;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: typeof ofCurrent;
    narrativeFunc: typeof ofCurrent;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => {
        batteryCount: unknown;
        batteryType: unknown;
    };
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: typeof ofBattery;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: (value: Opt<DBDictionary<Opt<number | import("../../../types").IPiece>>>) => string | undefined;
    narrativeFunc: (value: Opt<DBDictionary<Opt<number | import("../../../types").IPiece>>>) => string | undefined;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: typeof ofHandOrientation;
    narrativeFunc: (value: Opt<string>) => string | undefined;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: (value: Opt<number>) => string | undefined;
    narrativeFunc: (value: Opt<string>) => string | undefined;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: null;
    narrativeFunc: typeof ofMinMax;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: null;
    key: string;
    titleFunc: null;
    narrativeFunc: null;
    titleIndex: null;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: typeof ofCapacity;
    narrativeFunc: typeof ofCapacity;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: typeof ofIdentity;
    narrativeFunc: (value: Opt<number>) => string | undefined;
    titleIndex: number;
    importance: number;
} | {
    extractor: (p: ISku) => unknown;
    section: string;
    header: string;
    key: string;
    titleFunc: (value: DBList<string>) => string | undefined;
    narrativeFunc: (value: DBList<string>) => string | undefined;
    titleIndex: number;
    importance: number;
})[];
