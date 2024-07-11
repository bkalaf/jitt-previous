import { useCallback, useMemo } from 'react';
import { cnvrtPrimitives, convert as $convert, isPrimitive } from '../schema/conversion/cnvrt';

export function useConvertDictionaryItem<TValue>(objectType: string, append: (data: { key: string; value: TValue }) => void) {
    const types = useMemo(() => Object.values(window.schema).map((x) => x.schema), []);

    const convert = useCallback((objectType: string) => $convert(types as any, objectType), [types]);
    const prim = isPrimitive(objectType);
    const convertValue = useMemo(() => (prim ? cnvrtPrimitives()[objectType as keyof typeof cnvrtPrimitives] : convert(objectType)), [convert, objectType, prim]);
    return useCallback(
        ({ key, value }: { key: string; value: any }) => {
            const interim = {
                key: cnvrtPrimitives()['string'](key),
                value: convertValue(value)
            };
            console.info(`interim`, interim);
            return append(interim);
        },
        [append, convertValue]
    );
}
