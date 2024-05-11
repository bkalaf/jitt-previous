export const _genders = {
    mens: "mens",
    womens: "womens",
    boys: "boys",
    girls: "girls",
    unisex: "unisex"
};

export const aliasGenders = {
    "men's": 'mens',
    "men": 'mens',
    "women's": 'womens',
    "women": 'womens',
    boy: 'boys',
    "boy's": 'boys',
    girl: 'girls',
    "girl's": 'girls'
};

// export function combineEnumMap<TKey extends string, TKey2 extends string>(enumMap: Record<TKey, string>, aliasMap: Record<TKey2, TKey>): Record<TKey | TKey2, { text: string, key: string; }> {
//     const maps = Object.fromEntries(Object.entries(enumMap).map(([k, v]) => [k, {
//         key: k,
//         text: v
//     }]));
//     const aliases = Object.fromEntries(Object.entries(aliasMap).map(([k, v]) => [k, maps[v]]));
//     return { ...maps, ...aliases } as any as Record<TKey | TKey2, { text: string, key: string; }>;
// }

// as Record<keyof typeof _genders | keyof typeof aliasGenders, { text: string, key: string; }>
export const genders = _genders;
export type Genders = keyof typeof genders;