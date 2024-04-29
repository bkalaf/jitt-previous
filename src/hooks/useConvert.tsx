import { useCallback, useMemo } from 'react';
import { cnvrtPrimitives, isPrimitive } from '../schema/conversion/cnvrt';
import { useRealm } from './useRealm';

export function useConvert(type: string, objectType?: string) {
    const { convert } = useRealm();
    return useCallback(
        (values: any) => {
            console.info(`attempting convert: ${type} ${objectType}`);
            if (type === 'list' || type === 'set') {
                if (objectType == null) throw new Error(`no objectType: ${type}`);
                if (isPrimitive(objectType)) {
                    return convert(objectType)(values.value);
                }
                return convert(objectType)(values.value);
            }
            if (type === 'dictionary') {
                if (objectType == null) throw new Error(`no objectType: ${type}`);
                return { key: values.key, value: convert(objectType)(values.value) };
            }
            return convert(type)(values);
        },
        [convert, objectType, type]
    );
}

export function useConvertListItem(objectType: string) {
    const { convert } = useRealm();
    const prim = isPrimitive(objectType);
    const convertValue = useMemo(() => prim ? cnvrtPrimitives[objectType as keyof typeof cnvrtPrimitives] : convert(objectType), [convert, objectType, prim]);
    return convertValue;
}