"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClothingCareMapNoCategory = exports.sectionNames = exports.getClothingCareSection = exports.ClothingCareCompleteMap = exports.ClothingCareMap = exports.celsiusToFarenheit = exports.LaundryCareOptions = exports.degreeC = exports.degreeF = void 0;
const symb_1 = require("./symb");
const laundrySVG_1 = require("../../assets/laundrySVG");
const camelToKebab_1 = require("../../common/text/camelToKebab");
// console.log(camelToKebab('laundryCare'));
// console.log(camelToKebab('barcode'));
// console.log(camelToKebab('customAttributes'));
exports.degreeF = '\u2109';
exports.degreeC = '\u2103';
exports.LaundryCareOptions = Object.entries(symb_1.symb).map(([k, v]) => ({ id: k, label: v }));
exports.celsiusToFarenheit = {
    20: 70,
    30: 85,
    40: 105,
    50: 122,
    58: 135,
    60: 140,
    65: 150,
    70: 160,
    90: 195,
    95: 205,
    110: 230,
    150: 300,
    200: 400
};
const heatSetting = {
    low: {
        iron: 110,
        tumble: 50
    },
    medium: {
        iron: 150,
        tumble: 58
    },
    high: {
        iron: 200,
        tumble: 65
    }
};
const ironAt = (setting) => `Iron on ${setting}-heat setting (~${heatSetting[setting].iron}\u2103/~${exports.celsiusToFarenheit[heatSetting[setting].iron]}\u2109).`;
const tumbleAt = (setting) => `Tumble dry on ${setting} heat setting (~${heatSetting[setting].tumble}\u2103/~${exports.celsiusToFarenheit[heatSetting[setting].tumble]}\u2109).`;
const washTemp = (temp) => `Machine wash allowed at or below ${temp}\u2103/${exports.celsiusToFarenheit[temp]}\u2109.`;
const bleaching = {
    doNotBleach: {
        text: 'Do not bleach.',
        Element: laundrySVG_1.DoNotBleach
    },
    nonChlorineBleach: {
        text: 'Use non-chlorine bleach.',
        Element: laundrySVG_1.NonChlorineBleach
    },
    bleachingAllowed: {
        text: 'Bleach is allowed.',
        Element: laundrySVG_1.Bleaching
    },
    bleachWithChlorine: {
        text: 'Bleach with chlorine.',
        Element: laundrySVG_1.BleachWithChlorine
    }
};
const drying = {
    doNotWring: {
        text: 'Do not wring dry.',
        Element: laundrySVG_1.DoNotWring
    },
    dryingAllowed: {
        text: 'Drying allowed.',
        Element: laundrySVG_1.Drying
    },
    doNotDry: {
        text: 'Do not dry.',
        Element: laundrySVG_1.DoNotDry
    },
    dripDry: {
        text: 'Drip dry.',
        Element: laundrySVG_1.DripDry
    },
    dryInShade: {
        text: 'Dry in shade.',
        Element: laundrySVG_1.DryInShade
    },
    dripDryDryInShade: {
        text: 'Drip dry in shade.',
        Element: laundrySVG_1.DripDryDryInShade
    },
    dryFlat: {
        text: 'Lay flat to dry.',
        Element: laundrySVG_1.DryFlat
    },
    dryFlatDryInShade: {
        text: 'Lay flat to dry in shade.',
        Element: laundrySVG_1.LayFlatDryInShade
    },
    hangToDry: {
        text: 'Hang to dry.',
        Element: laundrySVG_1.HangToDry
    },
    hangToDryDryInShade: {
        text: 'Hang to dry in shade.',
        Element: laundrySVG_1.HangToDryDryInShade
    }
};
const ironing = {
    ironingAllowed: {
        text: 'Ironing allowed.',
        Element: laundrySVG_1.IroningAllowed
    },
    doNotIron: {
        text: 'Do not iron.',
        Element: laundrySVG_1.DoNotIron
    },
    doNotSteam: {
        text: 'Do not use steam.',
        Element: laundrySVG_1.DoNotSteam
    },
    steamAsNeeded: {
        text: 'Steam as needed.',
        Element: laundrySVG_1.SteamAsNeeded
    },
    ironAt110: {
        text: ironAt('low'),
        Element: laundrySVG_1.IronAt110
    },
    ironAt150: {
        text: ironAt('medium'),
        Element: laundrySVG_1.IronAt150
    },
    ironAt200: {
        text: ironAt('high'),
        Element: laundrySVG_1.IronAt200
    }
};
const dryClean = {
    doNotDryClean: {
        text: 'Do not dry clean.',
        Element: laundrySVG_1.DoNotDryClean
    },
    dryCleanAnySolvent: {
        text: 'Dry clean with any solvent.',
        Element: laundrySVG_1.DryCleanAnySolvent
    },
    dryCleanPceOnly: {
        text: 'Dry clean with PCE only.',
        Element: laundrySVG_1.DryCleanPceOnly
    },
    dryCleanPetroleumSolventOnly: {
        text: 'Dry clean with petroleum solvent only.',
        Element: laundrySVG_1.DryCleanPetroleumSolventOnly
    },
    dryCleanLowHeat: {
        text: 'Dry clean on low heat.',
        Element: laundrySVG_1.DryCleanLowHeat
    },
    dryCleanReducedMoisture: {
        text: 'Dry clean using less moisture than normal.',
        Element: laundrySVG_1.DryCleanReducedMoisture
    },
    dryCleanNoSteamFinishing: {
        text: 'Dry clean without steam finishing.',
        Element: laundrySVG_1.DryCleanNoSteamFinishing
    },
    dryCleanShortCycle: {
        text: 'Dry clean using the short cycle.',
        Element: laundrySVG_1.DryCleanShortCycle
    }
};
const tumbleDry = {
    tumbleDryAllowed: {
        text: 'Tumble dry allowed.',
        Element: laundrySVG_1.TumbleDryAllowed
    },
    doNotTumbleDry: {
        text: 'Do not tumble dry.',
        Element: laundrySVG_1.DoNotTumbleDry
    },
    highHeatTumbleDry: {
        text: tumbleAt('high'),
        Element: laundrySVG_1.HighHeatTumbleDry
    },
    lowHeatTumbleDry: {
        text: tumbleAt('low'),
        Element: laundrySVG_1.LowHeatTumbleDry
    },
    noHeatTumbleDry: {
        text: 'No heat tumble dry.',
        Element: laundrySVG_1.NoHeatTumbleDry
    },
    mediumHeatTumbleDry: {
        text: tumbleAt('medium'),
        Element: laundrySVG_1.MediumHeatTumbleDry
    }
};
const washTemperature = {
    washAtOrBelow20Degrees: {
        text: washTemp(20),
        Element: laundrySVG_1.WashAtOrBelow20
    },
    washAtOrBelow30Degrees: {
        text: washTemp(30),
        Element: laundrySVG_1.WashAtOrBelow30Degrees
    },
    washAtOrBelow40Degrees: { text: washTemp(40), Element: laundrySVG_1.WashAtOrBelow40Degrees },
    washAtOrBelow50Degrees: { text: washTemp(50), Element: laundrySVG_1.WashAtOrBelow50Degrees },
    washAtOrBelow60Degrees: { text: washTemp(60), Element: laundrySVG_1.WashAtOrBelow60Degrees },
    washAtOrBelow70Degrees: { text: washTemp(70), Element: laundrySVG_1.WashAtOrBelow70Degrees },
    washAtOrBelow90Degrees: { text: washTemp(90), Element: laundrySVG_1.WashAtOrBelow90Degrees },
    washAtOrBelow95Degrees: { text: washTemp(95), Element: laundrySVG_1.WashAtOrBelow95Degrees }
};
const wash = {
    machineWashAllowed: {
        text: 'Machine wash allowed.',
        Element: laundrySVG_1.MachineWash
    },
    doNotWash: {
        text: 'Do not machine wash.',
        Element: laundrySVG_1.DoNotWash
    },
    handWash: {
        text: 'Hand wash only.',
        Element: laundrySVG_1.HandWash
    },
    soakFirst: {
        text: 'Soak before washing.',
        Element: laundrySVG_1.SoakFirst
    },
    wetCleanAllowed: {
        text: 'Wet clean allowed.',
        Element: laundrySVG_1.WetClean
    }
};
const permanentPress = {
    dryCleanPermanentPress: {
        text: 'Dry clean on permanent press setting.',
        Element: laundrySVG_1.DryCleanPermanentPress
    },
    dryCleanPetroleumSolventPermanentPress: {
        text: 'Dry clean with petroleum solvent on permanent press setting.',
        Element: laundrySVG_1.DryCleanPetroleumSolventPermanentPress
    },
    tumbleDryPermanentPress: {
        text: 'Tumble dry on permanent press setting.',
        Element: laundrySVG_1.TumbleDryPermanentPress
    },
    machineWashPermanentPress: {
        text: 'Machine wash on permanent press setting.',
        Element: laundrySVG_1.MachineWashPermanentPress
    },
    wetCleanPermanentPress: {
        text: 'Wet clean on permanent press setting.',
        Element: laundrySVG_1.WetCleanPermanentPress
    }
};
const gentleOrDelicate = {
    dryCleanDelicate: {
        text: 'Dry clean on gentle/delicate setting.',
        Element: laundrySVG_1.DryCleanDelicate
    },
    dryCleanPetroleumSolventDelicate: {
        text: 'Dry clean with petroleum solvent on gentle/delicate setting.',
        Element: laundrySVG_1.DryCleanPetroleumSolventDelicate
    },
    tumbleDryGentleOrDelicate: {
        text: 'Tumble dry on gentle/delicate setting.',
        Element: laundrySVG_1.TumbleDryGentleOrDelicate
    },
    machineWashGentleOrDelicate: {
        text: 'Machine wash on gentle/delicate setting.',
        Element: laundrySVG_1.MachineWashGentleOrDelicate
    },
    wetCleanGentleOrDelicate: {
        text: 'Wet clean on gentle/delicate setting.',
        Element: laundrySVG_1.WetCleanDelicate
    }
};
exports.ClothingCareMap = {
    bleaching,
    drying,
    ironing,
    dryClean,
    tumbleDry,
    washTemperature,
    wash,
    permanentPress,
    gentleOrDelicate
};
exports.ClothingCareCompleteMap = Object.fromEntries(Object.entries(exports.ClothingCareMap).map(([k, v]) => [k, Object.fromEntries(Object.entries(v).map(([k2, v2]) => [k2, Object.assign(Object.assign({}, v2), { name: (0, camelToKebab_1.camelToKebab)(k2) })]))]));
const getClothingCareSection = (section) => exports.ClothingCareMap[section];
exports.getClothingCareSection = getClothingCareSection;
// export const getClothingCareSectionKeys = (section: ClothingCareSectionKeys) => getClothingCareSection(section);
exports.sectionNames = ['bleaching', 'drying', 'ironing', 'dryClean', 'tumbleDry', 'washTemperature', 'wash', 'permanentPress', 'gentleOrDelicate'];
exports.ClothingCareMapNoCategory = exports.sectionNames.map(exports.getClothingCareSection).reduce((pv, cv) => (Object.assign(Object.assign({}, pv), cv)), {});
//# sourceMappingURL=index.js.map