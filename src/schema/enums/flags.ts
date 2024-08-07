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

export const toysFlags = {
    hasTags: 'Has Tags'
}

export type ToysFlags = keyof typeof toysFlags;
export const toysFlagsOptions: ToysFlags[] = ['hasTags'];

export type MediaFlags = keyof typeof mediaVideoFlags;
export const mediaVideoFlagsOptions: MediaFlags[] = ['isDirectorsEdition', 'isCollectorsEdition', 'isUnrated', 'isWidescreen', 'isSubtitled', 'isClosedCaptioned'];

export const allFlags = Object.fromEntries(Object.entries(Object.assign({}, flags, mediaVideoFlags, toysFlags)).map((x) => [x[0], { text: x[1], key: x[0] }]));

// console.log(allFlags);

export type Flags = keyof typeof flags | keyof typeof mediaVideoFlags | keyof typeof toysFlags;

// console.log(Object.entries({ ...mediaVideoFlags, ...flags }).map(x => x.join(',').concat('\n')).join('\n'));

// console.log(allFlags['isUnrated'].text)