"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allFlags = exports.mediaVideoFlagsOptions = exports.mediaVideoFlags = exports.flagOptions = exports.flags = void 0;
exports.flags = {
    isMediaMail: 'Media Mail',
    isDiscontinued: 'Discontinued',
    isRare: 'Rare',
    isVintage: 'Vintage',
    isCollectible: 'Collectible',
    hasManual: 'Has Manual',
    hasInstructionManual: 'Has Instruction Manual',
    isUnopened: 'Unopened',
    inOriginalPackaging: 'In Original Packaging'
};
exports.flagOptions = ['isMediaMail', 'isDiscontinued', 'isRare', 'isVintage', 'isCollectible', 'hasManual', 'isUnopened', 'hasInstructionManual', 'inOriginalPackaging'];
exports.mediaVideoFlags = {
    isDirectorsEdition: "Director's Edition",
    isCollectorsEdition: "Collector's Edition",
    isWidescreen: 'Widescreen',
    isSubtitled: 'Subtitled',
    isClosedCaptioned: 'Closed-Captioned',
    isUnrated: 'Unrated'
};
exports.mediaVideoFlagsOptions = ['isDirectorsEdition', 'isCollectorsEdition', 'isUnrated', 'isWidescreen', 'isSubtitled', 'isClosedCaptioned'];
exports.allFlags = Object.fromEntries(Object.entries(Object.assign({}, exports.flags, exports.mediaVideoFlags)).map((x) => [x[0], { text: x[1], key: x[0] }]));
console.log(exports.allFlags);
//# sourceMappingURL=flags.js.map