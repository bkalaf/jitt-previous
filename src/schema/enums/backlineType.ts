export const __ = {
    'open-back': {
        text: 'open-back',
        aliases: ['open back']
    },
    'u-shape-back': {
        text: 'u-shape-back',
        aliases: ['u-shape back']
    },
    'v-shape-back': {
        text: 'v-shape-back',
        aliases: ['v-shape back']
    },
    'bare-back': {
        text: 'bare-back',
        aliases: ['bare-back']
    },
    'x-cross-back': {
        text: 'x-cross-back',
        aliases: ['x-cross-back']
    },
    'bow-back': {
        text: 'bow-back',
        aliases: ['bow-back']
    },
    'strappy-back': {
        text: 'strappy-back',
        aliases: ['strappy-back']
    }
};

// console.log(Object.fromEntries(Object.keys(__).map(k => [k, k])));
// console.log(Object.fromEntries(Object.entries(__).map(([k, { aliases: v }]) => v.map(v1 => [v1, k])).reduce((pv, cv) => [...pv, ...cv], [])));

export const _backlineTypes = {
    'open-back': 'open-back',
    'u-shape-back': 'u-shape-back',
    'v-shape-back': 'v-shape-back',
    'bare-back': 'bare-back',
    'x-cross-back': 'x-cross-back',
    'bow-back': 'bow-back',
    'strappy-back': 'strappy-back'
};

export const backlineTypesAliases = {
    'open back': 'open-back',
    'u-shape back': 'u-shape-back',
    'v-shape back': 'v-shape-back',
    'bare back': 'bare-back',
    'x-cross back': 'x-cross-back',
    'bow back': 'bow-back',
    'strappy back': 'strappy-back'
};

export const backlineTypesMap = Object.fromEntries(Object.entries(_backlineTypes).map(([k, v]) => [k, { key: k, text: v }]));

export const backlineTypes = {
    ...backlineTypesMap,
    ...Object.fromEntries(Object.entries(backlineTypesAliases).map(([k, v]) => [k, backlineTypesMap[v]]))
};
