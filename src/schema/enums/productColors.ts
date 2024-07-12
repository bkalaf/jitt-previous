import { aliasColors, mercariColors } from './mercariColors';

// export const productColors: Record<keyof typeof aliasColors, ExtendedEnumInfo> = Object.fromEntries(Object.entries(aliasColors).map(([key, alias]) => {
//     const { selector, classes } = mercariColors[alias as keyof typeof mercariColors];
//     return [key, {
//         text: key,
//         key,
//         classes,
//         selector
//     }] as [string, ExtendedEnumInfo];
// })) as Record<keyof typeof aliasColors, ExtendedEnumInfo>;

const colorsMap = Object.fromEntries(Object.entries(mercariColors).map(([k, v]) => [k, { key: k, text: k, ...v }]));

export const productColors = {
    ...colorsMap,
    ...Object.fromEntries(Object.entries(aliasColors).map(([k, v]) => [k, { ...colorsMap[v], key: k }]))
};

// console.log(productColors);
