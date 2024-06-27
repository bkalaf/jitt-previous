export declare const flags: {
    isMediaMail: string;
    isDiscontinued: string;
    isRare: string;
    isVintage: string;
    isCollectible: string;
    hasManual: string;
    hasInstructionManual: string;
    isUnopened: string;
    inOriginalPackaging: string;
};
export declare const flagOptions: string[];
export declare const mediaVideoFlags: {
    isDirectorsEdition: string;
    isCollectorsEdition: string;
    isWidescreen: string;
    isSubtitled: string;
    isClosedCaptioned: string;
    isUnrated: string;
};
export type MediaFlags = keyof typeof mediaVideoFlags;
export declare const mediaVideoFlagsOptions: MediaFlags[];
export declare const allFlags: {
    [k: string]: {
        text: string;
        key: string;
    };
};
export type Flags = keyof typeof flags | keyof typeof mediaVideoFlags;
