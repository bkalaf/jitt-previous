import { ColumnMeta } from '@tanstack/react-table';
import $masterEnum from './../schema/enums/enum-info.json';

const $me: MasterEnum = $masterEnum;
export function standardizeOptions(inc: Record<string, string | { text: string; key: string }> | Array<{ text: string; key: string; aliases?: string[] } | string>): Exclude<ColumnMeta<any, any>['enumInfo'], undefined> {
    if (Array.isArray(inc)) {
        const asArray1 = inc.map((v) => (typeof v === 'string' ? { key: v, text: v, aliases: [] } : { aliases: [], ...v })) as { text: string; key: string; aliases: string[] }[];
        const asArray2 = asArray1.map(({ aliases, ...rest }) => aliases.map((alias) => ({ ...rest, key: alias, text: alias }))).reduce((pv, cv) => [...pv, ...cv], asArray1);
        const asRecord = Object.fromEntries(asArray2.map((x) => [x.key, x] as [string, { text: string; selector?: string; key: string }]));
        return {
            asRecord,
            asArray: asArray2
        };
    }
    const asArray = Object.entries(inc).map(([k, v]) => {
        const spread = typeof v === 'string' ? { text: v, key: k } : v;
        return spread;
    });
    const asRecord = Object.fromEntries(asArray.map((v) => [v.key, { ...v, aliases: [] }] as [string, { text: string; key: string; aliases: string[]; selector?: string }]));
    return {
        asArray,
        asRecord
    };
}

export function standardizeEnum(value: ValueOf<MasterEnum>) {
    return {
        asArray: value,
        asRecord: Object.fromEntries(value.map((x) => [x.key, x] as [string, ArrayOf< ValueOf<MasterEnum>>])) as Record<string, ArrayOf<ValueOf<MasterEnum>>>
    };
}

export function standardizeFromEnumKey(enumKey: keyof MasterEnum) {
    return standardizeEnum($me[enumKey])
}