export const flags = {
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

export const flagOptions = ['isMediaMail', 'isDiscontinued', 'isRare', 'isVintage', 'isCollectible', 'hasManual', 'isUnopened', 'hasInstructionManual', 'inOriginalPackaging'];

export const mediaVideoFlags = {
    isDirectorsEdition: "Director's Edition",
    isCollectorsEdition: "Collector's Edition",
    isWidescreen: 'Widescreen',
    isSubtitled: 'Subtitled',
    isClosedCaptioned: 'Closed-Captioned',
    isUnrated: 'Unrated'
};

export type MediaFlags = keyof typeof mediaVideoFlags;
export const mediaVideoFlagsOptions: MediaFlags[] = ['isDirectorsEdition', 'isCollectorsEdition', 'isUnrated', 'isWidescreen', 'isSubtitled', 'isClosedCaptioned'];

export const allFlags = Object.fromEntries(Object.entries(Object.assign({}, flags, mediaVideoFlags)).map((x) => [x[0], { text: x[1], key: x[0] }]));

console.log(allFlags);

export type Flags = keyof typeof flags | keyof typeof mediaVideoFlags;
