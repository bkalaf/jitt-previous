import { BleachWithChlorine, Bleaching, DoNotBleach, DoNotDry, DoNotDryClean, DoNotIron, DoNotSteam, DoNotTumbleDry, DoNotWash, DoNotWring, DripDry, DripDryDryInShade, DryCleanAnySolvent, DryCleanDelicate, DryCleanLowHeat, DryCleanNoSteamFinishing, DryCleanPceOnly, DryCleanPermanentPress, DryCleanPetroleumSolventDelicate, DryCleanPetroleumSolventOnly, DryCleanPetroleumSolventPermanentPress, DryCleanReducedMoisture, DryCleanShortCycle, DryFlat, DryInShade, Drying, HandWash, HangToDry, HangToDryDryInShade, HighHeatTumbleDry, IronAt110, IronAt150, IronAt200, IroningAllowed, LayFlatDryInShade, LowHeatTumbleDry, MachineWash, MachineWashPermanentPress, NoHeatTumbleDry, NonChlorineBleach, SoakFirst, SteamAsNeeded, TumbleDryAllowed, TumbleDryGentleOrDelicate, TumbleDryPermanentPress, WashAtOrBelow20, WashAtOrBelow30Degrees, WashAtOrBelow40Degrees, WashAtOrBelow50Degrees, WashAtOrBelow60Degrees, WashAtOrBelow70Degrees, WashAtOrBelow90Degrees, WashAtOrBelow95Degrees, WetClean, WetCleanDelicate, WetCleanPermanentPress } from '../../assets/laundrySVG';
export declare const degreeF = "\u2109";
export declare const degreeC = "\u2103";
export declare const LaundryCareOptions: {
    id: string;
    label: string;
}[];
export declare const celsiusToFarenheit: {
    20: number;
    30: number;
    40: number;
    50: number;
    58: number;
    60: number;
    65: number;
    70: number;
    90: number;
    95: number;
    110: number;
    150: number;
    200: number;
};
declare const bleaching: {
    doNotBleach: {
        text: string;
        Element: typeof DoNotBleach;
    };
    nonChlorineBleach: {
        text: string;
        Element: typeof NonChlorineBleach;
    };
    bleachingAllowed: {
        text: string;
        Element: typeof Bleaching;
    };
    bleachWithChlorine: {
        text: string;
        Element: typeof BleachWithChlorine;
    };
};
declare const drying: {
    doNotWring: {
        text: string;
        Element: typeof DoNotWring;
    };
    dryingAllowed: {
        text: string;
        Element: typeof Drying;
    };
    doNotDry: {
        text: string;
        Element: typeof DoNotDry;
    };
    dripDry: {
        text: string;
        Element: typeof DripDry;
    };
    dryInShade: {
        text: string;
        Element: typeof DryInShade;
    };
    dripDryDryInShade: {
        text: string;
        Element: typeof DripDryDryInShade;
    };
    dryFlat: {
        text: string;
        Element: typeof DryFlat;
    };
    dryFlatDryInShade: {
        text: string;
        Element: typeof LayFlatDryInShade;
    };
    hangToDry: {
        text: string;
        Element: typeof HangToDry;
    };
    hangToDryDryInShade: {
        text: string;
        Element: typeof HangToDryDryInShade;
    };
};
declare const ironing: {
    ironingAllowed: {
        text: string;
        Element: typeof IroningAllowed;
    };
    doNotIron: {
        text: string;
        Element: typeof DoNotIron;
    };
    doNotSteam: {
        text: string;
        Element: typeof DoNotSteam;
    };
    steamAsNeeded: {
        text: string;
        Element: typeof SteamAsNeeded;
    };
    ironAt110: {
        text: string;
        Element: typeof IronAt110;
    };
    ironAt150: {
        text: string;
        Element: typeof IronAt150;
    };
    ironAt200: {
        text: string;
        Element: typeof IronAt200;
    };
};
declare const dryClean: {
    doNotDryClean: {
        text: string;
        Element: typeof DoNotDryClean;
    };
    dryCleanAnySolvent: {
        text: string;
        Element: typeof DryCleanAnySolvent;
    };
    dryCleanPceOnly: {
        text: string;
        Element: typeof DryCleanPceOnly;
    };
    dryCleanPetroleumSolventOnly: {
        text: string;
        Element: typeof DryCleanPetroleumSolventOnly;
    };
    dryCleanLowHeat: {
        text: string;
        Element: typeof DryCleanLowHeat;
    };
    dryCleanReducedMoisture: {
        text: string;
        Element: typeof DryCleanReducedMoisture;
    };
    dryCleanNoSteamFinishing: {
        text: string;
        Element: typeof DryCleanNoSteamFinishing;
    };
    dryCleanShortCycle: {
        text: string;
        Element: typeof DryCleanShortCycle;
    };
};
declare const tumbleDry: {
    tumbleDryAllowed: {
        text: string;
        Element: typeof TumbleDryAllowed;
    };
    doNotTumbleDry: {
        text: string;
        Element: typeof DoNotTumbleDry;
    };
    highHeatTumbleDry: {
        text: string;
        Element: typeof HighHeatTumbleDry;
    };
    lowHeatTumbleDry: {
        text: string;
        Element: typeof LowHeatTumbleDry;
    };
    noHeatTumbleDry: {
        text: string;
        Element: typeof NoHeatTumbleDry;
    };
    mediumHeatTumbleDry: {
        text: string;
        Element: (props: any) => import("react/jsx-runtime").JSX.Element;
    };
};
declare const washTemperature: {
    washAtOrBelow20Degrees: {
        text: string;
        Element: typeof WashAtOrBelow20;
    };
    washAtOrBelow30Degrees: {
        text: string;
        Element: typeof WashAtOrBelow30Degrees;
    };
    washAtOrBelow40Degrees: {
        text: string;
        Element: typeof WashAtOrBelow40Degrees;
    };
    washAtOrBelow50Degrees: {
        text: string;
        Element: typeof WashAtOrBelow50Degrees;
    };
    washAtOrBelow60Degrees: {
        text: string;
        Element: typeof WashAtOrBelow60Degrees;
    };
    washAtOrBelow70Degrees: {
        text: string;
        Element: typeof WashAtOrBelow70Degrees;
    };
    washAtOrBelow90Degrees: {
        text: string;
        Element: typeof WashAtOrBelow90Degrees;
    };
    washAtOrBelow95Degrees: {
        text: string;
        Element: typeof WashAtOrBelow95Degrees;
    };
};
declare const wash: {
    machineWashAllowed: {
        text: string;
        Element: typeof MachineWash;
    };
    doNotWash: {
        text: string;
        Element: typeof DoNotWash;
    };
    handWash: {
        text: string;
        Element: typeof HandWash;
    };
    soakFirst: {
        text: string;
        Element: typeof SoakFirst;
    };
    wetCleanAllowed: {
        text: string;
        Element: typeof WetClean;
    };
};
declare const permanentPress: {
    dryCleanPermanentPress: {
        text: string;
        Element: typeof DryCleanPermanentPress;
    };
    dryCleanPetroleumSolventPermanentPress: {
        text: string;
        Element: typeof DryCleanPetroleumSolventPermanentPress;
    };
    tumbleDryPermanentPress: {
        text: string;
        Element: typeof TumbleDryPermanentPress;
    };
    machineWashPermanentPress: {
        text: string;
        Element: typeof MachineWashPermanentPress;
    };
    wetCleanPermanentPress: {
        text: string;
        Element: typeof WetCleanPermanentPress;
    };
};
declare const gentleOrDelicate: {
    dryCleanDelicate: {
        text: string;
        Element: typeof DryCleanDelicate;
    };
    dryCleanPetroleumSolventDelicate: {
        text: string;
        Element: typeof DryCleanPetroleumSolventDelicate;
    };
    tumbleDryGentleOrDelicate: {
        text: string;
        Element: typeof TumbleDryGentleOrDelicate;
    };
    machineWashGentleOrDelicate: {
        text: string;
        Element: (props: any) => import("react/jsx-runtime").JSX.Element;
    };
    wetCleanGentleOrDelicate: {
        text: string;
        Element: typeof WetCleanDelicate;
    };
};
export declare const ClothingCareMap: {
    bleaching: {
        doNotBleach: {
            text: string;
            Element: typeof DoNotBleach;
        };
        nonChlorineBleach: {
            text: string;
            Element: typeof NonChlorineBleach;
        };
        bleachingAllowed: {
            text: string;
            Element: typeof Bleaching;
        };
        bleachWithChlorine: {
            text: string;
            Element: typeof BleachWithChlorine;
        };
    };
    drying: {
        doNotWring: {
            text: string;
            Element: typeof DoNotWring;
        };
        dryingAllowed: {
            text: string;
            Element: typeof Drying;
        };
        doNotDry: {
            text: string;
            Element: typeof DoNotDry;
        };
        dripDry: {
            text: string;
            Element: typeof DripDry;
        };
        dryInShade: {
            text: string;
            Element: typeof DryInShade;
        };
        dripDryDryInShade: {
            text: string;
            Element: typeof DripDryDryInShade;
        };
        dryFlat: {
            text: string;
            Element: typeof DryFlat;
        };
        dryFlatDryInShade: {
            text: string;
            Element: typeof LayFlatDryInShade;
        };
        hangToDry: {
            text: string;
            Element: typeof HangToDry;
        };
        hangToDryDryInShade: {
            text: string;
            Element: typeof HangToDryDryInShade;
        };
    };
    ironing: {
        ironingAllowed: {
            text: string;
            Element: typeof IroningAllowed;
        };
        doNotIron: {
            text: string;
            Element: typeof DoNotIron;
        };
        doNotSteam: {
            text: string;
            Element: typeof DoNotSteam;
        };
        steamAsNeeded: {
            text: string;
            Element: typeof SteamAsNeeded;
        };
        ironAt110: {
            text: string;
            Element: typeof IronAt110;
        };
        ironAt150: {
            text: string;
            Element: typeof IronAt150;
        };
        ironAt200: {
            text: string;
            Element: typeof IronAt200;
        };
    };
    dryClean: {
        doNotDryClean: {
            text: string;
            Element: typeof DoNotDryClean;
        };
        dryCleanAnySolvent: {
            text: string;
            Element: typeof DryCleanAnySolvent;
        };
        dryCleanPceOnly: {
            text: string;
            Element: typeof DryCleanPceOnly;
        };
        dryCleanPetroleumSolventOnly: {
            text: string;
            Element: typeof DryCleanPetroleumSolventOnly;
        };
        dryCleanLowHeat: {
            text: string;
            Element: typeof DryCleanLowHeat;
        };
        dryCleanReducedMoisture: {
            text: string;
            Element: typeof DryCleanReducedMoisture;
        };
        dryCleanNoSteamFinishing: {
            text: string;
            Element: typeof DryCleanNoSteamFinishing;
        };
        dryCleanShortCycle: {
            text: string;
            Element: typeof DryCleanShortCycle;
        };
    };
    tumbleDry: {
        tumbleDryAllowed: {
            text: string;
            Element: typeof TumbleDryAllowed;
        };
        doNotTumbleDry: {
            text: string;
            Element: typeof DoNotTumbleDry;
        };
        highHeatTumbleDry: {
            text: string;
            Element: typeof HighHeatTumbleDry;
        };
        lowHeatTumbleDry: {
            text: string;
            Element: typeof LowHeatTumbleDry;
        };
        noHeatTumbleDry: {
            text: string;
            Element: typeof NoHeatTumbleDry;
        };
        mediumHeatTumbleDry: {
            text: string;
            Element: (props: any) => import("react/jsx-runtime").JSX.Element;
        };
    };
    washTemperature: {
        washAtOrBelow20Degrees: {
            text: string;
            Element: typeof WashAtOrBelow20;
        };
        washAtOrBelow30Degrees: {
            text: string;
            Element: typeof WashAtOrBelow30Degrees;
        };
        washAtOrBelow40Degrees: {
            text: string;
            Element: typeof WashAtOrBelow40Degrees;
        };
        washAtOrBelow50Degrees: {
            text: string;
            Element: typeof WashAtOrBelow50Degrees;
        };
        washAtOrBelow60Degrees: {
            text: string;
            Element: typeof WashAtOrBelow60Degrees;
        };
        washAtOrBelow70Degrees: {
            text: string;
            Element: typeof WashAtOrBelow70Degrees;
        };
        washAtOrBelow90Degrees: {
            text: string;
            Element: typeof WashAtOrBelow90Degrees;
        };
        washAtOrBelow95Degrees: {
            text: string;
            Element: typeof WashAtOrBelow95Degrees;
        };
    };
    wash: {
        machineWashAllowed: {
            text: string;
            Element: typeof MachineWash;
        };
        doNotWash: {
            text: string;
            Element: typeof DoNotWash;
        };
        handWash: {
            text: string;
            Element: typeof HandWash;
        };
        soakFirst: {
            text: string;
            Element: typeof SoakFirst;
        };
        wetCleanAllowed: {
            text: string;
            Element: typeof WetClean;
        };
    };
    permanentPress: {
        dryCleanPermanentPress: {
            text: string;
            Element: typeof DryCleanPermanentPress;
        };
        dryCleanPetroleumSolventPermanentPress: {
            text: string;
            Element: typeof DryCleanPetroleumSolventPermanentPress;
        };
        tumbleDryPermanentPress: {
            text: string;
            Element: typeof TumbleDryPermanentPress;
        };
        machineWashPermanentPress: {
            text: string;
            Element: typeof MachineWashPermanentPress;
        };
        wetCleanPermanentPress: {
            text: string;
            Element: typeof WetCleanPermanentPress;
        };
    };
    gentleOrDelicate: {
        dryCleanDelicate: {
            text: string;
            Element: typeof DryCleanDelicate;
        };
        dryCleanPetroleumSolventDelicate: {
            text: string;
            Element: typeof DryCleanPetroleumSolventDelicate;
        };
        tumbleDryGentleOrDelicate: {
            text: string;
            Element: typeof TumbleDryGentleOrDelicate;
        };
        machineWashGentleOrDelicate: {
            text: string;
            Element: (props: any) => import("react/jsx-runtime").JSX.Element;
        };
        wetCleanGentleOrDelicate: {
            text: string;
            Element: typeof WetCleanDelicate;
        };
    };
};
export type BleachingKeys = keyof typeof bleaching;
export type DryingKeys = keyof typeof drying;
export type IroningKeys = keyof typeof ironing;
export type DryCleanKeys = keyof typeof dryClean;
export type TumbleDryKeys = keyof typeof tumbleDry;
export type WashTemperatureKeys = keyof typeof washTemperature;
export type WashKeys = keyof typeof wash;
export type PermanentPressKeys = keyof typeof permanentPress;
export type GentleOrDelicateKeys = keyof typeof gentleOrDelicate;
export type ClothingCareSectionKeys = keyof typeof ClothingCareMap;
export type ClothingCareAllKeys = {
    [P in ClothingCareSectionKeys]: {
        [R in keyof (typeof ClothingCareMap)[P]]: R;
    }[keyof (typeof ClothingCareMap)[P] & string];
}[ClothingCareSectionKeys];
export type ClothingCareIndividualKeys<T extends ClothingCareSectionKeys> = {
    [P in ClothingCareSectionKeys]: {
        [R in keyof (typeof ClothingCareMap)[P]]: R;
    }[keyof (typeof ClothingCareMap)[P]];
}[T];
export declare const ClothingCareCompleteMap: Record<"bleaching", Record<"doNotBleach" | "nonChlorineBleach" | "bleachingAllowed" | "bleachWithChlorine", {
    name: string;
    text: string;
    Element: React.FunctionComponent<{
        props: any;
    }>;
}>> & Record<"drying", Record<"doNotWring" | "dryingAllowed" | "doNotDry" | "dripDry" | "dryInShade" | "dripDryDryInShade" | "dryFlat" | "dryFlatDryInShade" | "hangToDry" | "hangToDryDryInShade", {
    name: string;
    text: string;
    Element: React.FunctionComponent<{
        props: any;
    }>;
}>>;
export declare const getClothingCareSection: (section: ClothingCareSectionKeys) => {
    doNotBleach: {
        text: string;
        Element: typeof DoNotBleach;
    };
    nonChlorineBleach: {
        text: string;
        Element: typeof NonChlorineBleach;
    };
    bleachingAllowed: {
        text: string;
        Element: typeof Bleaching;
    };
    bleachWithChlorine: {
        text: string;
        Element: typeof BleachWithChlorine;
    };
} | {
    doNotWring: {
        text: string;
        Element: typeof DoNotWring;
    };
    dryingAllowed: {
        text: string;
        Element: typeof Drying;
    };
    doNotDry: {
        text: string;
        Element: typeof DoNotDry;
    };
    dripDry: {
        text: string;
        Element: typeof DripDry;
    };
    dryInShade: {
        text: string;
        Element: typeof DryInShade;
    };
    dripDryDryInShade: {
        text: string;
        Element: typeof DripDryDryInShade;
    };
    dryFlat: {
        text: string;
        Element: typeof DryFlat;
    };
    dryFlatDryInShade: {
        text: string;
        Element: typeof LayFlatDryInShade;
    };
    hangToDry: {
        text: string;
        Element: typeof HangToDry;
    };
    hangToDryDryInShade: {
        text: string;
        Element: typeof HangToDryDryInShade;
    };
} | {
    ironingAllowed: {
        text: string;
        Element: typeof IroningAllowed;
    };
    doNotIron: {
        text: string;
        Element: typeof DoNotIron;
    };
    doNotSteam: {
        text: string;
        Element: typeof DoNotSteam;
    };
    steamAsNeeded: {
        text: string;
        Element: typeof SteamAsNeeded;
    };
    ironAt110: {
        text: string;
        Element: typeof IronAt110;
    };
    ironAt150: {
        text: string;
        Element: typeof IronAt150;
    };
    ironAt200: {
        text: string;
        Element: typeof IronAt200;
    };
} | {
    doNotDryClean: {
        text: string;
        Element: typeof DoNotDryClean;
    };
    dryCleanAnySolvent: {
        text: string;
        Element: typeof DryCleanAnySolvent;
    };
    dryCleanPceOnly: {
        text: string;
        Element: typeof DryCleanPceOnly;
    };
    dryCleanPetroleumSolventOnly: {
        text: string;
        Element: typeof DryCleanPetroleumSolventOnly;
    };
    dryCleanLowHeat: {
        text: string;
        Element: typeof DryCleanLowHeat;
    };
    dryCleanReducedMoisture: {
        text: string;
        Element: typeof DryCleanReducedMoisture;
    };
    dryCleanNoSteamFinishing: {
        text: string;
        Element: typeof DryCleanNoSteamFinishing;
    };
    dryCleanShortCycle: {
        text: string;
        Element: typeof DryCleanShortCycle;
    };
} | {
    tumbleDryAllowed: {
        text: string;
        Element: typeof TumbleDryAllowed;
    };
    doNotTumbleDry: {
        text: string;
        Element: typeof DoNotTumbleDry;
    };
    highHeatTumbleDry: {
        text: string;
        Element: typeof HighHeatTumbleDry;
    };
    lowHeatTumbleDry: {
        text: string;
        Element: typeof LowHeatTumbleDry;
    };
    noHeatTumbleDry: {
        text: string;
        Element: typeof NoHeatTumbleDry;
    };
    mediumHeatTumbleDry: {
        text: string;
        Element: (props: any) => import("react/jsx-runtime").JSX.Element;
    };
} | {
    washAtOrBelow20Degrees: {
        text: string;
        Element: typeof WashAtOrBelow20;
    };
    washAtOrBelow30Degrees: {
        text: string;
        Element: typeof WashAtOrBelow30Degrees;
    };
    washAtOrBelow40Degrees: {
        text: string;
        Element: typeof WashAtOrBelow40Degrees;
    };
    washAtOrBelow50Degrees: {
        text: string;
        Element: typeof WashAtOrBelow50Degrees;
    };
    washAtOrBelow60Degrees: {
        text: string;
        Element: typeof WashAtOrBelow60Degrees;
    };
    washAtOrBelow70Degrees: {
        text: string;
        Element: typeof WashAtOrBelow70Degrees;
    };
    washAtOrBelow90Degrees: {
        text: string;
        Element: typeof WashAtOrBelow90Degrees;
    };
    washAtOrBelow95Degrees: {
        text: string;
        Element: typeof WashAtOrBelow95Degrees;
    };
} | {
    machineWashAllowed: {
        text: string;
        Element: typeof MachineWash;
    };
    doNotWash: {
        text: string;
        Element: typeof DoNotWash;
    };
    handWash: {
        text: string;
        Element: typeof HandWash;
    };
    soakFirst: {
        text: string;
        Element: typeof SoakFirst;
    };
    wetCleanAllowed: {
        text: string;
        Element: typeof WetClean;
    };
} | {
    dryCleanPermanentPress: {
        text: string;
        Element: typeof DryCleanPermanentPress;
    };
    dryCleanPetroleumSolventPermanentPress: {
        text: string;
        Element: typeof DryCleanPetroleumSolventPermanentPress;
    };
    tumbleDryPermanentPress: {
        text: string;
        Element: typeof TumbleDryPermanentPress;
    };
    machineWashPermanentPress: {
        text: string;
        Element: typeof MachineWashPermanentPress;
    };
    wetCleanPermanentPress: {
        text: string;
        Element: typeof WetCleanPermanentPress;
    };
} | {
    dryCleanDelicate: {
        text: string;
        Element: typeof DryCleanDelicate;
    };
    dryCleanPetroleumSolventDelicate: {
        text: string;
        Element: typeof DryCleanPetroleumSolventDelicate;
    };
    tumbleDryGentleOrDelicate: {
        text: string;
        Element: typeof TumbleDryGentleOrDelicate;
    };
    machineWashGentleOrDelicate: {
        text: string;
        Element: (props: any) => import("react/jsx-runtime").JSX.Element;
    };
    wetCleanGentleOrDelicate: {
        text: string;
        Element: typeof WetCleanDelicate;
    };
};
export declare const sectionNames: ("bleaching" | "drying" | "ironing" | "dryClean" | "tumbleDry" | "washTemperature" | "wash" | "permanentPress" | "gentleOrDelicate")[];
export declare const ClothingCareMapNoCategory: Record<ClothingCareIndividualKeys<"bleaching" | "drying" | "ironing" | "dryClean" | "tumbleDry" | "washTemperature" | "wash" | "permanentPress" | "gentleOrDelicate">, {
    text: string;
    name: string;
    Element: React.FunctionComponent<any>;
}>;
export {};
