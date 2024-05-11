import { aliasColors, mercariColors } from './mercariColors';

export const productColors: Record<keyof typeof aliasColors, ExtendedEnumInfo> = Object.fromEntries(Object.entries(aliasColors).map(([key, alias]) => {
    const { selector, classes } = mercariColors[alias as keyof typeof mercariColors];
    return [key, {
        text: key,
        key,
        classes,
        selector
    }] as [string, ExtendedEnumInfo];
})) as Record<keyof typeof aliasColors, ExtendedEnumInfo>;

export type ProductColors = keyof typeof aliasColors;