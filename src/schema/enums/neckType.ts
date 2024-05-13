export const _neckTypes = {
    'boat-neck': 'boat-neck',
    'choker-neck': 'choker-neck',
    'collared-neck': 'collared-neck',
    'cowl-neck': 'cowl-neck',
    'crew-neck': 'crew-neck',
    'halter-neck': 'halter-neck',
    'henley-neck': 'henley-neck',
    'high-neck': 'high-neck',
    'hooded-neck': 'hooded-neck',
    'jewel-neck': 'jewel-neck',
    'mandarin-neck': 'mandarin-neck',
    'mock-neck': 'mock-neck',
    'notch-neck': 'notch-neck',
    'off-shoulder-neck': 'off-shoulder-neck',
    'one-shoulder-neck': 'one-shoulder-neck',
    'sailor-collar-neck': 'sailor-collar-neck',
    'scoop-neck': 'scoop-neck',
    'shawl-neck': 'shawl-neck',
    'square-neck': 'square-neck',
    'turtle-neck': 'turtle-neck',
    'v-neck': 'v-neck'
};

export const neckTypesAliases = {
    'v neck': 'v-neck',
    'scoop neck': 'scoop-neck',
    'off-shoulder': 'off-shoulder-neck'
}

const neckTypesMap = Object.fromEntries(Object.entries(_neckTypes).map(([k, v]) => [k, ({ key: k, text: v })]));

export const neckTypes = {
    ...neckTypesMap,
    ...Object.fromEntries(Object.entries(neckTypesAliases).map(([k, v]) => [k, neckTypesMap[v]]))
};
