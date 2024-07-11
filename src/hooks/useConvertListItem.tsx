import { useCallback, useMemo } from 'react';
import { cnvrtPrimitives, convert as $convert, isPrimitive } from '../schema/conversion/cnvrt';

export function useConvertListItem(objectType: string) {
    const types = useMemo(() => Object.values(window.schema).map((x) => x.schema), []);

    const convert = useCallback((objectType: string) => $convert(types as any, objectType), [types]);
    const prim = isPrimitive(objectType);
    const convertValue = useMemo(() => (prim ? ({ value }: { value: any }) => cnvrtPrimitives()[objectType as keyof typeof cnvrtPrimitives](value) : convert(objectType)), [convert, objectType, prim]);
    return convertValue;
}
