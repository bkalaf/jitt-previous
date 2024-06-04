export const flags = {
    isMediaMail: 'Media Mail',
    isDiscontinued: 'Discontinued',
    isRare: 'Rare',
    isVintage: 'Vintage',
    isCollectible: 'Collectible',
    hasManual: 'Has Manual',
    isUnopened: 'Unopened'
};

export const flagOptions = ['isMediaMail', 'isDiscontinued', 'isRare', 'isVintage', 'isCollectible', 'hasManual', 'isUnopened'];

export const mediaFlags = {
    isDirectorsEdition: "Director's Edition",
    isCollectorsEdition: "Collector's Edition",
    isWidescreen: 'Widescreen',
    isSubtitled: 'Subtitled',
    isClosedCaptioned: 'Closed-Captioned',
    isUnrated: 'Unrated'
};

export type MediaFlags = keyof typeof mediaFlags;
export const mediaFlagOptions: MediaFlags[] = ['isDirectorsEdition', 'isCollectorsEdition', 'isUnrated', 'isWidescreen', 'isSubtitled', 'isClosedCaptioned'];

export const allFlags = Object.fromEntries(Object.entries(Object.assign({}, flags, mediaFlags)).map(x => [x[0], { text: x[1], key: x[0] }]));

console.log(allFlags);